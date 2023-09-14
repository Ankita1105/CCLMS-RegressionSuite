package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ServertelDIYStepDef {

	WebDriver driver = Hooks.driver;
	WebDriverWait wait = new WebDriverWait(driver, 90);

	@Given("Launch the application using URL")
	public void launchURl() throws InterruptedException {

		driver.get(
				"https://stage-cc-panel-web.qac24svc.dev/cc-outbound?print=1&sessionId=1&campaignId=1&crtObjectId=1&userCrtObjectId=1&userId=1&customerId=1&phone=1&agentName=1&dispositionCode=1&dispositionAttr=1&customerInfo=%7B%22phone1%22:%22%7BAgent%20Number%7D%22,%22phone2%22:%22%22,%22phone3%22:%22%22,%22name%22:%22%22,%22timezone%22:%22%22,%22lms_lead_id%22:%229931180%22,%22retry_interval%22:%22%22,%22next_attempt_date_tim%22:%22%22,%22lead_score%22:%22%22,%22should_dial%22:%22%22,%22custom_field1%22:%22%22,%22custom_field2%22:%22%22,%22custom_field3%22:%22%22%7D");
		Thread.sleep(10000);
	}

	@When("user logged in the cc panel web with {string} and {string}")
	public void user_logged_in_the_cc_panel_web_with_and(String username, String password) throws InterruptedException {

		WebElement email = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='email']")));
		email.sendKeys(username);

		WebElement pswd = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='password']")));
		pswd.sendKeys(password);

		WebElement login = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'Sign In')]")));
		login.click();
		Thread.sleep(2000);

	}

	@When("I enter fullName as {string}")
	public void i_enter_fullName_as(String name) throws InterruptedException {
		WebElement fullName = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='fullName']")));
		fullName.sendKeys(name);
		Thread.sleep(2000);
	}

	@When("I clear the Phone number already filled")
	public void i_clear_the_Phone_number_already_filled() throws InterruptedException {
		WebElement phoneNumber = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='phoneNumber']")));
		phoneNumber.clear();
		Thread.sleep(2000);
	}

	@When("I enter phoneNumber as {string}")
	public void i_enter_phoneNumber_as(String phNum) throws InterruptedException {
		WebElement phoneNumber = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='phoneNumber']")));
		phoneNumber.sendKeys(phNum);
		Thread.sleep(2000);
	}

	@When("I enter regNumber as {string}")
	public void i_enter_regNumber_as(String regNumberVal) throws InterruptedException {

		WebElement regNumber = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='registrationNumber']")));
		regNumber.sendKeys(regNumberVal);

	}

	@When("I click on get details button")
	public void i_click_on_get_details_button() throws InterruptedException {
		// *[contains(text(),'Get Details')]
		WebElement detailButton = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'Get Details')]")));
		detailButton.click();
	}

	@When("I select Make")
	public void i_select_Make() throws InterruptedException {
		WebElement make = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='make']")));
		make.click();
		WebElement makeid = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//li[contains(text(),'HONDA')]")));
		makeid.click();
	}

	@When("I select Model")
	public void i_select_Model() throws InterruptedException {
		WebElement model = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='model']")));
		model.click();

		WebElement modelid = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//li[contains(text(),'BRIO')]")));
		modelid.click();

	}

	@When("I select Year")
	public void i_select_Year() {
		WebElement year = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='year']")));
		year.click();
		WebElement yearid = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//li[contains(text(),'2020')]")));
		yearid.click();
	}

	@When("I select Fuel Type")
	public void i_select_Fuel_Type() {
		WebElement fuel = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='fuelType']")));
		fuel.click();
		WebElement fuelid = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'Petrol')]")));
		fuelid.click();
	}

	@When("I select Transmission Type")
	public void i_select_Transmission_Type() {
		WebElement transmissionType = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='transmissionType']")));
		transmissionType.click();

		WebElement transmissionTypeId = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'MT')]")));
		transmissionTypeId.click();
	}

	@When("I select Variant")
	public void i_select_Variant() {
		WebElement transmissionType = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='variant']")));
		transmissionType.click();

		WebElement transmissionTypeId = wait.until(
				ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'S(O) MT [2016-2019]')]")));
		transmissionTypeId.click();
	}

	@When("I select odometer")
	public void i_select_odometer() {
		WebElement transmissionType = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='odometer']")));
		transmissionType.click();

		WebElement transmissionTypeId = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'20000-40000')]")));
		transmissionTypeId.click();
	}

	@When("I select State")
	public void i_select_State() {

		WebElement state = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='registrationState']")));
		state.click();

		WebElement stateid = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//li[contains(text(),'Haryana')]")));
		stateid.click();

		// li[contains(text(),'Haryana')]
	}

	@When("I select RTO")
	public void i_select_RTO() {
		// div[@id='rto']
		// *[contains(text(),'HR-12')]

		WebElement rto = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='rto']")));
		rto.click();

		WebElement rtoid = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'HR-12')]")));
		rtoid.click();

	}

	@When("I click on location")
	public void i_click_on_location() {
		// input[@id='location']
		WebElement location = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='location']")));
		location.click();
	}

	@When("I enter {string}")
	public void i_enter(String string) {
		// need to move to switch window
		// input[@id='google-map-demo']

	}

	@When("I select location")
	public void i_select_location() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I click on checkBox of whatsapp consent")
	public void i_click_on_checkBox_of_whatsapp_consent() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I click on continue button")
	public void i_click_on_continue_button() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@Then("Lead created successfully")
	public void lead_created_successfully() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

}
