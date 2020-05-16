package stepDefination;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaggedHooksStepDefination {
	//Global hooks: This hooks executed before and after each scenario
	@Before
	public void setUP() {
		System.out.println("Launch the browser");
		System.out.println("Enter the URL");
	}
	
	@After
	public void tearDown() {
		System.out.println("Close the browser");
	}
	
	//Local - Only for First Scenario
	@Before("@First")
	public void beforeFirst() {
		System.out.println("Before only first scenario");
	}
	
	@After("@First")
	public void afterFirst() {
		System.out.println("After only first scenario");
	}
	
	

	@When("^this is first step$")
	public void this_is_first_step() throws Throwable {
    System.out.println("This is 1st step");
	}

	@Then("^this is second step$")
	public void this_is_second_step() throws Throwable {
    System.out.println("This is 2nd Step");
	}

	@Then("^this is third step$")
	public void this_is_third_step() throws Throwable {
	System.out.println("This is 3rd Step");
	}
	
	

}
