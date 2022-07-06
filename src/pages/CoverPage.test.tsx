import { render,screen } from "@testing-library/react";
import CoverPage from './CoverPage'

it("should render image",()=>{
    render(<CoverPage/>)
    const imglogo=screen.getByRole("img")
    expect(imglogo).toBeInTheDocument();
})

it("should render button",()=>{
    render(<CoverPage/>)
    const imglogo=screen.getByRole("button")
    expect(imglogo).toBeInTheDocument();
})