package com.toastnativemodule;

import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

import java.util.HashMap;
import java.util.Map;


public class ToastModule extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ToastExample";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("PI", "3.1416");
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void doCallbackTask(int aNumber, Callback success, Callback failed) {
        try {
            if (aNumber == 100) {
                throw new Exception("Input number is 100, cannot do this task");
            }

            String name = "Henrique";
            String email = "henrique@gmail.com";
            int age = 89;

            success.invoke(name, email, age);
        } catch (Exception e) {
            failed.invoke(e.getMessage());
        }
    }

    @ReactMethod
    public void doPromiseTask(int aNumber, Promise promise) {

        try {
            if (aNumber == 100) {
                throw new Exception("Input number is 100, cannot do this task");
            }

            WritableMap mapResult = Arguments.createMap();
            mapResult.putString("name", "Henrique");
            mapResult.putString("email", "henrique@gmail.com");
            mapResult.putInt("age", 59);
            promise.resolve(mapResult);
        } catch (Exception e) {
            promise.reject("An error occured", e.getMessage());
        }

    }

    @ReactMethod
    public void showText(String messsage, int duration) {
        // This function will be called in React Native
        Toast.makeText(getReactApplicationContext(), messsage, duration).show();
    }
}
