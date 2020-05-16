package stepDefination;

import java.util.List;
import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DealStepDefination {
	
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
//	}
//	
//	@When("^title of login page is Free CRM$")
//	public void title_of_login_page_is_free_CRM() {
//		String title=driver.getTitle();
//		System.out.println(title);
//		Assert.assertEquals("Cogmento CRM", title);
//	}
//	
//	@Then("^user enters username and password$")
//	public void user_enters_username_and_password(DataTable credentials) {
//		
//		List<List<String>> data=credentials.raw();
//		driver.findElement(By.name("email")).sendKeys(data.get(0).get(0));
//		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));	
//	}
//	
//	@Then("^user clicks on login buttom$")
//	public void user_clicks_on_login_buttom() {
//		WebElement loginBtn =driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]"));
//		JavascriptExecutor js=(JavascriptExecutor)driver;
//		js.executeScript("arguments[0].click();", loginBtn);
//	}
//	
//	@Then("^user is on home page$")
//	public void user_is_on_login_button() throws InterruptedException {
//		String title = driver.getTitle();
//		System.out.println("Homepage title is :"+ title);
//		Assert.assertEquals("Cogmento CRM", title);	
//	}
//	
//	@Then("^user move to deal page$")
//	public void user_move_to_deal_page() throws InterruptedException {
//	Thread.sleep(3000);
//	WebElement element= driver.findElement(By.cssSelector("#main-nav>a:nth-child(5)>span"));
//	JavascriptExecutor executor = (JavascriptExecutor)driver;			
//	executor. executeScript("arguments[0].click();", element);
//	
//	Actions action = new Actions(driver);
//	action.moveToElement(driver.findElement(By.cssSelector("#main-nav>a:nth-child(5)>span"))).click();
//	Thread.sleep(5000);
//	}
//	
//	
//	@Then("^click on new deal btn$")
//	public void click_on_new_deal_btn() throws InterruptedException {
//	driver.manage().window().maximize();
//	Thread.sleep(7000);
//	driver.findElement(By.xpath("//*[@id=\"dashboard-toolbar\"]/div[2]/div/a[3]/button")).click();
//	}
//	
//	@Then("^user enters deal details$") 
//	public void user_enters_deal_deatils(DataTable dealData) throws InterruptedException {
//	List<List<String>> dealValues = dealData.raw();
//		
//	Thread.sleep(3000);
//	driver.findElement(By.name("title")).sendKeys(dealValues.get(0).get(0));
//	driver.findElement(By.name("amount")).sendKeys(dealValues.get(0).get(1));
//	driver.findElement(By.name("commission")).sendKeys(dealValues.get(0).get(2));
//	driver.findElement(By.name("probability")).sendKeys(dealValues.get(0).get(3));
//	Thread.sleep(1500);
//	driver.findElement(By.xpath("//*[@id=\"dashboard-toolbar\"]/div[2]/div/button[2]")).click();
//		
//	}
//	
//	@Then("^close the browser$")
//	public void close_the_browser() throws InterruptedException {
//	Thread.sleep(1500);	
//		driver.close();
//	}
	
}
