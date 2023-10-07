@echo off
set oldPath=%cd%\unpackage\resources\*
set dstPath=%cd%\build\app\src\main\assets\apps

echo 删除文件夹:%dstPath%
rd /s /q %dstPath%

echo 新建文件夹:%dstPath%
md %dstPath%

echo 复制:%oldPath% 到 %dstPath%
xcopy %oldPath% %dstPath% /s/e/i/y

echo 执行完成 按任意键继续
pause
