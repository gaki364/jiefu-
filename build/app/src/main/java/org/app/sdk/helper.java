package org.app.sdk;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.WindowManager;
import android.os.Build;
import android.provider.Settings;
import android.widget.Toast;

import androidx.annotation.NonNull;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import com.adjust.sdk.Adjust;
import com.adjust.sdk.AdjustEvent;
import com.example.myapplication.R;
import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsConstants;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.analytics.FirebaseAnalytics;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;
import com.livechatinc.inappchat.ChatWindowConfiguration;
import com.livechatinc.inappchat.ChatWindowErrorType;
import com.livechatinc.inappchat.ChatWindowView;
import com.livechatinc.inappchat.ChatWindowView.ChatWindowEventsListener;
import com.livechatinc.inappchat.models.NewMessageModel;

import org.json.JSONArray;
import org.json.JSONObject;

import com.facebook.appevents.AppEventsLogger;

import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthCredential;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.auth.GoogleAuthProvider;





public class helper {
    private static String LOGTAG = "myApp";

    private static String getChannel(Context context, String str, int i) {
        int ret = 0;
        try {
            ApplicationInfo appInfo = context.getPackageManager().getApplicationInfo(context.getPackageName(), PackageManager.GET_META_DATA);
            ret = appInfo.metaData.getInt(str, (int) 0);
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
            ret = 0;
        }

        // Log.e("helper", str + " = " + ret);
        return String.valueOf(ret);
    }

    private static String getChannel(Context context, String str, String s) {
        String ret = "";
        try {
            ApplicationInfo appInfo = context.getPackageManager().getApplicationInfo(context.getPackageName(), PackageManager.GET_META_DATA);
            ret = appInfo.metaData.getString(str, "");
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
            ret = "";
        }

        //Log.e("helper", str + " = " + ret);
        return ret;
    }

    /**
     * 读取application 节点  meta-data 信息
     *
     * @return CHANNEL节点数据
     */
    public static String getChannelInfo(Context context) {
        return getChannel(context, "CHANNEL", "");
    }

    /*
     * 获取注册渠道ID
     * */
    public static String getAppId(Context context) {
        return getChannel(context, "APPID", (int) 0);
    }

    /*
     * 获取服务器类型
     * */
    public static String getServerID(Context context) {
        return getChannel(context, "SERVERID", "");
    }

    /**
     * 获取应用程序名称
     */
    public static String getDesktopName(Context context) {
        try {
            PackageManager packageManager = context.getPackageManager();
            PackageInfo packageInfo = packageManager.getPackageInfo(
                    context.getPackageName(), 0);
            int labelRes = packageInfo.applicationInfo.labelRes;
            return context.getResources().getString(labelRes);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 打开浏览器
     *
     * @param url
     */
    public static void openBrowser(Context context, String url) {
        try {
            Intent intent = new Intent();
            intent.setAction(Intent.ACTION_VIEW);

            Uri content_url = Uri.parse(url);
            intent.setData(content_url);

            context.startActivity(intent);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 禁止截屏
     * @param activity
     */
    public static void disScreenCapture(Activity activity) {
        activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
    }

	 /**
     * 获得设备的AndroidId
     *
     * @param context 上下文
     * @return 设备的AndroidId
     */
    private static String getAndroidId(Context context) {
        try {
            return Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ANDROID_ID);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return "";
    }

    /**
     * 获得设备硬件uuid
     * 使用硬件信息，计算出一个随机数
     *
     * @return 设备硬件uuid
     */
    private static String getDeviceUUID() {
        try {
            String dev = "3883756" + Build.BOARD.length() % 10 + Build.BRAND.length() % 10 + Build.DEVICE.length() % 10 + Build.HARDWARE.length() % 10 +
                    Build.ID.length() % 10 + Build.MODEL.length() % 10 + Build.PRODUCT.length() % 10 + Build.SERIAL.length() % 10;
            return new UUID(dev.hashCode(), Build.SERIAL.hashCode()).toString();

        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return "";
    }

    /**
     * 取SHA1
     *
     * @param data 数据
     * @return 对应的hash值
     */
    private static byte[] getHashByString(String data) {
        try {
            MessageDigest messageDigest = MessageDigest.getInstance("SHA1");
            messageDigest.reset();
            messageDigest.update(data.getBytes("UTF-8"));
            return messageDigest.digest();

        } catch (Exception e) {

        }
        return "".getBytes();
    }

    /**
     * 转16进制字符串
     *
     * @param data 数据
     * @return 16进制字符串
     */
    private static String bytesToHex(byte[] data) {
        StringBuilder sb = new StringBuilder();
        String stmp;
        for (int n = 0; n < data.length; n++) {
            stmp = (Integer.toHexString(data[n] & 0xFF));
            if (stmp.length() == 1)
                sb.append("0");
            sb.append(stmp);
        }
        return sb.toString().toUpperCase();
    }

    public static String stringToMD5(String plainText) {
        byte[] secretBytes = null;
        try {
            secretBytes = MessageDigest.getInstance("md5").digest(plainText.getBytes());
        } catch (Exception e) {
            throw new RuntimeException("没有这个md5算法！");
        }

        String md5code = new BigInteger(1, secretBytes).toString(16);
        for (int i = 0; i < 32 - md5code.length(); i++) {
            md5code = "0" + md5code;
        }
        return md5code;
    }

    /**
     * 获取设备唯一ID
     *
     * @return
     */
    public static String getDeviceID(Context context) {
        try {
            StringBuilder sbDeviceId = new StringBuilder();

            //获得AndroidId（无需权限）
            String androidid = getAndroidId(context);

            //获得硬件uuid（根据硬件相关属性，生成uuid）（无需权限）
            String uuid = getDeviceUUID();

            // 追加androidid
            if (androidid.length() > 0) {
                sbDeviceId.append(androidid);
                sbDeviceId.append("|");
            }

            // 追加硬件uuid
            if (uuid.length() > 0) {
                uuid = uuid.replace("-", "");
                sbDeviceId.append(uuid);
            }

            //生成SHA1，统一DeviceId长度
            if (sbDeviceId.length() > 0) {
                try {
                    String md5 = stringToMD5(sbDeviceId.toString());
                    return md5;

                } catch (Exception ex) {
                    ex.printStackTrace();
                }
            }

        } catch (Exception e) {

        }
        return "";
    }

    private static FirebaseAnalytics mFirebaseAnalytics = null;

    // firebase 埋点
    public static void firebaseLogEvent(Context context, String name, String event) {
        if (null == mFirebaseAnalytics) {
            mFirebaseAnalytics = FirebaseAnalytics.getInstance(context);
        }

        if (mFirebaseAnalytics != null) {
            //Log.d(LOGTAG, "+ name:" + name + " event:" + event);
            Bundle bundle = new Bundle();
            bundle.putString("event", event);
            mFirebaseAnalytics.logEvent(name, bundle);
            //Log.d(LOGTAG, "- name:" + name + " event:" + event);
        }
    }

    static private ChatWindowView fullScreenChatWindow = null;
    static private ChatWindowEventsListener chatListener = new ChatWindowEventsListener() {
        @Override
        public void onChatWindowVisibilityChanged(boolean visible) {

        }

        @Override
        public void onNewMessage(NewMessageModel message, boolean windowVisible) {

        }

        @Override
        public void onStartFilePickerActivity(Intent intent, int requestCode) {

        }

        @Override
        public boolean onError(ChatWindowErrorType errorType, int errorCode, String errorDescription) {
            return false;
        }

        @Override
        public boolean handleUri(Uri uri) {
            return false;
        }
    };

    public static void startFullScreenLiveChat(final Activity activity, final String username) {
        activity.runOnUiThread(new Runnable() {
            public void run() {
                if (fullScreenChatWindow == null) {
                    HashMap<String, String> customParamsMap = new HashMap<>();
                    ChatWindowConfiguration configuration = new ChatWindowConfiguration(
                            "14473602",
                            "",
                            username,
                            "",
                            customParamsMap
                    );

                    fullScreenChatWindow = ChatWindowView.createAndAttachChatWindowInstance(activity);
                    fullScreenChatWindow.setUpWindow(configuration);
                    fullScreenChatWindow.setUpListener(chatListener);
                    fullScreenChatWindow.initialize();
                }
                fullScreenChatWindow.showChatWindow();
            }
        });
    }

    private static FirebaseFirestore ff = null;
    private static FirestoreInterfact firestoreInterfact = null;

    public static void getFirestoreDatabase(final Context context, final String path, FirestoreInterfact _ii) {
        try {
            firestoreInterfact = _ii;

            if (ff == null) {
                ff = FirebaseFirestore.getInstance();
            }

/*
            // Create a new user with a first and last name
            Map<String, Object> user = new HashMap<>();
            user.put("first", "Ada1");
            user.put("last", "Lovelace2");
            user.put("born", 18156);

            // Add a new document with a generated ID
            ff.collection("/users").add(user)
            .addOnSuccessListener(new OnSuccessListener<DocumentReference>() {
                    @Override
                    public void onSuccess(DocumentReference documentReference) {
                        Log.d(LOGTAG, "DocumentSnapshot added with ID: " + documentReference.getId());
                    }
            })
            .addOnFailureListener(new OnFailureListener() {
                    @Override
                    public void onFailure(@NonNull Exception e) {
                        Log.w(LOGTAG, "Error adding document", e);
                    }
            });
*/

            Task<QuerySnapshot> _task = ff.collection(path).get();
            _task.addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                @Override
                public void onComplete(@NonNull Task<QuerySnapshot> task) {
                    try {
                        JSONObject json = new JSONObject();

                        if (task.isSuccessful()) {
                            //Log.i(LOGTAG, "getRealtimeDatabase is 555: " + task.getResult().toString());

                            for (QueryDocumentSnapshot document : task.getResult()) {
                                //Log.i(LOGTAG, "aaaaa: " + document.getId() + " => " + document.getData());
                                //Toast toast = Toast.makeText(context, document.getId() + " => " + document.getData(), Toast.LENGTH_SHORT);
                                //toast.show();

                                Map<String, Object> map = document.getData();
                                for (String key : map.keySet()) {
                                    String value = (String)map.get(key);
                                    json.put(key, value);
                                }
                            }
                        }

                        //Toast toast = Toast.makeText(context, json.toString(), Toast.LENGTH_SHORT);
                        //toast.show();

                        if (firestoreInterfact != null) {
                            firestoreInterfact.onGetDatabase(json.toString());
                        }

                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            });

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // facebook 埋点
    private static AppEventsLogger fbLogger = null;
    public static void facebookLogEvent(Activity activity, String name, String event) {
        if (fbLogger == null) {
            fbLogger = AppEventsLogger.newLogger(activity);
        }

        Bundle params = new Bundle();
        params.putString("event", event);
        fbLogger.logEvent(name, params);
        //Log.i(LOGTAG, "aaaaa: " + name + "   " + event);
    }

    // adjust
    public static void adjustEvent(String eventToken, String key, String value) {
        if (eventToken.length() > 0) {
            AdjustEvent adjustEvent = new AdjustEvent(eventToken);
            if (key.length() > 0 && value.length() > 0) {
                adjustEvent.addPartnerParameter(key, value);
            }
            Adjust.trackEvent(adjustEvent);
        }
    }








	public static void loginFacebook(Activity activity, loginCallbackInterfact _cb) {
		FaceBookUtils.getInstance().loginFacebook(activity, _cb);
	}
	
	public static void logoutFacebook(Activity activity, loginCallbackInterfact _cb) {
		FaceBookUtils.getInstance().logoutFacebook(activity, _cb);
	}
	
	
	private static final int RC_SIGN_IN = 9001;
	private static GoogleSignInClient mGoogleSignInClient = null;
	private static FirebaseAuth mAuth = null;
    private static loginCallbackInterfact loginCallback = null;
	public static void loginGoogle(Activity activity, loginCallbackInterfact _cb) {
		Log.d(LOGTAG, "loginGoogle:");
		helper.loginCallback = _cb;
		if (mGoogleSignInClient == null) {
			GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestIdToken(activity.getString(R.string.default_web_client_id))
                .requestEmail()
                .build();
			mGoogleSignInClient = GoogleSignIn.getClient(activity, gso);
		}
		
		if (null == mAuth) {
			mAuth = FirebaseAuth.getInstance();
		}
		
		Intent signInIntent = mGoogleSignInClient.getSignInIntent();
        activity.startActivityForResult(signInIntent, RC_SIGN_IN);
	}
	
	public static void logoutGoogle(Activity activity, loginCallbackInterfact _cb) {
		Log.d(LOGTAG, "logoutGoogle:");
        helper.loginCallback = _cb;
		if (mGoogleSignInClient == null) {
			GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestIdToken(activity.getString(R.string.default_web_client_id))
                .requestEmail()
                .build();
			mGoogleSignInClient = GoogleSignIn.getClient(activity, gso);
		}

		if (null == mAuth) {
			mAuth = FirebaseAuth.getInstance();
		}
		
		mAuth.signOut();
		mGoogleSignInClient.signOut().addOnCompleteListener(activity,
                new OnCompleteListener<Void>() {
                    @Override
                    public void onComplete(@NonNull Task<Void> task) {
						Map<String,String> map = new HashMap<String, String>();
						map.put("result", "0");

						if (helper.loginCallback != null) {
                            helper.loginCallback.onCallback(map.toString());
                            helper.loginCallback = null;
                        }
                    }
                });
	}

	public static void onActivityResult(int requestCode, int resultCode, Intent data) {
        // Result returned from launching the Intent from GoogleSignInApi.getSignInIntent(...);
        if (requestCode == RC_SIGN_IN) {
            Task<GoogleSignInAccount> task = GoogleSignIn.getSignedInAccountFromIntent(data);
            try {
                // Google Sign In was successful, authenticate with Firebase
                GoogleSignInAccount account = task.getResult(ApiException.class);
				
				Map<String,String> map = new HashMap<String, String>();
                map.put("result", "1");
				map.put("Id", account.getId());
				map.put("email", account.getEmail());
				map.put("token", account.getIdToken());

				Log.d(LOGTAG, "firebaseAuthWithGoogle:" + map.toString());
                if (helper.loginCallback != null) {
                    helper.loginCallback.onCallback(map.toString());
                    helper.loginCallback = null;
                }
            } catch (ApiException e) {
                // Google Sign In failed, update UI appropriately
                Log.e(LOGTAG, "Google sign in failed", e);

                if (helper.loginCallback != null) {
                    Map<String,String> map = new HashMap<String, String>();
                    map.put("result", "0");
                    helper.loginCallback.onCallback(map.toString());
                    helper.loginCallback = null;
                }
            }
        }
    }
}
