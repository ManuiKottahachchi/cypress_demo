class MainPage{

    visit_webpage(){
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.title().should('eq','TestCafe Example Page')
    }

    get_test(get_value){
        const test1 = cy.get('#developer-name')
        test1.type(get_value)
        return this
    }
    
    populate(){
        const btn1 = cy.get('input[type=button]')
        btn1.click()
    }

    filling_checkboxes(){
        const checkbox2 = cy.get('#reusing-js-code').check().should('be.checked')
        const checkbox3 = cy.get('#background-parallel-testing').check().should('be.checked')
    }

    filling_radio_buttons(get_value){
        const radio1 = cy.get('input[type="radio"]')
        radio1.check(get_value)
        return this
    }

    filling_dropdown(get_value){
        const dropdown1 = cy.get('#preferred-interface')
        dropdown1.select(get_value)
        return this
    }

    handling_scale(){
        const scale = cy.get('#tried-test-cafe')
        scale.check()
        const active_btn = cy.get('#slider > span')
        active_btn.click()
        active_btn.type('{rightArrow}{rightArrow}{rightArrow}')
    }

    get_comments(get_value){
        const comment = cy.get('#comments')
        comment.type(get_value)
        return this
    }

    submit_info(){
        const btn2 = cy.get('#submit-button')
        btn2.click()
    }

    display_thankyou(){
        cy.visit('https://devexpress.github.io/testcafe/example/thank-you.html')
    }

}

export default MainPage
