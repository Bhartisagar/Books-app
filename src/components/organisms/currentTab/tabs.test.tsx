import { render, screen } from "@testing-library/react";
import { MyTabs } from "./tabs";
import renderer from 'react-test-renderer';
import { fireEvent } from "@storybook/testing-library";

test("first snapshot",()=>{
    const component = renderer.create(
        <MyTabs></MyTabs>
    )
    let tree=component.toJSON();

    expect(tree).toMatchSnapshot();
})

test('should render tab Current tab',()=>{
    render(<MyTabs></MyTabs>)
    const name = screen.getByText("Current Reading")
    expect(name).toBeInTheDocument();

})
test('should render tab finished',()=>{
    render(<MyTabs></MyTabs>)
    const name = screen.getByText("finished")
    expect(name).toBeInTheDocument();

})
test('should render tab',()=>{
    render(<MyTabs></MyTabs>)
    const name = screen.getByRole("tab",{selected:true})
    expect(name).toBeInTheDocument();

})
test('should render mapp data button',async()=>{
    render(<MyTabs></MyTabs>)
    const card = await screen.findByTestId("current-3")
    expect(card).toBeInTheDocument();
})

test('should render mapp data',async()=>{
    render(<MyTabs></MyTabs>)
    const card = await screen.findByTestId("current-8")
    expect(card).toBeInTheDocument();
})

test('should render mapp dat',async()=>{
    render(<MyTabs></MyTabs>)
    const card = await screen.findByTestId("cards1")
    expect(card).toBeInTheDocument();
})

test('should render mapp databutton',async()=>{
    render(<MyTabs></MyTabs>)
    const card1 = await screen.findByTestId("button-1")
    expect(card1).toBeInTheDocument();
})

test('should render mapp data headings',async()=>{
    render(<MyTabs></MyTabs>)
    const card2 = await screen.findByTestId("headings-1")
    expect(card2).toBeInTheDocument();
})
test('should render  onchange',async()=>{
    render(<MyTabs></MyTabs>)
    const card2 = screen.getByTestId('tabs')
    fireEvent.change(card2)
})
test('should render mapp databutton fun',async()=>{
    render(<MyTabs></MyTabs>)
    const card1 = await screen.findByTestId("button-1")
   fireEvent.click(card1)
})
