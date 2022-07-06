import { render,screen } from "@testing-library/react";
import {Page} from './Page'

test('render text',()=>{
    render(<Page></Page>)
    const button = screen.getByRole('heading',{name:'Pages in Storybook'})
    expect(button).toBeInTheDocument();

})
test('render paragraph',()=>{
    render(<Page></Page>)
    const button = screen.getByTestId('para')
    expect(button).toBeInTheDocument();

})
