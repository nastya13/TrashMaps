package ru.kpfu.cisco.maps;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

/**
 * Created by Irinka on 27.03.15.
 */
public class WiFiReceiver implements Runnable {

      private ServerSocket serverSocket = null;
      private final int SERVER_PORT = 44442;

      @Override
      public void run() {

            try {
                  serverSocket = new ServerSocket(SERVER_PORT);
            } catch (IOException e) {
                  e.printStackTrace();
            }


            while (true) {
                  if (serverSocket != null)
                        try {
                              Socket clientSocket = serverSocket.accept();
                              new Thread(new WiFiReceiverThread(clientSocket)).start();
                        } catch (IOException e) {
                              e.printStackTrace();
                        }

            }
      }


}
