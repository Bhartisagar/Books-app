import { render, screen } from "@testing-library/react";
import ImageDisplay from "./ImageDisplay";


it('should render image',()=>{
    render(<ImageDisplay path="card1.jpg" alt="bookcard" height={340} width={300}/>);
    const ImagedisplayElement = screen.getByRole("img")
    expect(ImagedisplayElement).toBeInTheDocument();
})

it('should render images',()=>{
    render(<ImageDisplay path="card1.jpg" alt="bookcard"/>);
    const ImagedisplayElement = screen.getByAltText("bookcard")
    expect(ImagedisplayElement).toBeInTheDocument();
})