import { fireEvent, render,screen } from "@testing-library/react";
import AppBars from "./AppBars";
import { MemoryRouter } from "react-router";

test('should render seacrh icon',()=>{
    render(<MemoryRouter><AppBars></AppBars></MemoryRouter>)
    const searchIcon= screen.getByAltText("search")
    expect(searchIcon).toBeInTheDocument();
})
test('should render logo icon',()=>{
    render(<MemoryRouter><AppBars></AppBars></MemoryRouter>)
    const searchIcon= screen.getByAltText("logo")
    expect(searchIcon).toBeInTheDocument();
})
test('should render downlist icon',()=>{
    render(<MemoryRouter><AppBars></AppBars></MemoryRouter>)
    const searchIcon= screen.getByAltText("downlist")
    expect(searchIcon).toBeInTheDocument();
})
test('should render downlist1 icon',()=>{
    render(<MemoryRouter><AppBars></AppBars></MemoryRouter>)
    const searchIcon= screen.getByAltText("downlist1")
    expect(searchIcon).toBeInTheDocument();
})

test('should render Explore text',()=>{
    render(<MemoryRouter><AppBars></AppBars></MemoryRouter>)
    const searchIcon= screen.getByText('Explore')
    expect(searchIcon).toBeInTheDocument();
})
test('should render button click',()=>{
    render(<MemoryRouter><AppBars></AppBars></MemoryRouter>)
    const searchIcon= screen.getByTestId('lib')

    fireEvent.click(searchIcon)
})


test('should render explore click',()=>{
    render(<MemoryRouter><AppBars></AppBars></MemoryRouter>)
    const searchIcon= screen.getByTestId('explorediv')

    fireEvent.click(searchIcon)
})