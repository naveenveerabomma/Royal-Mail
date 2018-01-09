package usefulMethods;

import java.sql.*;


/**
 * Created by Naveen on 09/07/2017.
 */
public class DatabaseConnectivity {


    public static boolean connectToDatabase(String email, String password)
                                                     throws ClassNotFoundException, SQLException
    {
        Class.forName("com.mysql.jdbc.Driver");
        // To load Driver


        Connection con = DriverManager.getConnection(configuration.ConfigReader.getDatabaseURL(),
                                                     configuration.ConfigReader.getDatabaseUserName(),
                                                     configuration.ConfigReader.getDatabasePassword());
        // To connect with database need URL(location), Username, Password

        Statement smt = con.createStatement();
        // To create statement

        ResultSet rs = smt.executeQuery("select * from users");
        // To execute query

        boolean result = false;

        while(rs.next())
        {
            String eid = rs.getString("Email");
            String psw = rs.getString("Password");
            if(eid.equalsIgnoreCase(email) && psw.equalsIgnoreCase(password))
            {
               result = true;

                break;
            }
        }

        return result;
    }
}
