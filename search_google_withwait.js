var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    Keys = webdriver.Key;

var driver = new webdriver.Builder().forBrowser('chrome').build();

//opens Google.com
driver.get('https://google.com');

//waiting for element to load 
driver.wait(until.elementLocated(By.name('q')), 10000, 'Could not locate the child element within the time specified');

//selecting google search box by name
var sltd = driver.findElement(By.name('q'));

//Searching Redcarpet Internship
sltd.sendKeys("Redcarpet Internship", Keys.RETURN);