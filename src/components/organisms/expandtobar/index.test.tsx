import Modal from ".";
import { render, screen,} from "@testing-library/react";
import { MemoryRouter } from "react-router";
import DropComp from './ExploreDropDownComponent'
test('render dropdown',()=>{
    render(<MemoryRouter><Modal open={true} DropComp={DropComp}></Modal></MemoryRouter>)
    const renderModal=screen.getByText("Explore by category")
    expect(renderModal).toBeInTheDocument();
})


test('should render entrepreneur icon',()=>{
    render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
    const Icon = screen.getByRole('heading',{name:"Explore by category"})
    expect(Icon).toBeInTheDocument();
});
test('should render heading See recently added titles',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByRole('heading',{name:"See recently added titles"})
  expect(Icon).toBeInTheDocument();
});
test('should render See popular titles icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByRole('heading',{name:"See popular titles"})
  expect(Icon).toBeInTheDocument();
});
test('should render rocket icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByAltText('entrepreneurship')
  expect(Icon).toBeInTheDocument();
});
test('should render health icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByAltText('health')
  expect(Icon).toBeInTheDocument();
});
test('should render science icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByAltText('science')
  expect(Icon).toBeInTheDocument();
});
test('should render Econics icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByAltText('Economics')
  expect(Icon).toBeInTheDocument();
});
test('should render Motivation icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByAltText('Motivation')
  expect(Icon).toBeInTheDocument();
});
test('should render Productivity icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByAltText('Productivity')
  expect(Icon).toBeInTheDocument();
});
test('should render Career icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByAltText('Career')
  expect(Icon).toBeInTheDocument();
});
test('should render Personal Development icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByAltText('Personal Development')
  expect(Icon).toBeInTheDocument();
});
test('should render  icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByAltText('Communication Skills')
  expect(Icon).toBeInTheDocument();
});
test('should render Investments icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByAltText('Investments')
  expect(Icon).toBeInTheDocument();
});
test('should render Relationships icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByAltText('Relationships')
  expect(Icon).toBeInTheDocument();
});
test('should render Education icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByAltText('Education')
  expect(Icon).toBeInTheDocument();
});
test('should render history icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByAltText('history')
  expect(Icon).toBeInTheDocument();
});
test('should render Corporate Culture icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByAltText('Corporate Culture')
  expect(Icon).toBeInTheDocument();
});
test('should render Psychology icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByAltText('Psychology')
  expect(Icon).toBeInTheDocument();
});
test('should render Nature icon',()=>{
  render(<MemoryRouter><Modal open={true}  DropComp={DropComp}></Modal></MemoryRouter>)
  const Icon = screen.getByAltText('Nature')
  expect(Icon).toBeInTheDocument();
});