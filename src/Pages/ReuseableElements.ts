import {Page,Locator,expect} from '@playwright/test';

export class ReuseableElements
{
    readonly page:Page;
    readonly headerText:Locator;
    readonly loginLink:Locator;
    readonly homeLink:Locator;
    readonly footerText:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.headerText=page.locator('h1',{hasText:/Welcome/});
        this.loginLink=page.locator('a', { hasText: 'Login' });
        this.homeLink=page.locator('a', { hasText: 'Home' });
        this.footerText=page.locator('footer',{hasText:/Copywright/});
    }

    async verifyHeaderText()
    {
        await expect(this.headerText).toBeVisible();
        await expect(this.headerText).toHaveText(/Welcome/);
    }

    async verifyFooterText()
    {
        await expect(this.footerText).toBeVisible();
        await expect(this.footerText).toHaveText(/Copywright/);
    }

    async clickLoginLink()
    {
        await expect(this.loginLink).toBeVisible();
        await expect(this.loginLink).toHaveText('Login');
    }

    async clickHomeLink()
    {
        await expect(this.homeLink).toBeVisible();
        await expect(this.homeLink).toHaveText('Home');
    }

}