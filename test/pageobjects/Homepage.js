
const Page = require('./page');
class Homepage extends Page {
    get contact(){
        return $("//a[.='Contacts']")
    }
    async contactLink(){
        await this.contact.click()
    }
    get administretor(){
        return $("//img[@src='themes/softed/images/user.PNG']")
    }

    get signoutlink(){
        return $("//a[.='Sign Out']")
    }

    async signout(){
        await this.administretor.moveTo()
        await this.signoutlink.click()
    }
    get more(){
        return $("//a[.='More']")
    }
    async moreLink(){
        await this.more.moveTo()
    }
    get campaign(){
        return $("//a[.='Campaigns']")
    }
    async campaignLink(){
        await this.campaign.waitForClickable()
        await this.campaign.click()
    }
    get document(){
        return $("//a[.='Documents']")
    }
    async documentLink(){
        await (await this.document).click()
        await this.document.waitForDisplayed()
    }
    get lead(){
        return $("//a[.='Leads']")
    }
    async leadLink(){
        await this.lead.click()
        await this.lead.waitForDisplayed()
    }
        
}

module.exports = new Homepage();