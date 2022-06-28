const page=require('./page')
class create_campagin_detail_page{
    get compaign_name(){
        return $("//input[@name='campaignname']")
    }
    get saveBTN(){
        return $("//input[@title='Save [Alt+S]']")
    }
    async compaign_details(campaignname){
        await this.compaign_name.waitForDisplayed()
        await this.compaign_name.setValue(campaignname)
        await this.saveBTN.waitForClickable()
        await this.saveBTN.click()
    }
}module.exports=new create_campagin_detail_page()