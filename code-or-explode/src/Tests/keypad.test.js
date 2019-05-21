const keypad1 = require('../Components/Modules/Keypads/Keypad-1')

jest.mock('../Components/Modules/Keypads/Keypad-1');

test('ClickKey1() should add the number 1 to the playerArray', () =>{
    let playerArray = []
    console.log(keypad1)
    let keyPad = keypad1({})
     console.log(keyPad)
    expect(playerArray.length).toEqual(1)
})

// test('ClickKey2() should add the number 2 to the playerArray', () =>{
//     expect( keypad1.ClickKey2())
// })

// test('ClickKey3() should add the number 3 to the playerArray', () =>{
//     expect( keypad1.ClickKey3())
// })

// test('ClickKey4() should add the number 4 to the playerArray', () =>{
//     expect( keypad1.ClickKey4())
// })