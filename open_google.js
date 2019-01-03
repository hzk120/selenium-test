var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().forBrowser('chrome').build();
//opens Google.com
driver.get('http://google.com');