import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Entrepreneurship from'.'

import renderer from 'react-test-renderer'

test("first snapshot",()=>{
    const component = renderer.create(
     <MemoryRouter><Entrepreneurship/></MemoryRouter>   
    )
    let tree=component.toJSON();

    expect(tree).toMatchSnapshot();
})

test('should render footer logo',()=>{
    render(<MemoryRouter><Entrepreneurship/></MemoryRouter>)
    const FootIcon = screen.getByAltText("blinkist")
    expect(FootIcon).toBeInTheDocument();
})

test('should render Footer heading',()=>{    
    render (<MemoryRouter><Entrepreneurship/></MemoryRouter>);
    const footerheading = screen.getByRole("heading",{name:"Big ideas in small packages"})
    expect(footerheading).toBeInTheDocument();
})
test('should render Footer subheading1',()=>{    
    render (<MemoryRouter><Entrepreneurship/></MemoryRouter>);
    const footerheading = screen.getByRole("heading",{name:"Start learning now"})
    expect(footerheading).toBeInTheDocument();
})
test('should render Footer subheading2',()=>{    
    render (<MemoryRouter><Entrepreneurship/></MemoryRouter>);
    const footerheading = screen.getByRole("heading",{name:"Editorial"})
    expect(footerheading).toBeInTheDocument();
})
test('should render Footer subheading',async()=>{    
    render (<MemoryRouter><Entrepreneurship/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph1-1")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading4',async()=>{    
    render (<MemoryRouter><Entrepreneurship/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph1-0")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading5',async()=>{    
    render (<MemoryRouter><Entrepreneurship/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph1-2")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading6',async()=>{    
    render (<MemoryRouter><Entrepreneurship/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph2-2")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading7',async()=>{    
    render (<MemoryRouter><Entrepreneurship/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph2-0")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading8',async()=>{    
    render (<MemoryRouter><Entrepreneurship/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph2-1")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading18',async()=>{    
    render (<MemoryRouter><Entrepreneurship/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph2-3")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading9',async()=>{    
    render (<MemoryRouter><Entrepreneurship/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph3-0")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading10',async()=>{    
    render (<MemoryRouter><Entrepreneurship/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph3-1")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading11',async()=>{    
    render (<MemoryRouter><Entrepreneurship/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph3-2")
    expect(card).toBeInTheDocument();
})



test('should render Footer subheading20',()=>{    
    render (<MemoryRouter><Entrepreneurship/></MemoryRouter>);
    const footerheading = screen.getByRole("heading",{name:"Company"})
    expect(footerheading).toBeInTheDocument();
})