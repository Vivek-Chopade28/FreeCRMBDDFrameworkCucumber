package stepDefination;

import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDefination {
	
//	WebDriver driver;
//	
//
//	@Given("^user is already on login page$")
//	public void user_already_login_page() {
//	
//	System.setProperty("webdriver.chrome.driver", "E:\\Vivek Automation Study\\All WebDrivers\\chromedriver_win32\\Chrome 81\\chromedriver.exe");	
//	driver = new ChromeDriver();	
//	driver.get("https://ui.freecrm.com/");
//	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//}	
//	
//	
//	@When("^title of login page is Free CRM$")
//	public void title_of_login_page_is_free_CRM() {
//		String title=driver.getTitle();
//		System.out.println(title);
//		Assert.assertEquals("Cogmento CRM", title);
//	}
//	
//	//Regular expression 
//	//1. \"([^\"]*)\"
//	//2. \"(.*)\"
//	@Then("^user enters \"(.*)\" and enters \"(.*)\"$")
//	public void user_enters_username_and_enters_password(String username , String password) {
//		driver.findElement(By.name("email")).sendKeys(username);
//		driver.findElement(By.name("password")).sendKeys(password);	
//	}
//	
//	@Then("^user clicks on login buttom$")
//	public void user_clicks_on_login_buttom() {
//		WebElement loginBtn =driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]"));
//		JavascriptExecutor js=(JavascriptExecutor)driver;
//		js.executeScript("arguments[0].click();", loginBtn);
//	}
//	
//	
//	@Then("^user is on home page$")
//	public void user_is_on_login_button() throws InterruptedException {
//		String title = driver.getTitle();
//		System.out.println("Homepage title is :"+ title);
//		Assert.assertEquals("Cogmento CRM", title);
//		Thread.sleep(850);
//	}
//	
//	@Then("^user move to new contact page$")
//	public void user_move_to_login_button() {
//	WebElement element= driver.findElement(By.cssSelector("#main-nav > a:nth-child(3) > span"));
//	JavascriptExecutor executor = (JavascriptExecutor)driver;			
//	executor. executeScript("arguments[0].click();", element);
//	}
//	
//	@Then("^click on new contact btn$")
//	public void click_on_new_contact_btn() throws InterruptedException {
//	Thread.sleep(3000);
//	driver.findElement(By.xpath("//*[@id=\"dashboard-toolbar\"]/div[2]/div/a/button/i")).click();
//	}
//	
//	@Then("^user enters contact details \"(.*)\" and \"(.*)\" and \"(.*)\"$") 
//	public void user_enters_fistname_and_lastname_and_position(String fistname, String lastname, String positon) throws InterruptedException {
//	Thread.sleep(3000);
//	driver.findElement(By.name("first_name")).sendKeys(fistname);
//	driver.findElement(By.name("last_name")).sendKeys(lastname);
//	driver.findElement(By.name("middle_name")).sendKeys(positon);
//	driver.findElement(By.xpath("//*[@id=\"dashboard-toolbar\"]/div[2]/div/button[2]")).click();
//		
//	}
//	
//	@Then("^close the browser$")
//	public void close_the_browser() {
//		driver.close();
//	}
//	
//	
}
