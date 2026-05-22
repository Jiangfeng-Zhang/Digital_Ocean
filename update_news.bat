@echo off
chcp 65001 >nul
echo ====================================
echo  AI 新闻数据更新工具
echo ====================================
echo.
echo 正在从 news.daheiai.com 抓取最新数据...
echo.

cd /d "%~dp0.."
python scripts\fetch_news.py

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✓ 更新完成！请刷新浏览器查看效果。
    echo.
) else (
    echo.
    echo ✗ 更新失败，请检查网络连接。
    echo.
)

pause