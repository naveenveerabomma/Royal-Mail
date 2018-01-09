import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Naveen on 05/11/2017.
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources",
        //tags = {"@do"},
        format = {"pretty", "html:target/Destination", "json:target/cucumber-report.json"}
        )


public class TestSuite {
}

