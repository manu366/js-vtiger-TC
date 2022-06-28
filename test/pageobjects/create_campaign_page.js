const page=require('./page')
class campaignpage{
    get create_compaign(){
        return $("//img[@title='Create Campaign...']")
    }
    async create_compaignButton(){
        await this.create_compaign.click()
        await this.create_compaign.waitForClickable()
    }
}module.exports=new campaignpage()