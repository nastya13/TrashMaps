package ru.kpfu.cisco.maps;


import android.util.Log;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.SocketException;

/**
 * Created by Irina on 14.04.15.
 */

public class UDPServer implements Runnable {

      int ID, upper, lower, fill;

      @Override
      public void run() {

            DatagramSocket serverSocket = null;
            try {
                  serverSocket = new DatagramSocket(44442);
            } catch (SocketException e) {
                  e.printStackTrace();
            }

            byte[] receiveData = new byte[100];


            while (true) {
                  DatagramPacket receivePacket = new DatagramPacket(receiveData, receiveData.length);
                  try {
                        serverSocket.receive(receivePacket);
                  } catch (IOException e) {
                        e.printStackTrace();
                  }

                  char begin = (char) receivePacket.getData()[0]; // служебный символ, обозначающий начало пакета
                  char end = (char) receivePacket.getData()[4]; // служебный символ, обазначающий конец пакета

                  if (begin == 'r' && end == 'n') {
                        ID = (int) receivePacket.getData()[1]; // идентификационный номер контейнера
                        lower = (int) receivePacket.getData()[2]; // состояние нижнего датчика мусорного бака
                        upper = (int) receivePacket.getData()[3]; // состояние верхнего датчика мусорного бака
                        Log.i("UDPServerLogs", "ID: " + ID + ", lower: " + lower + ", upper: " + upper);
                  }
                  else
                        Log.i("UDPServerLogs","Packet exception: 'r'=" + begin + " , 'n'=" + end);

                  fill = -1;

                  if (upper == 1)
                        fill = 3;
                  else
                  if (lower == 1)
                        fill = 1;
                  else
                        fill = 0;

                  if (fill != -1)
                        MyActivity.setContainerInfo(ID, fill);

            }
      }


}
