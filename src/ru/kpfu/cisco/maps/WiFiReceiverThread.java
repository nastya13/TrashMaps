package ru.kpfu.cisco.maps;

import android.util.Log;

import java.io.DataInputStream;
import java.io.IOException;
import java.net.Socket;

/**
 * Created by Irinka on 27.03.15.
 */
public class WiFiReceiverThread implements Runnable {

      private Socket clientSocket = null;
      private DataInputStream in = null;
      private int cID = 0;
      private int cFill = 0;

      public WiFiReceiverThread (Socket clientSocket_) {
            clientSocket = clientSocket_;
      }

      @Override
      public void run() {
            try {

                  in = new DataInputStream(clientSocket.getInputStream());

                  cID = in.readInt();
                  Log.i("MyLOGS", "Container ID: " + cID);

                  cFill = in.readInt();
                  Log.i("MyLOGS", "Degree of container filling: " + cFill);

                  MyActivity.setContainerInfo(cID, cFill);

                  in.close();


            } catch (IOException e) {
                  System.out.println(e.getMessage());
            }


      }

}
