package pageLocators;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by Naveen on 21/05/2017.
 */
public class HomePage {

    WebDriver driver;

    public HomePage(WebDriver driver)
    {
        this.driver = driver;
    }

    @FindBy(xpath = ".//a[text()='Track your item']" )
    private WebElement trackyourItem;

    @FindBy(xpath = ".//a[text()='Find a postcode']" )
    private WebElement findAPostcode;

    @FindBy(xpath = ".//a[text()='Get a price']" )
    private WebElement getAPrice;

    @FindBy(xpath = ".//a[text()='Redelivery']" )
    private WebElement redelivery;

    @FindBy(xpath = ".//a[text()='Pay a fee']" )
    private WebElement payAFee;

    @FindBy(id = "edit-search-theme-form-1")
    private WebElement searchBox;

    @FindBy(id = "edit-submit-1")
    private WebElement searchBoxButton;

    public boolean isElementClickable(String elementName)
    {
        boolean result = false;

        if (elementName.equalsIgnoreCase("Track your item"))
        {
            result = trackyourItem.isEnabled();

        }
        else if (elementName.equalsIgnoreCase("Find a postcode"))
        {
            result = findAPostcode.isEnabled();
        }
        else if (elementName.equalsIgnoreCase("Get a price"))
        {
            result =  getAPrice.isEnabled();
        }
        else if (elementName.equalsIgnoreCase("Redelivery"))
        {
            result =  redelivery.isEnabled();
        }
        else if (elementName.equalsIgnoreCase("Pay a fee"))

        {
            result =  payAFee.isEnabled();
        }
        else if (elementName.equalsIgnoreCase("searchbox"))
        {
            result =  searchBox.isEnabled();
        }

        return result;
    }

    public void clickLink(String elementName)
    {
        if (elementName.equalsIgnoreCase("Track your item"))
        {
            trackyourItem.click();
        }
        else if (elementName.equalsIgnoreCase("Find a postcode"))
        {
            findAPostcode.click();
        }
        else if (elementName.equalsIgnoreCase("Get a price"))
        {
            getAPrice.click();
        }
        else if (elementName.equalsIgnoreCase("Redelivery"))
        {
            redelivery.click();
        }
        else if (elementName.equalsIgnoreCase("Pay a fee"))
        {
            payAFee.click();
        }
 }

    public boolean verifyTitle(String pageName) throws Throwable
    {
        return usefulMethods.UtilMethods.verifyTitle(driver, pageName);

    }

}
