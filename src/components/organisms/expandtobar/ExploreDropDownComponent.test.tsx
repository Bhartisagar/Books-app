import { render, screen } from "@testing-library/react";
import ExploreDropDownComponent from "./ExploreDropDownComponent";
import { MemoryRouter } from "react-router";
import renderer from 'react-test-renderer'

test("first snapshot",()=>{
    const component = renderer.create(
        <MemoryRouter><ExploreDropDownComponent/></MemoryRouter>
    )
    let tree=component.toJSON();

    expect(tree).toMatchSnapshot();
})


test('should render entrepreneur icon',()=>{
      render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
      const Icon = screen.getByRole('heading',{name:"Explore by category"})
      expect(Icon).toBeInTheDocument();
});
test('should render heading See recently added titles',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByRole('heading',{name:"See recently added titles"})
    expect(Icon).toBeInTheDocument();
});
test('should render See popular titles icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByRole('heading',{name:"See popular titles"})
    expect(Icon).toBeInTheDocument();
});
test('should render rocket icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByAltText('entrepreneurship')
    expect(Icon).toBeInTheDocument();
});
test('should render health icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByAltText('health')
    expect(Icon).toBeInTheDocument();
});
test('should render science icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByAltText('science')
    expect(Icon).toBeInTheDocument();
});
test('should render Econics icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByAltText('Economics')
    expect(Icon).toBeInTheDocument();
});
test('should render Motivation icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByAltText('Motivation')
    expect(Icon).toBeInTheDocument();
});
test('should render Productivity icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByAltText('Productivity')
    expect(Icon).toBeInTheDocument();
});
test('should render Career icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByAltText('Career')
    expect(Icon).toBeInTheDocument();
});
test('should render Personal Development icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByAltText('Personal Development')
    expect(Icon).toBeInTheDocument();
});
test('should render  icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByAltText('Communication Skills')
    expect(Icon).toBeInTheDocument();
});
test('should render Investments icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByAltText('Investments')
    expect(Icon).toBeInTheDocument();
});
test('should render Relationships icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByAltText('Relationships')
    expect(Icon).toBeInTheDocument();
});
test('should render Education icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByAltText('Education')
    expect(Icon).toBeInTheDocument();
});
test('should render history icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByAltText('history')
    expect(Icon).toBeInTheDocument();
});
test('should render Corporate Culture icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByAltText('Corporate Culture')
    expect(Icon).toBeInTheDocument();
});
test('should render Psychology icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByAltText('Psychology')
    expect(Icon).toBeInTheDocument();
});
test('should render Nature icon',()=>{
    render(<MemoryRouter><ExploreDropDownComponent/></MemoryRouter>)
    const Icon = screen.getByAltText('Nature')
    expect(Icon).toBeInTheDocument();
});