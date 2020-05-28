package com.crm.qa.base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.crm.qa.util.TestUtil;

public class TestBase {
		
	public static  WebDriver driver;
	public static Properties prop;
	
	//Constructor
	public TestBase() {
		try {
		prop=new Properties();
		FileInputStream fis=new FileInputStream("E:\\Vivek Automation Study\\Automation Workspace\\CucumberPOM\\src\\main\\java\\com\\crm\\qa\\config\\config.properties");
			try {
				prop.load(fis);
			} 
			catch (IOException e) {
				e.printStackTrace();
			}
		}
		catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		
	}
	
	
	public static void initialization() {
		String browserName=prop.getProperty("browser");
		
		if(browserName.equals("chrome")) {		
		System.setProperty("webdriver.chrome.driver", "E:\\Vivek Automation Study\\All WebDrivers\\chromedriver_win32\\Chrome 81\\chromedriver.exe");
		driver  =new ChromeDriver();
		}
		else if(browserName.equals("FF")) {
			System.setProperty("webdriver.gecko.driver", "E:\\Vivek Automation Study\\All WebDrivers\\geckodriver-v0.26.0-win64\\geckodriver.exe");
			driver = new FirefoxDriver();
		}
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
		
		driver.get(prop.getProperty("url"));
	}
		
}
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	

