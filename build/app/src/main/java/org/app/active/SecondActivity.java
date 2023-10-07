package org.app.active;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

import io.dcloud.PandoraEntry;

public class SecondActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /* 新建一个Intent对象 */
        Intent intent = new Intent(this, PandoraEntry.class);
        /* 启动一个新的Activity */
        this.startActivity(intent);
        /* 关闭当前的Activity */
        this.finish();
    }
}
