import { expect } from 'detox';

describe('homescreen tests', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
      it('should have welcome screen', async () => {
        await expect(element(by.id('title'))).toBeVisible();
        await expect(element(by.id('title'))).toHaveText('Hello there');
        await expect(element(by.id('title'))).toHaveText('Hello there');
        
      });
    
      it('should have input text box in the home screen', async () => {
        await expect(element(by.id('input'))).toBeVisible();
      });

      it('should enter text in the text box', async () => {
        await element(by.id('input')).typeText('hello world');
      });
    
      it('should have button in the home screen', async () => {
         await expect(element(by.id('button'))).toBeVisible()
      });

      it('user should tap on the click me button in the home screen', async () => {
        await element(by.text('Click Me')).tap();
      });

      it('user tap on ok button', async () => {
        await element(by.text('OK')).tap();
      });
  });
  