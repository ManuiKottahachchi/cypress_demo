import MainPage from '../PageObjects/MainPage'

describe('First test suite', () => 
 {
  const mp1 = new MainPage()

    it('Verify web page', () => {
        mp1.visit_webpage()
    })

    it('Enter test and click on populate',()=>{
      mp1.get_test('test')
      mp1.populate()                                                                            //cypress auto conformation the alert popup
    })

    it('Checking 2nd and 3rd checkboxes',()=>{
      mp1.filling_checkboxes()
    })

    it('Checking Radio buttons for selecting OS',()=>{
      mp1.filling_radio_buttons('MacOS')
    })

    it('Selecting Interface from dropdown',()=>{
      mp1.filling_dropdown('JavaScript API')
    })

    it('Handling scale',()=>{
      mp1.handling_scale()
    })

    it('Text area typing',()=>{
    mp1.get_comments('test')
    })

    it('Submit information',()=>{
      mp1.submit_info()
    
    })

    it('Thank you page',()=>{
      mp1.display_thankyou()
    })
    
  })