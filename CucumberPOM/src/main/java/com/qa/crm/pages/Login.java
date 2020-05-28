package com.qa.crm.pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.crm.qa.base.TestBase;

public class Login extends TestBase {
	
	//Page Factory - OR
	@FindBy(xpath="//*[@id=\"ui\"]/div/div/form/div/div[1]/div/input")
	WebElement username;
	
	@FindBy(xpath="//*[@id=\"ui\"]/div/div/form/div/div[2]/div/input")
	WebElement password;
	
	@FindBy(xpath="//*[@id=\"ui\"]/div/div/form/div/div[3]")
	WebElement loginBtn;
	
	//Initialization of Page Objects
	public Login() {
		PageFactory.initElements(driver, this);
	}
	
	
	//Actions:
	public String validateLoginPageTitle() throws InterruptedException {
		Thread.sleep(3000);
		return driver.getTitle();
	}
	
	public HomePage login(String un, String pwd) throws InterruptedException {
		Thread.sleep(4000);
		username.sendKeys(un);
		password.sendKeys(pwd);
		//LoginBTN click
		Thread.sleep(4000);
		
		JavascriptExecutor js=(JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginBtn);
			
		return new HomePage();
	}	

}
