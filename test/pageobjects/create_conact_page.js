
const Page = require('./page');
class create_contact_page extends Page {
    get create_contactBTN(){
        return $("//img[@alt='Create Contact...']")
    }
    async create_contact(){
        await this.create_contactBTN.click()
    }
}

module.exports = new create_contact_page();