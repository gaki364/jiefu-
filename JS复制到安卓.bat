@echo off
set oldPath=%cd%\unpackage\resources\*
set dstPath=%cd%\build\app\src\main\assets\apps

echo ɾ���ļ���:%dstPath%
rd /s /q %dstPath%

echo �½��ļ���:%dstPath%
md %dstPath%

echo ����:%oldPath% �� %dstPath%
xcopy %oldPath% %dstPath% /s/e/i/y

echo ִ����� �����������
pause
