package com.crm.qa.StepDefination;

import org.junit.Assert;

import com.crm.qa.base.TestBase;
import com.qa.crm.pages.HomePage;
import com.qa.crm.pages.Login;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;



public class LoginStepDefination extends TestBase {
	
	Login loginpage;
	HomePage home;
	
	@Given("^user open the browser$")
	public void user_open_the_browser() {
	    TestBase.initialization();
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password() throws Throwable {
		loginpage = new Login();
	    String title= loginpage.validateLoginPageTitle();
	    Assert.assertEquals("Cogmento CRM", title);
	    
	}

	@Then("^user click on login BTN$")
	public void user_click_on_login_BTN() throws Throwable {
		
		home =  loginpage.login(prop.getProperty("username"), prop.getProperty("password"));
		
	}

	@Then("^user click on deal BTN$")
	public void user_click_on_deal_BTN() throws Throwable {
	    home.Homepage();
	    
	}

	@Then("^user click on new deal BTN$")
	public void user_click_on_new_deal_BTN() throws Throwable {
	    home.navigateToDealPage();
	}

	@Then("^verify the title$")
	public void verify_the_title() throws Throwable {
		boolean flag= home.verifyPageName();
		Assert.assertTrue(flag);
		
	}
	

}
