import {test,expect} from '@playwright/test';
import {ReuseableElements} from '../src/Pages/ReuseableElements';

test.describe('Login Page Tests', () => {

let username:any;
let password:any;
let loginButton:any;    
let resuseableElements: ReuseableElements;

/* create a beforeach test hook to run before each test case*/
test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/login');
    resuseableElements = new ReuseableElements(page);
    await resuseableElements.verifyHeaderText();
    await resuseableElements.clickHomeLink();
    await resuseableElements.clickLoginLink();    
    await resuseableElements.verifyFooterText();

    username = page.getByPlaceholder('Enter your username');
    password = page.getByPlaceholder('Enter your password');
    loginButton = page.getByRole('button', { name: 'Login' });
    await expect(username).toBeVisible();
    await expect(password).toBeVisible();
    await expect(loginButton).toBeVisible();
});

/* check if validation messages are displayed when the username textbox is empty and the login button is clicked */

test('check if validation messages are displayed when the username textbox is empty and the login button is clicked', async ({page}) => {
    await password.fill('testpassword');
    await loginButton.click();
    await expect(page.getByText('Username is required')).toBeVisible();
});

test('check if validation messages are displayed when the password textbox is empty and the login button is clicked', async ({page}) => {
    await username.fill('testuser');
    await loginButton.click();
    await expect(page.getByText('Password is required')).toBeVisible();
});

/* Try out Yourself: check if validation messages are displayed 
when the username and password textboxes are empty */

test('test for invalid username or password', async ({ page }) => {  
  await username.fill('ddd');  
  await password.fill('dddd');
  await loginButton.click();
  await expect(page.getByText('Invalid Username or Password')).toBeVisible();
});

test('test for valid username and password', async ({ page }) => {
  username.fill('joe123');
  password.fill('joe@123');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('http://localhost:4200/customer-update?username=joe123');
});


});