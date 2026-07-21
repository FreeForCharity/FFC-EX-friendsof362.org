import { test, expect } from '@playwright/test'

/**
 * Footer-Only Template Smoke Tests
 *
 * This repo intentionally renders:
 * - Homepage nonprofit content
 * - Footer
 */

test.describe('Footer-only template', () => {
  test('should render homepage content and the footer', async ({ page }) => {
    await page.goto('/')

    await expect(
      page.getByRole('heading', { level: 1, name: 'Friends of Pack 362 Inc.' })
    ).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible()
  })
})
