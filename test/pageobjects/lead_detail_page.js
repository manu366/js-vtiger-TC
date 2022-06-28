class lead_deatil_page{
    get lastnameTextField(){
        return $("//input[@name='lastname']")
    }
    get companyTextField(){
        return $("//input[@name='company']")
    }
    get leadsourceDropdown(){
        return $("//select[@name='leadsource']")
    }
    get industryDropdown(){
        return $("//select[@name='industry']")
    }
    get groupRediobutton(){
        return $("//input[@value='T']")
    }
    get groupidDropdown(){
        return $("//select[@name='assigned_group_id']")
    }
    get save(){
        return $("//input[@title='Save [Alt+S]']")
    }
    async lead_deatils(lastname,company,leadsourceoption,industryoption,groupidoption){
        await this.lastnameTextField.setValue(lastname)
        await this.companyTextField.setValue(company)
        await this.leadsourceDropdown.selectByVisibleText(leadsourceoption)
        await this.industryDropdown.selectByVisibleText(industryoption)
        await this.groupRediobutton.click()
        await this.groupidDropdown.selectByVisibleText(groupidoption)
        await this.save.click()
    }
}module.exports=new lead_deatil_page()