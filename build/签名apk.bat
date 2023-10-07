echo off
cls
set base_dir=%cd%

set "psCommand=C:\Windows\System32\WindowsPowerShell\v1.0\powershell -Command "$pword = read-host 'Enter Password' -AsSecureString ; ^
		$BSTR=[System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($pword); ^
			[System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)""
for /f "usebackq delims=" %%p in (`%psCommand%`) do set password=%%p

::输出
echo 当前目录为: %base_dir%
echo 开始APK签名

cd %base_dir%\build_apk
SETLOCAL ENABLEDELAYEDEXPANSION
for /f %%i in ('dir /b *.apk') do (
java -jar %base_dir%\apksigner.jar sign --ks %base_dir%\Android.keystore --ks-key-alias Android --ks-pass pass:%password% --key-pass pass:%password% --out %base_dir%\%%i %base_dir%\build_apk\%%i
)

cd %base_dir%
rd /s /q %base_dir%\build_apk
echo 所有apk签名完成.....
pause