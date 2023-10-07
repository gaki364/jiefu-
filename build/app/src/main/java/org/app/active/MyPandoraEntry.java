package org.app.active;

import android.app.Activity;
import android.app.Application;
import android.content.Intent;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.text.TextUtils;

import com.adjust.sdk.AdjustEvent;
import com.adjust.sdk.LogLevel;
import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsLogger;

import org.json.JSONObject;

import java.io.File;
import java.io.InputStream;

import io.dcloud.PandoraEntry;
import io.dcloud.WebAppActivity;
import io.dcloud.common.adapter.io.DHFile;
import io.dcloud.common.util.BaseInfo;
import io.dcloud.common.util.IOUtil;
import io.dcloud.common.util.PdrUtil;
import io.dcloud.feature.internal.sdk.SDK;
import com.adjust.sdk.Adjust;
import com.adjust.sdk.AdjustConfig;

public class MyPandoraEntry extends Activity {
    private String TAG = "MyPandoraEntry";
    
    protected void onCreate(Bundle var1) {
        //FacebookSdk.sdkInitialize(this);
        //AppEventsLogger.activateApp(this);

        super.onCreate(var1);
        Intent var2 = this.getIntent();
        BaseInfo.parseControl();
        if (SDK.isUniMPSDK() && var2.hasExtra("appid")) {
            BaseInfo.sDefaultBootApp = var2.getStringExtra("appid");
        }

        //adjust
        String appToken = "xddlrl9p9fy8";
        String environment = AdjustConfig.ENVIRONMENT_PRODUCTION;
        //String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
        AdjustConfig config = new AdjustConfig(this, appToken, environment);
        Adjust.onCreate(config);
        config.setEventBufferingEnabled(false);
        config.setSendInBackground(true);
        //adjust

        if (SDK.isUniMPSDK()) {
            this.a(var2);
        } else if (BaseInfo.SyncDebug) {
            this.a(var2);
        }

        boolean var3 = false;

        try {
            var3 = var2.getBooleanExtra("is_stream_app", var3);
        } catch (Exception var5) {
            var5.printStackTrace();
            this.finish();
            return;
        }

        if (var2.hasExtra("__start_from_to_class__")) {
            String var4 = var2.getStringExtra("__start_from_to_class__");
            var2.setClassName(this.getPackageName(), var4);
            var2.removeExtra("__start_from_to_class__");
        } else if (var3) {
            var2.setClass(this, WebAppActivity.class);
            var2.putExtra("is_stream_app", true);
        } else {
            var2.putExtra("short_cut_class_name", PandoraEntry.class.getName());
            var2.setClass(this, MyPandoraEntryActivity.class);
        }

        this.startActivity(var2);
        if (SDK.isUniMPSDK()) {
            this.finish();
        } else {
            (new Handler()).postDelayed(new Runnable() {
                public void run() {
                    MyPandoraEntry.this.finish();
                }
            }, 20L);
        }

    }

    protected void onResume() {
        super.onResume();
        Adjust.onResume();
    }
    protected void onPause() {
        super.onPause();
        Adjust.onPause();
    }

    private void a(Intent var1) {
        try {
            boolean var2 = SDK.isUniMPSDK();
            String var3 = BaseInfo.sDefaultBootApp + "/www/manifest.json";
            InputStream var5 = null;
            File var4;
            String var6;
            if (var2) {
                var6 = BaseInfo.sCacheFsAppsPath + var3;
                var4 = new File(var6);
                if (var4.exists()) {
                    var5 = DHFile.getInputStream(var4);
                } else {
                    var5 = this.getResources().getAssets().open(var3);
                }
            } else {
                File var9 = this.getExternalFilesDir(Environment.DIRECTORY_PICTURES);
                String var7 = var9.getAbsolutePath().replace("files/Pictures", "apps/") + var3;
                var4 = new File(var7);
                if (var4.exists()) {
                    var5 = DHFile.getInputStream(var4);
                }
            }

            if (var5 == null) {
                return;
            }

            var6 = IOUtil.toString(var5);
            if (TextUtils.isEmpty(var6)) {
                return;
            }

            int var10 = PdrUtil.getConfigOrientation(new JSONObject(var6));
            var1.putExtra("__intetn_orientation__", var10);
        } catch (Exception var8) {
        }

    }

}
