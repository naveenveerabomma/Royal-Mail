package usefulMethods;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

/**
 * Created by Naveen on 21/05/2017.
 */
public class UtilMethods {

    public static boolean verifyTitle(WebDriver driver, String pageName) throws InterruptedException {
        Thread.sleep(2000);
        String pageTitle = driver.getTitle();
        boolean result = false;

//        String homePageTitle = "Bespoke Development & UX expertise delivering digital transformation - Answer Digital";
        String trackandTracePageTitle = "Track and Trace - Track your Item | Royal Mail Ltd";
        String postcodeFinderPageTitle = "Postcode Finder û Find an Address | Royal Mail Group Ltd";
        String getapricePageTitle = "Get a price | Royal Mail Group Ltd";
        String redeliveryPageTitle = "Redelivery - Arrange Online | Royal Mail Group Ltd";
        String payafeePageTitle = "Pay a fee | Royal Mail Group Ltd";

       if(pageName.equalsIgnoreCase("Track and Trace"))
        {
            result = trackandTracePageTitle.equalsIgnoreCase(pageTitle);
        }

        else if(pageName.equalsIgnoreCase("Postcode Finder"))
        {
            result = pageTitle.contains("Postcode Finder");
        }

        else if(pageName.equalsIgnoreCase("Get a price"))
        {
            result = getapricePageTitle.equalsIgnoreCase(pageTitle);
        }

        else if(pageName.equalsIgnoreCase("Redelivery"))
        {
            result = redeliveryPageTitle.equalsIgnoreCase(pageTitle);
        }

        else if(pageName.equalsIgnoreCase("Pay a fee"))
        {
            result = payafeePageTitle.equalsIgnoreCase(pageTitle);
        }

        return result;
    }

    public static void fillInput(WebElement element, String data)
    {
        element.clear();
        element.sendKeys(data);
    }



}
