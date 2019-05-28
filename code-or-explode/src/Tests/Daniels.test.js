// Good Info for getting your unit tests done :)
// https://github.com/dKaiona/unit-testing-afternoon unit testing afternoon project
// https://github.com/dKaiona/unit-testing-mini unit testing mini project
// https://github.com/dm-youtube-clone/youtube-clone Josh's group project. Look for logic.js and Tests
// https://jestjs.io/docs/en/getting-started Jest's docs
// https://airbnb.io/enzyme/ enzyme docs
// https://blog.bitsrc.io/how-to-test-react-components-using-jest-and-enzyme-fab851a43875 Helpful article

import React from 'react'
import Enzyme, { shallow, mount, render } from "enzyme";
import Keypad1 from "../Components/Modules/Keypads/Keypad-1";
import Adapter from "enzyme-adapter-react-16";
import Keypad2 from "../Components/Modules/Keypads/Keypad-2";
import Keypad3 from "../Components/Modules/Keypads/Keypad-3";
import GreenFlash from '../Components/Modules/Buttons/GreenFlash'
import FlashingButton from '../Components/Modules/Buttons/GreenFlash';



Enzyme.configure({ adapter: new Adapter() });

describe("Keypad1 component", () => {
    test("renders", () => {
        const wrapper = shallow(<Keypad1/>);
        expect(wrapper.exists()).toBe(true)
    });
   
 });

 describe("Keypad2 component", () => {
     test("renders", () => {
         const wrapper = shallow(<Keypad2/>);
         expect(wrapper.exists()).toBe(true)
     })
 })

 describe("Keypad3 component", () => {
    test("renders", () => {
        const wrapper = shallow(<Keypad3/>);
        expect(wrapper.exists()).toBe(true)
    })
})

describe("GreenFlash component", () => {
    test("renders", () => {
        const wrapper = shallow(<GreenFlash/>);
        expect(wrapper.exists()).toBe(true)
    })
})

describe("FlashingButton component", () => {
    test("renders", () => {
        const wrapper = shallow(<FlashingButton/>);
        expect(wrapper.exists()).toBe(true)
    })
})

