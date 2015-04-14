package ru.kpfu.cisco.maps;

import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.TextView;
import android.widget.Toast;

import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.Enumeration;

public class MyActivity extends Activity {
      /**
       * Called when the activity is first created.
       */
      private WebView webView;
      private static TextView ipTextView;
      private static Context stcontext;
      private static InetAddress ip = null;
      private static int cID = 0;
      private static int cFill = 0;
      private static boolean newData = false;

      @Override
      public void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);

            requestWindowFeature(Window.FEATURE_NO_TITLE);
            getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                    WindowManager.LayoutParams.FLAG_FULLSCREEN);
            setContentView(R.layout.main);
            webView = (WebView) findViewById(R.id.webView);
            WebClient webClient = new WebClient();
            webView.setWebViewClient(webClient);
            webView.setWebChromeClient(new WebChromeClient());
            webView.getSettings().setJavaScriptEnabled(true);
            webView.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
            webView.getSettings().setAllowContentAccess(true);
            webView.getSettings().setRenderPriority(WebSettings.RenderPriority.HIGH);
            webView.getSettings().setAppCacheEnabled(true);
            webView.addJavascriptInterface(new JavaScriptInterface(this), "app");
            webClient.shouldOverrideUrlLoading(webView, "file:///android_asset/index.htm");
            ipTextView = (TextView) findViewById(R.id.textView);

            getDeviceIpAddress();


            stcontext = this;

            if (ip != null)
                  ipTextView.setText("IP: " + ip.getHostAddress());
            else
                  ipTextView.setText("IP_IS_NULL");

            new Thread(new WiFiReceiver()).start();

      }


      public void getDeviceIpAddress() {
            Enumeration<NetworkInterface> e = null;
            try {
                  e = NetworkInterface.getNetworkInterfaces();
            } catch (SocketException e1) {
                  e1.printStackTrace();
            }
            while (e.hasMoreElements()) {
                  NetworkInterface ni = e.nextElement();
                  Enumeration<InetAddress> ia = ni.getInetAddresses();
                  while (ia.hasMoreElements()) {
                        InetAddress inetAddress = ia.nextElement();
                        if (inetAddress.isSiteLocalAddress()) {
                              ip = inetAddress;
                        }
                  }
            }
      }

      public static void setContainerInfo(int id, int degree) {
            cID = id;
            cFill = degree;
            newData = true;
            Log.i("MyActivityLOGS", "Degree of container filling: " + cFill + "  ID: " + cID);

      }


      public static void makeStaticToast(String message, boolean lengthLong) {
            Toast.makeText(stcontext, message, (lengthLong ? Toast.LENGTH_LONG : Toast.LENGTH_SHORT)).show();
      }


      public class JavaScriptInterface {

            private Context context;

            public JavaScriptInterface(Context context) {
                  this.context = context;
            }


            @JavascriptInterface
            public void makeToast(String message, boolean lengthLong) {
                  Toast.makeText(context, message, (lengthLong ? Toast.LENGTH_LONG : Toast.LENGTH_SHORT)).show();
            }

            @JavascriptInterface
            public boolean hasNewData() {
                  return newData;
            }

            @JavascriptInterface
            public int getLastFilling() {
                  newData = false;
                  return cFill;
            }

            @JavascriptInterface
            public int getLastID(){
                  return cID;
            }

      }

}
