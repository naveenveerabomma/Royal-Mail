package configuration;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

/**
 * Created by Naveen on 12/07/2017.
 */
public class ConfigReader {


    public static Properties pro;

    static {
        try {

              File src = new File("src/main/resources/Config.property");

              FileInputStream fis = new FileInputStream(src);

              pro = new Properties();

              pro.load(fis);

        }

        catch (Exception e)
        {
            System.out.println("error :::::"+e.getMessage());
        }

    }

    public static String getDriver()
    {
        return pro.getProperty("DRIVER");
    }

    public static String getHomePageURL()
    {
        return pro.getProperty("HomePageURL");
    }

    public static String getLoginPageURL()
    {
        return pro.getProperty("LoginPageURL");
    }

    public static String getDatabaseURL()
    {
        return pro.getProperty("DatabaseURL");
    }

    public static String getDatabaseUserName()
    {
        return pro.getProperty("DatabaseUsername");
    }

    public static String getDatabasePassword()
    {
        return pro.getProperty("DatabasePassword");
    }


}
