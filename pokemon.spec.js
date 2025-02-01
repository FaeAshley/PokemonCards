const { test, expect } = require('@playwright/test');

test.describe('Pokémon Card Project', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5500'); 
    });

    test('should display all Pokémon cards on load', async ({ page }) => {
        const cards = await page.$$('.pokemon-card');
        expect(cards.length).toBe(100);  
    });

    test('should filter Pokémon by type (Fire)', async ({ page }) => {
        await page.click('[data-type="fire"]');
        const fireCards = await page.$$eval('.pokemon-card', cards =>
            cards.map(card => card.textContent)
        );

        expect(fireCards.length).toBeGreaterThan(0);
        expect(fireCards.every(name => /Fire/i.test(name))).toBe(true);
    });

    test('should reset to all Pokémon when clicking "All"', async ({ page }) => {
        await page.click('[data-type="fire"]');
        await page.click('[data-type="all"]');

        const allCards = await page.$$('.pokemon-card');
        expect(allCards.length).toBe(100);  
    });

    test('should display correct Pokémon info', async ({ page }) => {
        const firstCard = await page.locator('.pokemon-card').first();
        await expect(firstCard).toContainText('Bulbasaur');
        await expect(firstCard).toContainText('Grass');
        await expect(firstCard.locator('img')).toBeVisible();
    });
});
