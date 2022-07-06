import { render,screen } from "@testing-library/react";
import {Header} from './Header'

const Username={
    name:'Dave'
}
test('render button',()=>{
    render(<Header ></Header>)
    const button = screen.getByRole('heading',{name:'Acme'})
    expect(button).toBeInTheDocument();

})
test('render name',()=>{
    render(<Header user={Username}></Header>)
    const button = screen.getByTestId('span')
    expect(button).toBeInTheDocument();

})
const fun=jest.fn();
    const fun2=jest.fn();
    const fun3=jest.fn();
    test('render fun',()=>{
        render(<Header user={Username} onLogin={fun} onLogout={fun2} onCreateAccount={fun3}></Header>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    
    })