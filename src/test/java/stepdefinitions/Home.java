package stepdefinitions;

import configuration.ConfigReader;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

/**
 * Created by Naveen on 05/11/2017.
 */
public class Home {


    WebDriver driver = Hook.driver;

    pageLocators.HomePage homePageLocator = PageFactory.initElements(driver, pageLocators.HomePage.class);;

    private String searchInput;

    @Given("^I am on the Home Page$")
    public void I_am_on_the_Home_Page() throws Throwable {

        driver.get(configuration.ConfigReader.getHomePageURL());

    }


    @Then("^I should see the Links to Navigate$")
    public void i_should_see_the_Links_to_Navigate(DataTable links) throws Throwable {

        List<List<String>>  navigationLinks = links.raw();

        for (int i = 1; i<navigationLinks.size(); i++)
        {
            Assert.assertTrue(homePageLocator.isElementClickable(navigationLinks.get(i).get(1)));
        }
    }

    @Then("^There should be a Search box$")
    public void there_should_be_a_Search_box() throws Throwable {

        Assert.assertTrue(homePageLocator.isElementClickable("searchbox"));
    }

    @When("^I click the \"([^\"]*)\"$")
    public void click_the(String link) throws Throwable {

        homePageLocator.clickLink(link);
    }

    @Then("^I should see the \"([^\"]*)\"$")
    public void i_should_see_the(String page) throws Throwable {

        Assert.assertTrue(homePageLocator.verifyTitle(page));

    }

}
