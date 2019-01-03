var webdriver = require('selenium-webdriver'),
    By = webdriver.By;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://google.com');

driver.findElement(By.name('q')).then(function(el) {
    console.log("Success" + el);
});

driver.findElement(By.css('#searchform')).then(function(el) {
    console.log("Success" + el);
});

driver.findElement(By.className('gLFyf gsfi')).then(function(el) {
    console.log("Success" + el);
});

driver.findElement(By.xpath('//*[@id="tsf"]/div[2]/div/div[1]/div/div[1]/input')).then(function(el) {
    console.log("Success" + el);
});