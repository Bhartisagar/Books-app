import { render,screen } from "@testing-library/react";
import { Button } from "./Button";

test('render button',()=>{
    render(<Button></Button>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument();

})
