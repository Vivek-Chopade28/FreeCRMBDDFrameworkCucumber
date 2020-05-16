package com.test;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestElement {

	public static void main(String[] args) throws InterruptedException {
		

		System.setProperty("webdriver.chrome.driver", "E:\\Vivek Automation Study\\All WebDrivers\\chromedriver_win32\\Chrome 81\\chromedriver.exe");	
		WebDriver driver=new ChromeDriver();	
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
		driver.get("https://ui.freecrm.com/");	
		
	
		driver.findElement(By.name("email")).sendKeys("vivek.chopade28@gmail.com");
		driver.findElement(By.name("password")).sendKeys("@Vivek28");	
		
		//CLick on Login BTN
		WebElement loginBtn =driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]"));
		JavascriptExecutor js=(JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginBtn);
		
		//Click on Contact BTN
		WebElement element= driver.findElement(By.cssSelector("#main-nav > a:nth-child(3) > span"));
		//WebElement element= driver.findElement(By.xpath("//*[@id=\"main-nav\"]/a[3]/span"));
		JavascriptExecutor executor = (JavascriptExecutor)driver;			
		executor. executeScript("arguments[0].click();", element);

		//Click on New BTN
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id=\"dashboard-toolbar\"]/div[2]/div/a/button/i")).click();
		
		
		driver.findElement(By.name("first_name")).sendKeys("Pranav");
		driver.findElement(By.name("last_name")).sendKeys("Patil");
		driver.findElement(By.name("middle_name")).sendKeys("Dev");
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id=\"dashboard-toolbar\"]/div[2]/div/button[2]")).click();
			
	
	}


}
