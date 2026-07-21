$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:8004/')
$listener.Start()
$root = $PSScriptRoot
$mime = @{
  '.html' = 'text/html; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.js'   = 'application/javascript; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'
  '.png'  = 'image/png'
  '.svg'  = 'image/svg+xml'
  '.ico'  = 'image/x-icon'
}
Write-Host 'Server running at http://localhost:8004/' -ForegroundColor Green
function resolve-file($p) {
  $f = Join-Path $root $p
  if (Test-Path $f -PathType Leaf) { return $f }
  $dir = $p.TrimEnd('/')
  $f2 = Join-Path $root "$dir/index.html"
  if (Test-Path $f2 -PathType Leaf) { return $f2 }
  return $null
}

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $path = $ctx.Request.Url.LocalPath.TrimStart('/')
  if ($path -eq '') { $path = 'index.html' }
  $file = resolve-file $path
  if ($file) {
    $ext = [IO.Path]::GetExtension($file)
    $ctx.Response.ContentType = if ($mime[$ext]) { $mime[$ext] } else { 'application/octet-stream' }
    $bytes = [IO.File]::ReadAllBytes($file)
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $ctx.Response.StatusCode = 404
    $notfound = Join-Path $root '404.html'
    if (Test-Path $notfound -PathType Leaf) {
      $bytes = [IO.File]::ReadAllBytes($notfound)
      $ctx.Response.ContentType = 'text/html; charset=utf-8'
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    }
  }
  $ctx.Response.Close()
}
