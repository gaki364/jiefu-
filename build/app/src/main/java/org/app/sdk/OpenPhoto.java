package org.app.sdk;

import android.annotation.TargetApi;
import android.app.Activity;
import android.content.ContentUris;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.net.Uri;
import android.text.TextUtils;
import android.util.Base64;
import android.provider.DocumentsContract;
import android.provider.MediaStore;
import android.util.Log;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

public class OpenPhoto {
    private static OpenPhotoInterfact myContactsListener = null;

    /**
     * 判断指定的权限是否授权了
     * 返回true 代表授权
     */
    public static void OpenPhotoUI(Activity activity, OpenPhotoInterfact interfact) {
        myContactsListener = interfact;

        try {
            Intent intent = new Intent("android.intent.action.GET_CONTENT");
            intent.setType("image/*");
            activity.startActivityForResult(intent, 999);
        } catch (Throwable e) {

        }
    }


    //4.4及以上系统使用这个方法处理图片
    @TargetApi(19)
    public static void handleImageOnKitKat(Context context, Intent data) {
        try {
            String imagePath = null;
            Uri uri = data.getData();
            if (DocumentsContract.isDocumentUri(context, uri)) {
                //如果是document类型的Uri,则通过document id处理
                String docId = DocumentsContract.getDocumentId(uri);
                if ("com.android.providers.media.documents".equals(uri.getAuthority())) {
                    String id = docId.split(":")[1];  //解析出数字格式的id
                    String selection = MediaStore.Images.Media._ID + "=" + id;
                    imagePath = getImagePath(context, MediaStore.Images.Media.EXTERNAL_CONTENT_URI, selection);
                } else if ("com.android.providers.downloads.documents".equals(uri.getAuthority())) {
                    Uri contentUri = ContentUris.withAppendedId(
                            Uri.parse("content://downloads/public_downloads"), Long.valueOf(docId));
                    imagePath = getImagePath(context, contentUri, null);
                }
            } else if ("content".equalsIgnoreCase(uri.getScheme())) {
                //如果不是document类型的Uri,则使用普通方式处理
                imagePath = getImagePath(context, uri, null);
            }

            String strBase64 = imageToBase64(imagePath);
            Log.i("photo", imagePath);
            if (myContactsListener != null) {
                myContactsListener.onGetPhotoSuccess(strBase64);
            }

        } catch (Throwable e) {

        }
    }

    //4.4以下系统使用这个方法处理图片
    public static void handleImageBeforeKitKat(Context context, Intent data) {
        try {
            Uri uri = data.getData();
            String imagePath = getImagePath(context, uri, null);
            String strBase64 = imageToBase64(imagePath);
            if (myContactsListener != null) {
                myContactsListener.onGetPhotoSuccess(strBase64);
            }
        } catch (Throwable e) {

        }
    }

    public static String getImagePath(Context context, Uri uri, String selection) {
        String path = null;
        //通过Uri和selection来获取真实的图片路径
        Cursor cursor = context.getContentResolver().query(uri, null, selection, null, null);
        if (cursor != null) {
            if (cursor.moveToFirst()) {
                path = cursor.getString(cursor.getColumnIndex(MediaStore.Images.Media.DATA));
            }
            cursor.close();
        }
        return path;
    }

    /**
     * 将图片转换成Base64编码的字符串
     */
    public static String imageToBase64(String path) {
        if (TextUtils.isEmpty(path)) {
            return null;
        }
        InputStream is = null;
        byte[] data = null;
        String result = null;
        try {
            is = new FileInputStream(path);
            //创建一个字符流大小的数组。
            data = new byte[is.available()];
            //写入数组
            is.read(data);
            //用默认的编码格式进行编码
            result = Base64.encodeToString(data, Base64.NO_WRAP);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (null != is) {
                try {
                    is.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

        }
        return result;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

