import { fireEvent, render, screen } from "@testing-library/react";
import BookdetailView from "./BookdetailView";
import { MemoryRouter } from "react-router";
import renderer from 'react-test-renderer'

test('should render image of book',()=>{
    render(
    <MemoryRouter>
    <BookdetailView id={2}/>
    </MemoryRouter>
    )
    const BookImage = screen.getByRole("img")
    expect(BookImage).toBeInTheDocument();
})
test('should render heading of page',()=>{
    render(
    <MemoryRouter>
    <BookdetailView id={2}/>
    </MemoryRouter>
    )
    const BookImage = screen.getByRole("heading",{name:'Get the key ideas from'})
    expect(BookImage).toBeInTheDocument();

})

test('render div',()=>{
    render(
        <MemoryRouter>
        <BookdetailView id={2}/>
        </MemoryRouter>
        )
        const BookImage = screen.getByTestId("test")
        expect(BookImage).toBeInTheDocument();
})
test("first snapshot",()=>{
    const component = renderer.create(
        <MemoryRouter>
        <BookdetailView id={2}/>
        </MemoryRouter>
    )
    let tree=component.toJSON();

    expect(tree).toMatchSnapshot();
})

test('should render mapp data',async()=>{
    render(<MemoryRouter>
        <BookdetailView id={2}/>
        </MemoryRouter>)
    const card = await screen.findByTestId("book-2")
    expect(card).toBeInTheDocument();
})
test('should render mapp data2',async()=>{
    render(<MemoryRouter>
        <BookdetailView id={2}/>
        </MemoryRouter>)
    const card = await screen.findByTestId("bookbutton-2")
    expect(card).toBeInTheDocument();
})
test('should render mapp databutton2',async()=>{
    render(<MemoryRouter>
        <BookdetailView id={2}/>
        </MemoryRouter>)
    const card = await screen.findByTestId("bookbutton2-2")
    expect(card).toBeInTheDocument();
})
test('should render mapp databutton3',async()=>{
    render(<MemoryRouter>
        <BookdetailView id={2}/>
        </MemoryRouter>)
    const card = await screen.findByTestId("bookbutton3-2")
    expect(card).toBeInTheDocument();

})
test('should render mapp databutton3 fun',async()=>{
    render(<MemoryRouter>
        <BookdetailView id={2}/>
        </MemoryRouter>)
    const card = await screen.findByTestId("bookbutton-2")
    fireEvent.click(card)

})
test('should render mapp databutton2 fun',async()=>{
    render(<MemoryRouter>
        <BookdetailView id={2}/>
        </MemoryRouter>)
    const card = await screen.findByTestId("bookbutton2-2")
    fireEvent.click(card)

})
