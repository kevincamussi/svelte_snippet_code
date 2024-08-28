import { expect, test } from '@playwright/test';

test.describe('Teste for homepage', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://kevincamussi.github.io/svelte_snippet_code/');
	});

	test('should render correctly', async ({ page }) => {
		await expect(page.locator('text=Create A Code Snippet')).toBeVisible();
	});

	test('should type title', async ({ page }) => {
		const input = page.locator('input[placeholder="Enter title here..."]');
		await expect(input).toBeVisible();
		await input.fill('Teste');
		await expect(input).toHaveValue('Teste');
	});

	test('should select CSS', async ({ page }) => {
		const select = page.locator('select');
		await expect(select).toBeVisible();
		await select.selectOption({ label: 'CSS' });
		const selectedOption = await select.inputValue();
		await expect(selectedOption).toBe('css');
	});

	test('should type in textarea', async ({ page }) => {
		const textarea = page.locator('textarea');
		await expect(textarea).toBeVisible();
		await textarea.fill('.teste {This is a test}');
		await expect(textarea).toHaveValue('.teste {This is a test}');
	});

	test('should create snippet card with info filled', async ({ page }) => {
		const input = page.locator('input[placeholder="Enter title here..."]');
		await expect(input).toBeVisible();
		await input.fill('Teste');

		const select = page.locator('select');
		await expect(select).toBeVisible();
		await select.selectOption({ label: 'CSS' });

		const textarea = page.locator('textarea');
		await expect(textarea).toBeVisible();
		await textarea.fill('.teste {This is a test}');

		const button = page.locator('button:text("Create Snippet")');
		await expect(button).toBeVisible();
		await button.click();

		const cardHeader = page.locator('.card-header').first();
		await expect(cardHeader).toBeVisible();
		const text = await cardHeader.evaluate((el) => el.firstChild?.textContent?.trim());
		await expect(text?.trim()).toBe('Teste');

		const cardLanguage = page.locator('.codeblock-language').first();
		await expect(cardLanguage).toBeVisible();
		await expect(cardLanguage).toHaveText('css');

		const codeblock = page.locator('.codeblock-code').first();
		await expect(codeblock).toBeVisible();
		await expect(codeblock).toHaveText('.teste {This is a test}');
	});
});
