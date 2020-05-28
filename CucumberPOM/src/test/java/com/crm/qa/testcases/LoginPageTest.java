package com.crm.qa.testcases;

import org.testng.annotations.BeforeMethod;

import com.crm.qa.base.TestBase;
import com.qa.crm.pages.HomePage;
import com.qa.crm.pages.Login;

public class LoginPageTest extends TestBase {
	Login login;
	HomePage homepage;

	@BeforeMethod
	public void setUP() {
		initialization();
		login = new Login();
	}

		

	

}
