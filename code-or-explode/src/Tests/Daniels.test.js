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


Enzyme.configure({ adapter: new Adapter() });

describe("Keypad1 component", () => {
    test("renders", () => {
        const wrapper = shallow(<Keypad1/>);
        const element = mount(<Keypad1/>)
        expect(wrapper.exists()).toBe(true)
        expect(element).toContainReact(<KeypadOutline></KeypadOutline>)
    });
    // test("playerArray should have a value of 1", () => {
    //     const wrapper = shallow(<Keypad1 ClickKey1={() => {}}/>)
    //     wrapper.find("Key1").simulate("change", {
    //         target: {playerArray: [1]}
    //     })
    //     expect(wrapper.find("onClick.").state().value).toEqual(1)
    // })
 });

 describe("Keypad2 component", () => {
     test("renders", () => {
         const wrapper = shallow(<Keypad2/>);
         expect(wrapper.exists()).toBe(true)
     })
 })
