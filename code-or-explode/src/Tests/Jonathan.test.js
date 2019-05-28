// Good Info for getting your unit tests done :)

// https://github.com/dKaiona/unit-testing-afternoon unit testing afternoon project
// https://github.com/dKaiona/unit-testing-mini unit testing mini project
// https://github.com/dm-youtube-clone/youtube-clone Josh's group project. Look for logic.js and Tests
// https://jestjs.io/docs/en/getting-started Jest's docs


import React from 'react'
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Carousel from '../Components/Carousel/Carousel';
import Desk from '../Components/Desk/Desk';
import Info from '../Components/Info/Info'
import Fail from '../Components/Fail/Fail'



Enzyme.configure({ adapter: new Adapter() });

describe("Fail Component", () => {
    test("renders", () => {
        const wrapper2 = shallow(<Carousel/>)
        expect(wrapper2.exists()).toBe(true)
    })
})

describe("Fail Component", () => {
    test("renders", () => {
        const wrapper2 = shallow(<Desk/>)
        expect(wrapper2.exists()).toBe(true)
    })
})

describe("Fail Component", () => {
    test("renders", () => {
        const wrapper2 = shallow(<Fail/>)
        expect(wrapper2.exists()).toBe(true)
    })
})

describe("Fail Component", () => {
    test("renders", () => {
        const wrapper2 = shallow(<Info/>)
        expect(wrapper2.exists()).toBe(true)
    })
})

