package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "E:\\Vivek Automation Study\\Automation Workspace\\FreeCRMBDDFramework\\src\\main\\java\\Features\\taggedhooks.feature", // The path feature file
		glue= {"stepDefination"}, //The path of step definition file
		monochrome = true, //To display console output in a proper readable form
		dryRun = false, //To check mapping is proper between step defination and feature file
		format= {"pretty","html:test-output","json:json.output/cucumber.json","junit:junit.xml"}, //To generate different type of report
		strict = true, //It will check if any step are not define in step defination file
		tags = {"@End2End , @SmokeTest, ~@RegressionTest"}  //-- "~" is used to ignore test case
		)

public class TestRunner {

}

//OR: tags= {"@SmokeTest , @RegressionTest"} --- execute all TC tags as @SmokeTest or @RegressionTest

//AND: tags= {"@End2End" , "@SmokeTest"} --- execute all TC tags as @SmokeTest AND @RegressionTest 
