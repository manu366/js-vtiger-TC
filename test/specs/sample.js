describe.skip('test suite 01',()=>{
it('tc_01',()=>{
    console.log("tc_01");
})
it('tc_02',()=>{
    console.log("tc_03");
})
it('tc_03',()=>{
    console.log("tc_03");
})
})
describe('test suite 02',()=>{
    xit('tc_04',()=>{
        console.log("tc_04");
    })
    it.skip('tc_05',()=>{
        console.log("tc_05");
    })
    it('tc_06',()=>{
        console.log("tc_06");
    })
    })