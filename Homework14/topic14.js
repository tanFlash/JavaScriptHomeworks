const {Builder, Key, By, until} = require('selenium-webdriver');
const assert = require('assert');

// //Task 1
// async function RunFirstTest(){
//     let driver = await new Builder().forBrowser('chrome').build();
//     await driver.get('http://the-internet.herokuapp.com/dropdown');
//     let dropdown = await driver.findElement(By.id('dropdown'));
//     await dropdown.click();
//     let firstOption = await driver.findElement(By.xpath('//select[@id=\'dropdown\']//option[1]'));
//     let firstOptionEnabled = await firstOption.isEnabled();
//     assert.equal(!firstOptionEnabled, false, "The first option is disabled");
//     console.log(`The first option is enabled ${firstOptionEnabled}`);
//     let secondOption = await driver.findElement(By.xpath('//select[@id=\'dropdown\']//option[2]'));
//     let secondOptionEnabled = await secondOption.isEnabled();
//     assert.equal(secondOptionEnabled, true, "The second option is enabled");
//     console.log(`The second option is enabled ${secondOptionEnabled}`);
//     await driver.quit();
// }

// RunFirstTest();


// //Task 2

// async function RunSecondTest(){
//     let driver = await new Builder().forBrowser('chrome').build();
//     await driver.get("http://the-internet.herokuapp.com/hovers");
//     const action = driver.actions({async:true});
//     let avatars = await driver.findElements(By.className('figure'));

//     await action.move({origin: avatars[0]}).perform();
//     let titles = await driver.findElements(By.className('figcaption'));
//     const isDisplayed = await titles[0].getCssValue('display');
//     assert.equal(isDisplayed, 'block');
//     await driver.quit();
// }

// RunSecondTest();

// //Task 3

// async function RunThirdTest(){
//     let driver = await new Builder().forBrowser('chrome').build();
//     await driver.get('http://formy-project.herokuapp.com/form');
//     await driver.findElement(By.id('first-name')).sendKeys('Peter');
//     await driver.findElement(By.id('last-name')).sendKeys('Peterson');
//     await driver.findElement(By.id('job-title')).sendKeys('tester');
//     await driver.findElement(By.id('radio-button-1')).click();
//     await driver.findElement(By.id('checkbox-1')).click();
//     await driver.findElement(By.id('select-menu')).click();
//     await driver.findElement(By.xpath('//option[@value=\'2\']')).click();
//     await driver.findElement(By.id('datepicker')).sendKeys('12/12/2020');
//     await driver.findElement(By.className('btn btn-lg btn-primary')).click();
//     let formSubmitted =  await driver.wait(until.elementLocated(By.className('alert alert-success')));
//     let formSubmittedText = await formSubmitted.getText();
//     assert.equal(formSubmittedText, "The form was successfully submitted!");
//     await driver.quit();
// }

// RunThirdTest();

//Task 4

async function RunFourthTest(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://the-internet.herokuapp.com/tables');
    await driver.findElement(By.className('dues')).click();
    let firstRowDue = await driver.findElement(By.xpath("(//td[@class='dues'])[1]"));
    let secondRowDue = await driver.findElement(By.xpath("(//td[@class='dues'])[2]"));
    let thirdRowDue = await driver.findElement(By.xpath("(//td[@class='dues'])[3]"));
    let fourthRowDue = await driver.findElement(By.xpath("(//td[@class='dues'])[4]"));
    assert(firstRowDue.getText(), '$50.00');
    assert(secondRowDue.getText(), '$50.00');
    assert(thirdRowDue.getText(), '$51.00');
    assert(fourthRowDue.getText(), '$100.00');
}

RunFourthTest();