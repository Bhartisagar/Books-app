import { render, screen } from "@testing-library/react";
import SeacrhBar from "./SeacrhBar";
import { MemoryRouter } from "react-router";
import renderer from 'react-test-renderer'

test("first snapshot",()=>{
    const component = renderer.create(
     <MemoryRouter><SeacrhBar/></MemoryRouter>   
    )
    let tree=component.toJSON();

    expect(tree).toMatchSnapshot();
})
test('shoult render Trending blinks heading',()=>{
    render(<MemoryRouter><SeacrhBar/></MemoryRouter>)
    const heading1 = screen.getByRole("heading",{name:'Trending blinks'})
    expect(heading1).toBeInTheDocument();
})
test('shoult render Just added heading',()=>{
    render(<MemoryRouter><SeacrhBar/></MemoryRouter>)
    const heading1 = screen.getByRole("heading",{name:'Just added'})
    expect(heading1).toBeInTheDocument();
})
test('shoult render Featured audio blinks heading',()=>{
    render(<MemoryRouter><SeacrhBar/></MemoryRouter>)
    const heading1 = screen.getByRole("heading",{name:'Featured audio blinks'})
    expect(heading1).toBeInTheDocument();
})
test('should render mapp data',async()=>{
    render(<MemoryRouter><SeacrhBar/></MemoryRouter>)
    const card = await screen.findByTestId("card-2")
    expect(card).toBeInTheDocument();
})
test('should render mapp data button',async()=>{
    render(<MemoryRouter><SeacrhBar/></MemoryRouter>)
    const card = await screen.findByTestId("headings-3")
    expect(card).toBeInTheDocument();
})
test('should render mapp data just added book',async()=>{
    render(<MemoryRouter><SeacrhBar/></MemoryRouter>)
    const card = await screen.findByTestId("justadded-9")
    expect(card).toBeInTheDocument();
})
test('should render mapp data buttons',async()=>{
    render(<MemoryRouter><SeacrhBar/></MemoryRouter>)
    const card = await screen.findByTestId("button-7")
    expect(card).toBeInTheDocument();
})
test('should render mapp dat',async()=>{
    render(<MemoryRouter><SeacrhBar/></MemoryRouter>)
    const card = await screen.findByTestId("card-2")
    expect(card).toBeInTheDocument();
})
