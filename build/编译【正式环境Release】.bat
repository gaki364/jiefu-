echo off
cls
set base_dir=%cd%
set source_dir=%cd%

:: TODO 修改位置 gradlew编译参数，不同版本参数不同
set gradlew_par=:app:mergeP_relAReleaseAssets --rerun-tasks  :app:assembleP_relARelease
set apk_path=%base_dir%\app\build\outputs\apk\Release\

::输出
echo 当前目录为: %base_dir%
echo android目录为：%source_dir%
echo 目标apk目录为：%apk_path%

echo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
echo 删除生成apk目录
rd /s /q %apk_path%

echo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
echo 开始调用gradlew
cd /d %source_dir%
rd /s /q %source_dir%\app\build\intermediates\merged_assets
choice /t 1 /d y /n >nul
call %base_dir%\gradlew.bat %gradlew_par%

echo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
echo 复制apk文件
md %base_dir%\build_apk
cd %apk_path%
for /r %%a in (*.apk) do copy %%a %base_dir%\build_apk

cd %base_dir%
echo 编译完成
pause