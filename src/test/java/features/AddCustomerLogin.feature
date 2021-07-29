Feature: Techfios add customer new account functionality validation 
f
Background: 
	 Given User is on the TF login page 
	
@Smoke
Scenario Outline: User should able to login with valid credentials
	When User enter username as "<username>" 
	When User enter password as "<password>"    
	And User clicks on the login button   
	Then User should able to see the dashboard     
	When User clicks on customers 
	When User clicks on add customers 
	Then User should able to see the add contacts page
	When User fill up form entering fullName as "<fullName>" 
	When User fill up the form entering email as "<email>" 
	When User fill up form entering phone as "<phone>" 
	When User fill up the form entering address as "<address>" 
	When User fill up the form entering city as "<city>" 
	When User fill up the form entering stateandregion as "<state>" 
	When User fill up the form entering zipcode as "<zip>" 
	And User clicks on save button 
Examples:
|username|password|fullName|email|phone|address|city|state|zip|
|demo@techfios.com|abc123|Kajol D|dream1@techfios.com|214 435 5547|2741 E Belt Line Rd|Carrollton|Texas|75006| 