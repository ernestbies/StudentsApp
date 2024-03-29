package com.studentsapp;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;

import java.util.Arrays;
import java.util.List;
import org.pgsqlite.SQLitePluginPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;

public class MainApplication extends NavigationApplication {

    @Override
    protected ReactGateway createReactGateway() {
        ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {

            @Override
            protected String getJSMainModuleName() {
                 return "index";

            }

        };
         return new ReactGateway(this, isDebug(), host);

    }

    @Override
    public boolean isDebug() {
         return BuildConfig.DEBUG;

    }



    protected List<ReactPackage> getPackages() {
               // Add additional packages you require here
                        // No need to add RnnPackage and MainReactPackage
                         return Arrays.<ReactPackage>asList(
                            // eg. new VectorIconsPackage()
                                 new SQLitePluginPackage(),
                                 new SplashScreenReactPackage(),
                                 new NetInfoPackage(),
                                 new AsyncStoragePackage(),
                                 new RNCWebViewPackage()
                        );
    }


    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
         return getPackages();

    }
}
