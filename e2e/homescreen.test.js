describe('homescreen tests', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
      it('should have welcome screen', async () => {
        await expect(element(by.id('title'))).toBeVisible();
        await expect(element(by.id('title'))).toHaveText('Hello there');
        
      });
    
      it('should have input text box in the home screen', async () => {
        await expect(element(by.id('input'))).toBeVisible();
      });

      it('should enter text in the text box', async () => {
        await element(by.id('input')).typeText('hello world');
      });
    
      it('should have button in the home screen', async () => {
         const byIdButton = element(by.id('button'))
        await expect(element(by.id('button'))).toBeVisible(byIdButton.text)
      });

      it('user should tap on the click me button in the home screen', async () => {
        const byText = element(by.text('Click Me'))
        await element(byText).tap;
      });

      it('user tap on ok button', async () => {
        await expect(element(by.text('OK'))).tap;
      });
  });
  