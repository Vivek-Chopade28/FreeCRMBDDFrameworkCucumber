package com.qa.crm.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.crm.qa.base.TestBase;

public class HomePage extends TestBase{
	
	@FindBy(xpath = "//*[@id=\"top-header-menu\"]/div[3]/span[1]")
	WebElement loggedINUsername;
	
	@FindBy(css="#main-nav > a:nth-child(5) > span")
	WebElement dealBtn;
	
	@FindBy(xpath="//*[@id=\"dashboard-toolbar\"]/div[2]/div/a[3]/button")
	WebElement New;
	
	@FindBy(xpath="//*[@id=\"dashboard-toolbar\"]/div[1]/text()")
	WebElement createNewDeal;
	
	//Initialization of page object
	public void Homepage() {
		PageFactory.initElements(driver, this);
	}
	
	public void navigateToDealPage() {
		dealBtn.click();
		New.click();	
	}
	
	public boolean verifyPageName(){
		return createNewDeal.isDisplayed();
	}
	
	
	

}
