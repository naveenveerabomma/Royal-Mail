package stepdefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

/**
 * Created by Naveen on 22/10/2017.
 */
public class Hook {

    public static WebDriver driver;

    @Before
    public void setUpMethod()
    {
            System.setProperty("webdriver.chrome.driver", configuration.ConfigReader.getDriver());

            driver = new ChromeDriver();

            driver.manage().window().maximize();
    }

    @After
    public void shutDown()
    {
        driver.quit();
    }

}
