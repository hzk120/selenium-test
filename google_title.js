var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('https://google.com');

driver.wait(until.titleIs("Google")).then(function() {
    driver.getTitle().then(function(title) {
        console.log(" The title is " + title);
    });

});