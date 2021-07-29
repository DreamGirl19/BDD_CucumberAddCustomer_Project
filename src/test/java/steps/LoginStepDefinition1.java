package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page1.AddCustomerFormPage;
import page1.LoginPage1;
import page1.TestBase1;

public class LoginStepDefinition1 extends TestBase1 {
	LoginPage1 loginPage1Obj;
	AddCustomerFormPage addCustomerFormPageObj;
	
	@Before
	public void beforeRun() {
		initDriver();
	loginPage1Obj = PageFactory.initElements(driver, LoginPage1.class);
	addCustomerFormPageObj = PageFactory.initElements(driver, AddCustomerFormPage.class);
	
	}
		
	 @Given ("^User is on the TF login page$")
	 public void user_is_on_the_TF_login_page() {
		 driver.get("https://techfios.com/billing/?ng=login/"); 
	 }
	 
	 @When ("^User enter username as \"([^\"]*)\"$")
	 public void user_enter_username_as(String userName) throws Throwable {
		 loginPage1Obj.enterUserName(userName);
		 Thread.sleep(2000);
	 }
	 
	 
	 @When ("^User enter password as \"([^\"]*)\"$")
	 public void user_enter_password_as(String password) throws Throwable {
		 loginPage1Obj.enterPassword(password);
		 Thread.sleep(2000);
	 }
	 
	 @And ("^User clicks on the login button$")
	 public void user_clicks_on_the_login_button() {
		 loginPage1Obj.clickSignInButton();
	 }
	 
	 @Then ("^User should able to see the dashboard$")
	 public void user_should_able_to_see_the_dashboard() throws Throwable {
		 String expectedTittle = "Dashboard- iBilling";
			String actualTittle = loginPage1Obj.getPageTitle();
			Assert.assertEquals(expectedTittle, actualTittle);
			Thread.sleep(2000); 
	 }
	 
	 @When ("^User clicks on customers$")
	 public void user_clicks_on_customers() throws Throwable {
		 addCustomerFormPageObj.clickCustomers();
		 Thread.sleep(2000);
	 }
	 
	 @When ("^User clicks on add customers$")
	 public void user_clicks_on_add_customers() throws Throwable {
		 addCustomerFormPageObj.clickAddCustomers();
		 Thread.sleep(2000);
	 }
	 
	 @Then ("^User should able to see the add contacts page$")
	 public void user_should_able_to_see_the_add_contacts_page() throws Throwable {
		 String expectedTittle = "Contacts - iBilling";
		 	String actualTittle = addCustomerFormPageObj.getPageTitle1();
		 	Assert.assertEquals(expectedTittle, actualTittle);
		 	Thread.sleep(2000);
	 }
	 
	@ When ("^User fill up form entering fullName as \"([^\"]*)\"$")
	public void user_fill_up_form_entering_fullName_as(String fullName) {
		addCustomerFormPageObj.enterFullName(fullName);
	}
	
	@When ("^User fill up the form entering email as \"([^\"]*)\"$")
	public void user_fill_up_the_form_entering_email_as(String email) throws Throwable {
		addCustomerFormPageObj.enterEmail(email);
		Thread.sleep(2000);
	}
	
	@When ("^User fill up form entering phone as \"([^\"]*)\"$")
	public void user_fill_up_form_entering_phone_as(String phone) throws Throwable {
		addCustomerFormPageObj.enterPhone(phone);
		Thread.sleep(2000);
	}
	
	@When ("^User fill up the form entering address as \"([^\"]*)\"$")
	public void user_fill_up_the_form_entering_address_as(String address) throws Throwable {
		addCustomerFormPageObj.enterAddress(address);
		Thread.sleep(2000);
	}
	 
	@When ("^User fill up the form entering city as \"([^\"]*)\"$")
	public void user_fill_up_the_form_entering_city_as(String city) throws Throwable {
		addCustomerFormPageObj.enterCity(city);
		Thread.sleep(2000);
	}
	
	@When ("^User fill up the form entering stateandregion as \"([^\"]*)\"$")
	public void user_fill_up_the_form_entering_stateandregion_as(String state) throws Throwable {
		addCustomerFormPageObj.enterStateAndRegion(state);
		Thread.sleep(2000);
	}
	
	@When ("^User fill up the form entering zipcode as \"([^\"]*)\"$")
	public void user_fill_up_the_form_entering_zipcode_as(String zip) throws Throwable {
		addCustomerFormPageObj.enterZipCode(zip);
		Thread.sleep(2000);
	}

	@And ("^User clicks on save button$")
	public void user_clicks_on_save_button() throws Throwable {
		addCustomerFormPageObj.clickSaveButton();
		Thread.sleep(2000);
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
}
