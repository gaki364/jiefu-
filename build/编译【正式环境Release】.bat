echo off
cls
set base_dir=%cd%
set source_dir=%cd%

:: TODO �޸�λ�� gradlew�����������ͬ�汾������ͬ
set gradlew_par=:app:mergeP_relAReleaseAssets --rerun-tasks  :app:assembleP_relARelease
set apk_path=%base_dir%\app\build\outputs\apk\Release\

::���
echo ��ǰĿ¼Ϊ: %base_dir%
echo androidĿ¼Ϊ��%source_dir%
echo Ŀ��apkĿ¼Ϊ��%apk_path%

echo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
echo ɾ������apkĿ¼
rd /s /q %apk_path%

echo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
echo ��ʼ����gradlew
cd /d %source_dir%
rd /s /q %source_dir%\app\build\intermediates\merged_assets
choice /t 1 /d y /n >nul
call %base_dir%\gradlew.bat %gradlew_par%

echo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
echo ����apk�ļ�
md %base_dir%\build_apk
cd %apk_path%
for /r %%a in (*.apk) do copy %%a %base_dir%\build_apk

cd %base_dir%
echo �������
pause