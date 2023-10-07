package org.app.active;

import android.Manifest;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;

import com.example.myapplication.R;

import org.app.sdk.ContactsUtils;
import org.app.sdk.FaceBookUtils;
import org.app.sdk.OpenPhoto;
import org.app.sdk.helper;

public class MyPandoraEntryActivity extends io.dcloud.PandoraEntryActivity {
    private String TAG = "MyPandoraEntryActivity";
    public static Activity g_Activity = null;

    public void onCreate(Bundle var1) {
        super.onCreate(var1);
        g_Activity = MyPandoraEntryActivity.this;

        // facebook
        FaceBookUtils.getInstance().initSDK(this);
        // facebook
    }

    /**
     * requestPermissions的回调
     * 一个或多个权限请求结果回调
     */
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        // Log.i(TAG, "当前权限" + permissions[0] + "  " + permissions.length);

        if (permissions.length > 0 && 0 == permissions[0].compareTo(Manifest.permission.READ_CONTACTS)) {
            boolean hasAllGranted = true;

            //判断是否拒绝  拒绝后要怎么处理 以及取消再次提示的处理
            for (int grantResult : grantResults) {
                if (grantResult == PackageManager.PERMISSION_DENIED) {
                    hasAllGranted = false;
                    break;
                }
            }

            if (hasAllGranted) {
                // 读取联系人
                ContactsUtils.getAllContacts(MyPandoraEntryActivity.this);

            } else {
                // 拒绝授权做的处理，弹出弹框提示用户授权
                dealwithPermiss(MyPandoraEntryActivity.this, permissions[0]);
            }
        }
    }

    // 授权拒绝提示
    public void dealwithPermiss(final Activity context, String permission) {
        if (!ActivityCompat.shouldShowRequestPermissionRationale(context, permission)) {
            AlertDialog.Builder builder = new AlertDialog.Builder(MyPandoraEntryActivity.this);
            builder.setTitle(context.getString(R.string.contacts_title))
                    .setMessage(context.getString(R.string.contacts_message))
                    // 点击授权
                    .setPositiveButton(context.getString(R.string.contacts_PositiveButton), new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            Intent intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
                            Uri uri = Uri.fromParts("package", context.getApplicationContext().getPackageName(), null);
                            intent.setData(uri);
                            context.startActivity(intent);
                        }
                    })
                    // 点击取消
                    .setNegativeButton(context.getString(R.string.contacts_NegativeButton), new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            // Toast.makeText(MainActivity.this, "取消操作", Toast.LENGTH_SHORT).show();
                        }
                    }).show();

        }
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        switch (requestCode) {
            case 999:
                if (resultCode == RESULT_OK) {
                    //判断手机系统版本号
                    if (Build.VERSION.SDK_INT >= 19) {
                        //4.4及以上系统使用这个方法处理图片
                        OpenPhoto.handleImageOnKitKat(this, data);
                    } else {
                        //4.4以下系统使用这个方法处理图片
                        OpenPhoto.handleImageBeforeKitKat(this, data);
                    }
                }
                break;

            case 9001:
                // google login
                helper.onActivityResult(requestCode, resultCode, data);
                break;

            default:
                FaceBookUtils.getInstance().onActivityResult(requestCode, resultCode, data);
                break;
        }

    }
}
