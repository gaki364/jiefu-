/**
 * 联系人列表相关
 */
package org.app.sdk;

import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.os.Build;
import android.provider.ContactsContract;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;

public class ContactsUtils {
    private static ContactsInterfact myContactsListener = null;

    /**
     * 判断指定的权限是否授权了
     * 返回true 代表授权
     */
    public static void addPermissByPermissionList(Activity activity, String permissions, int request, ContactsInterfact interfact) {
        myContactsListener = interfact;

        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                // Android 6.0开始的动态权限，这里进行版本判断
                ArrayList<String> mPermissionList = new ArrayList<>();

                // 检查指定的权限是否授权
                if (ContextCompat.checkSelfPermission(activity, permissions) != PackageManager.PERMISSION_GRANTED) {
                    mPermissionList.add(permissions);
                }

                if (mPermissionList.isEmpty()) {
                    // 权限已经授权, 读取联系人列表
                    getAllContacts(activity);

                } else {
                    // 请求权限
                    String[] permissionsNew = mPermissionList.toArray(new String[mPermissionList.size()]);

                    // 开始授权权限  会触发 onRequestPermissionsResult 这个回调  在MyPandoraEntry.java里面实现
                    ActivityCompat.requestPermissions(activity, permissionsNew, request);
                }

            } else {
                getAllContacts(activity);
            }

        } catch (Throwable e) {

        }
        return;
    }

    /**
     * 获取手机联系人列表
     *
     * @param context
     * @return
     */
    public static void getAllContacts(Context context) {
        try {
            // ArrayList<MyContacts> contacts = new ArrayList<MyContacts>();
            JSONArray jsonArray = new JSONArray();
            JSONObject jsonObj = new JSONObject();

            Cursor cursor = context.getContentResolver().query(ContactsContract.Contacts.CONTENT_URI, null, null, null, null);
            while (cursor.moveToNext()) {
                // 新建一个联系人实例
                //MyContacts temp = new MyContacts();

                // 获取id
                String contactId = cursor.getString(cursor.getColumnIndex(ContactsContract.Contacts._ID));

                // 获取联系人姓名
                // String name = cursor.getString(cursor.getColumnIndex(ContactsContract.Contacts.DISPLAY_NAME));
                // temp.name = name;

                // 获取联系人电话号码
                Cursor phoneCursor = context.getContentResolver().query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI, null, ContactsContract.CommonDataKinds.Phone.CONTACT_ID + "=" + contactId, null, null);
                while (phoneCursor.moveToNext()) {
                    String phone = phoneCursor.getString(phoneCursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER));
                    phone = phone.replace("-", "");
                    phone = phone.replace(" ", "");
                    //temp.addPhone(phone);
                    jsonArray.put(phone);
                }
                phoneCursor.close();

                // 获取联系人备注信息
                /* Cursor noteCursor = context.getContentResolver().query(ContactsContract.Data.CONTENT_URI, new String[]{ContactsContract.Data._ID, ContactsContract.CommonDataKinds.Nickname.NAME}, ContactsContract.Data.CONTACT_ID + "=?" + " AND " + ContactsContract.Data.MIMETYPE + "='" + ContactsContract.CommonDataKinds.Nickname.CONTENT_ITEM_TYPE + "'", new String[]{contactId}, null);
                if (noteCursor.moveToFirst()) {
                    do {
                        String note = noteCursor.getString(noteCursor.getColumnIndex(ContactsContract.CommonDataKinds.Nickname.NAME));
                        temp.note = note;
                    } while (noteCursor.moveToNext());
                }
                noteCursor.close(); */

                // 添加到列表
                //contacts.add(temp);
            }
            cursor.close();

            jsonObj.put("contacts", jsonArray);

            if (myContactsListener != null) {
                // Log.i("myapp", "准备回调:" + jsonObj.toString());
                myContactsListener.onGetContactsSuccess(jsonObj.toString());
            }

        } catch (Throwable e) {

        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}


// 联系人
class MyContacts {
    // public String name;
    private ArrayList<String> phone = new ArrayList<>();
    // public String note;

    /* @Override
    public String toString() {
        return "MyContacts{" + "name='" + name + '\'' + ", phone='" + phone.toString() + '\'' + ", note='" + note + '\'' + '}';
    } */

    /*public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }*/

    public ArrayList<String> getPhone() {
        return phone;
    }

    public void addPhone(String phone) {
        this.phone.add(phone);
    }

    /* public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }*/
}
