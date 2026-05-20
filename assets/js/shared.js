// === Digital Ocean · Canvas Particle System ===
// Self-contained, no external dependencies, China-accessible

(function () {
  'use strict';

  var canvas, ctx, W, H, dpr
  var particles = []
  var mouseX = -1000, mouseY = -1000
  var scrollDepth = 0 // 0 = surface, 1 = deep
  var time = 0
  var ripplePoints = []
  var animId = null
  var PARTICLE_COUNT = 240

  // === Canvas Setup ===
  function resize() {
    dpr = window.devicePixelRatio || 1
    W = window.innerWidth
    H = window.innerHeight
    canvas.width = W * dpr
    canvas.height = H * dpr
    canvas.style.width = W + 'px'
    canvas.style.height = H + 'px'
    ctx.scale(dpr, dpr)
  }

  // === Particle ===
  function Particle() {
    this.reset(true)
  }

  Particle.prototype.reset = function (randomY) {
    this.x = Math.random() * W
    this.y = randomY ? Math.random() * H : -20
    this.size = 0.8 + Math.random() * 2.2
    this.speedX = (Math.random() - 0.5) * 0.6
    this.speedY = 0.2 + Math.random() * 0.8
    this.wobbleSpeed = 0.005 + Math.random() * 0.02
    this.wobbleAmp = 0.3 + Math.random() * 1.2
    this.wobbleOffset = Math.random() * Math.PI * 2
    this.alpha = 0.15 + Math.random() * 0.5
    this.alphaTarget = this.alpha
    this.hue = 175 + Math.random() * 30 // cyan range
    this.sat = 80 + Math.random() * 20
    this.light = 50 + Math.random() * 30
    this.life = 1
    this.rippleForce = 0
  }

  // === Color based on depth ===
  function getParticleColor(particle) {
    var d = Math.min(scrollDepth, 1)
    var hue, sat, light

    if (d < 0.3) {
      // Surface: cyan-teal spectrum
      hue = particle.hue - d * 30
      sat = particle.sat
      light = particle.light + 10
    } else if (d < 0.6) {
      // Mid: shifting to blue-purple
      hue = 210 + (d - 0.3) / 0.3 * 40
      sat = 90
      light = 55
    } else {
      // Deep: purple-magenta
      hue = 260 + (d - 0.6) / 0.4 * 30
      sat = 85
      light = 50 - (d - 0.6) * 20
    }

    return 'hsla(' + hue + ', ' + sat + '%, ' + light + '%, ' + (particle.alpha * particle.life) + ')'
  }

  // === Ripple ===
  function Ripple(x, y, strength) {
    this.x = x
    this.y = y
    this.radius = 0
    this.maxRadius = 80 + strength * 60
    this.life = 1
    this.strength = strength
  }

  // === Initialize Particles ===
  function initParticles(count) {
    particles = []
    for (var i = 0; i < count; i++) {
      particles.push(new Particle())
    }
  }

  // === Mouse / Touch interaction ===
  function onPointerMove(x, y) {
    mouseX = x
    mouseY = y
    ripplePoints.push(new Ripple(x, y, 1))
    if (ripplePoints.length > 30) ripplePoints.shift()
  }

  document.addEventListener('mousemove', function (e) {
    onPointerMove(e.clientX, e.clientY)
  })

  document.addEventListener('touchmove', function (e) {
    var t = e.touches[0]
    if (t) onPointerMove(t.clientX, t.clientY)
  }, { passive: true })

  // === Scroll depth tracking ===
  function updateScrollDepth() {
    var docH = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )
    var winH = window.innerHeight
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    var maxScroll = Math.max(docH - winH, 1)
    scrollDepth = Math.min(scrollTop / maxScroll, 1)
    document.documentElement.style.setProperty('--depth-current', scrollDepth)
  }

  window.addEventListener('scroll', updateScrollDepth, { passive: true })
  window.addEventListener('resize', function () {
    resize()
    initParticles(PARTICLE_COUNT)
  }, { passive: true })

  // === Draw ===
  function draw() {
    ctx.clearRect(0, 0, W, H)

    // Static deep ocean background (no depth-based shifting on sub-sites)
    ctx.fillStyle = '#060d18'
    ctx.fillRect(0, 0, W, H)

    // Update ripples
    for (var ri = ripplePoints.length - 1; ri >= 0; ri--) {
      var r = ripplePoints[ri]
      r.radius += 1.2
      r.life -= 0.02
      if (r.life <= 0 || r.radius > r.maxRadius) {
        ripplePoints.splice(ri, 1)
      }
    }

    // Draw ripple waves
    for (var ri2 = 0; ri2 < ripplePoints.length; ri2++) {
      var r2 = ripplePoints[ri2]
      ctx.beginPath()
      ctx.arc(r2.x, r2.y, r2.radius, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(0, 229, 200, ' + (r2.life * 0.15) + ')'
      ctx.lineWidth = 1
      ctx.stroke()
      var innerR = Math.max(r2.radius - 15, 0)
      ctx.beginPath()
      ctx.arc(r2.x, r2.y, innerR, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(0, 136, 255, ' + (r2.life * 0.1) + ')'
      ctx.stroke()
    }

    // Update and draw particles
    var speedMult = 1 + scrollDepth * 1.5
    var wobbleMult = 1 + scrollDepth * 0.5

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i]

      // Movement
      var wx = Math.sin(time * p.wobbleSpeed + p.wobbleOffset) * p.wobbleAmp * wobbleMult
      p.x += p.speedX * speedMult + wx * 0.3
      p.y += p.speedY * speedMult * (1 - scrollDepth * 0.3)

      // Mouse / pointer ripple repulsion
      var dx = p.x - mouseX
      var dy = p.y - mouseY
      var dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 120 && dist > 0) {
        var force = (1 - dist / 120) * 2.5
        p.x += (dx / dist) * force
        p.y += (dy / dist) * force
        p.rippleForce = force
      }

      // Wrap around
      if (p.y > H + 10) {
        p.reset()
      }
      if (p.x < -20) p.x = W + 20
      if (p.x > W + 20) p.x = -20

      // Fade near edges
      p.life = 1
      if (p.y < 10) p.life = p.y / 10
      if (p.y > H - 10) p.life = (H - p.y) / 10

      // Draw
      var color = getParticleColor(p)
      var size = p.size * (1 + scrollDepth * 0.8)

      ctx.beginPath()
      ctx.arc(p.x, p.y, size, 0, Math.PI * 2)

      if (scrollDepth > 0.5 && size > 2) {
        ctx.shadowBlur = 8 + scrollDepth * 12
        ctx.shadowColor = color
      } else {
        ctx.shadowBlur = 4 + size * 2
        ctx.shadowColor = color
      }

      var colorStr = color
      ctx.fillStyle = colorStr
      ctx.fill()

      // Connection lines (deeper = more connections)
      if (scrollDepth > 0.3) {
        for (var j = i + 1; j < Math.min(i + 5, particles.length); j++) {
          var p2 = particles[j]
          var cdx = p.x - p2.x
          var cdy = p.y - p2.y
          var cdist = Math.sqrt(cdx * cdx + cdy * cdy)
          if (cdist < 80 + scrollDepth * 60) {
            var connAlpha = (1 - cdist / (80 + scrollDepth * 60)) * 0.15 * (scrollDepth - 0.3) / 0.7
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = 'rgba(0, 229, 200, ' + connAlpha + ')'
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      ctx.shadowBlur = 0
    }

    // Convergence effect (near bottom)
    if (scrollDepth > 0.8) {
      var conv = (scrollDepth - 0.8) / 0.2
      var cx = W / 2
      var cy = H * 0.4
      for (var ci = 0; ci < particles.length; ci++) {
        var cp = particles[ci]
        var cpx = cp.x + (cx - cp.x) * 0.008 * conv
        var cpy = cp.y + (cy - cp.y) * 0.008 * conv
        cp.x = cpx
        cp.y = cpy
        cp.hue = 180 + conv * 40
      }
    }

    time += 0.016
    animId = requestAnimationFrame(draw)
  }

  // === Main init ===
  document.addEventListener('DOMContentLoaded', function () {
    canvas = document.createElement('canvas')
    canvas.id = 'ocean-canvas'
    document.body.prepend(canvas)
    ctx = canvas.getContext('2d')
    resize()
    initParticles(PARTICLE_COUNT)
    updateScrollDepth()
    draw()

    // Add scanlines to body
    var sl = document.createElement('div')
    sl.className = 'scanlines'
    document.body.appendChild(sl)
  })

  // Expose for debug / external access
  window.ocean = {
    setDepth: function (d) { scrollDepth = Math.max(0, Math.min(1, d)) },
    getDepth: function () { return scrollDepth },
    addRipple: function (x, y, s) { ripplePoints.push(new Ripple(x, y, s || 1)) },
    resize: resize
  }
})()