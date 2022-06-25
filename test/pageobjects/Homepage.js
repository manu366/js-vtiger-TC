
const Page = require('./page');
class Homepage extends Page {
    get contact(){
        return $("//a[.='Contacts']")
    }
    async contactlink(){
        await this.contact.click()
    }
}

module.exports = new Homepage();