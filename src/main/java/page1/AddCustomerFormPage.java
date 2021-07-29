package page1;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AddCustomerFormPage {
	WebDriver driver;

	public AddCustomerFormPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[3]/a")
	WebElement Customers;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[3]/ul/li[1]/a")
	WebElement AddCustomers;
	@FindBy(how = How.XPATH, using = "//*[@name=\"account\"]")
	WebElement FullName;
	@FindBy(how = How.XPATH, using = "//*[@id=\"email\"]")
	WebElement Email;
	@FindBy(how = How.XPATH, using = "//*[@id=\"phone\"]")
	WebElement Phone;
	@FindBy(how = How.XPATH, using = "//*[@id=\"address\"]")
	WebElement Address;
	@FindBy(how = How.XPATH, using = "//*[@id=\"city\"]")
	WebElement City;
	@FindBy(how = How.XPATH, using = "//*[@id=\"state\"]")
	WebElement StateAndRegion;
	@FindBy(how = How.XPATH, using = "//*[@id=\"zip\"]")
	WebElement ZipCode;
	@FindBy(how = How.XPATH, using = "//*[@id=\"submit\"]")
	WebElement SaveButton;
	
	// Methods to interact with the elements
		public void clickCustomers() {
			Customers.click();
	}
		
		public void clickAddCustomers() {
			AddCustomers.click();
		}
		
		public void enterFullName(String fullName) {
			FullName.sendKeys(fullName);
		}
		
		public void enterEmail(String email) {
			Email.sendKeys(email);
		}
		
		public void enterPhone(String phone) {
			Phone.sendKeys(phone);
		}
		
		public void enterAddress(String address) {
			Address.sendKeys(address);
		}
		
		public void enterCity(String city) {
			City.sendKeys(city);
		}
		
		public void enterStateAndRegion(String state) {
			StateAndRegion.sendKeys(state);
		}
		
		public void enterZipCode(String zip) {
			ZipCode.sendKeys(zip);
		}
		
		public void clickSaveButton() {
			SaveButton.click();
		}
		
		public AddCustomerFormPage(String fullName, String email, String phone, String address, String city, String state, String zip, CharSequence fullname ) {
			FullName.sendKeys(fullName);
			Email.sendKeys(email);
			Phone.sendKeys(phone);
			Address.sendKeys(address);
			City.sendKeys(city);
			StateAndRegion.sendKeys(state);
			ZipCode.sendKeys(zip);
			SaveButton.click();
		}
		
		public String getPageTitle1() {
			return driver.getTitle();
			}

}

