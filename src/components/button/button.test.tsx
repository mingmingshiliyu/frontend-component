// //默认模板
// //npm install --save-dev @testing-library/react
// //__tests__文件夹中.js结尾
// //.test.js结尾文件
// //.spec.js结尾文件

// //npm install --save-dev jest

// import '@testing-library/jest-dom/extend-expect'

// import { fireEvent, render } from "@testing-library/react"
// import Button from "./button"

// test('first test case',()=>{
//     const wrapper=render(<Button disabled={false} onClick={()=>console.log("clicked")}>Nice</Button>)
//     const element = wrapper.queryByText('Nice')
//     // expect(element).toBeTruthy()

//     expect(element).toBeInTheDocument()
// })

// //jest-dom工具，作为testing-library/react的扩展工具包 
// //npm install --save-dev @testing-library/jest-dom
// //新建一个文件setupTests.ts
// //import '@testing-library/jest-dom/extend-expect'
// //expect(element).toBeInTheDocument() 新出现的方法

// describe('test button component',()=>{
//     it('should render the correct default button',()=>{
//         const wrapper=render(<Button disabled={false} onClick={jest.fn()}>Nice</Button>)
//         const element = wrapper.getByText('Nice')
//         // expect(element).toBeTruthy()

//         expect(element).toBeInTheDocument()
//         expect(element?.tagName).toEqual('BUTTON')
//         expect(element).toHaveClass('btn btn-default')

//         //测试click方法
//         fireEvent.click(element)
//         expect(element.onclick).toHaveBeenCalled()
//     })
//     it('should render the correct component based on different props',()=>{
//         const wrapper=render(<Button disabled={false} btnType onClick={jest.fn()}>Nice</Button>)
//         const element = wrapper.getByText('Nice')
//         // expect(element).toBeTruthy()

//         expect(element).toBeInTheDocument()
//         expect(element.tagName).toEqual('A')
//     })
//     it('should render a link when btnType equals link and href is provided',()=>{

//     })
//     it('should render disabled button when disabled set to true',()=>{

//     })
// })