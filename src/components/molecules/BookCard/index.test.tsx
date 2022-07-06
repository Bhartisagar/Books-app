import renderer from 'react-test-renderer';
import {  render, screen } from "@testing-library/react";
import Cards from ".";
import { fireEvent } from '@storybook/testing-library';


const bookData={
    "id": 1,
    "imgSrc": "card1.jpg",
    "imgAlt": "Bring Your Human to Work",
    "name": "Bring Your Human to Work",
    "author": "Erica Keswin",
    "readTime": "13-minute read",
    "readCount": "19.1k reads",
    "state": "CR",
    "category": "",
    "audio": true,
    "justAdded": false,
    "isTrending": false
}
const btnText="Finished";

test("first snapshot",()=>{
    const component = renderer.create(
        <Cards bookData={bookData} btnText={btnText} />
    )
    let tree=component.toJSON();

    expect(tree).toMatchSnapshot();
})

test('should render image',()=>{    
    render (<Cards bookData={bookData} btnText={btnText} />);
    const ImageDis = screen.getByRole("img")
    expect(ImageDis).toBeInTheDocument();
})

test('should render Book name',()=>{    
    render (<Cards bookData={bookData} btnText={btnText} />);
    const cardheading = screen.getByRole("heading",{name:"Bring Your Human to Work"})
    expect(cardheading).toBeInTheDocument();
})
test('should render Book author name',()=>{    
    render (<Cards bookData={bookData} btnText={btnText} />);
    const bookAuthor = screen.getByRole("heading",{name:"Erica Keswin"})
    expect(bookAuthor).toBeInTheDocument();
})
test('should render Book read time',()=>{    
    render (<Cards bookData={bookData} btnText={btnText} />);
    const bookAuthor = screen.getByRole("heading",{name:"13-minute read"})
    expect(bookAuthor).toBeInTheDocument();
})
test('should render Button',()=>{    
    render (<Cards bookData={bookData} btnText={btnText} />);
    const bookButton = screen.getByRole("button",{name:"Finished"})
    expect(bookButton).toBeInTheDocument();
})
test('should not render Button',()=>{    
    render (<Cards bookData={bookData} btnText="" />);
    const bookAuthor = screen.getByRole("heading",{name:"13-minute read"})
    expect(bookAuthor).toBeInTheDocument();
})

test('should render mapp data button',async()=>{
    render(<Cards bookData={bookData} btnText={btnText} />)
    const card1 = await screen.findByTestId("button-1")
    expect(card1).toBeInTheDocument();
})

const bookFunction = jest.fn();

test('should render mapp data',async()=>{
    render(<Cards bookData={bookData} btnText={btnText} />)
    const card2 = await screen.findByTestId("headings-1")
    expect(card2).toBeInTheDocument();
})
test('should render function',async()=>{
    render(<Cards bookData={bookData} btnText={btnText} bookFunction={bookFunction}/>)
    const card2 = await screen.findByTestId("headings-1")
    expect(card2).toBeInTheDocument();
})
   const fun = (bookData)=>{

   }
test('should render mapp data button fun',async()=>{
    render(<Cards bookData={bookData} btnText={btnText} bookFunction={fun}/>)
    const card1 = await screen.findByTestId("button-1")
    fireEvent.click(card1)
})
