import FooterComp from ".";
import { render,screen } from "@testing-library/react";

test('should render footer logo',()=>{
    render(<FooterComp></FooterComp>)
    const FootIcon = screen.getByRole("img")
    expect(FootIcon).toBeInTheDocument();
})

test('should render Footer heading',()=>{    
    render (<FooterComp/>);
    const footerheading = screen.getByRole("heading",{name:"Big ideas in small packages"})
    expect(footerheading).toBeInTheDocument();
})
test('should render Footer subheading1',()=>{    
    render (<FooterComp/>);
    const footerheading = screen.getByRole("heading",{name:"Start learning now"})
    expect(footerheading).toBeInTheDocument();
})
test('should render Footer subheading2',()=>{    
    render (<FooterComp/>);
    const footerheading = screen.getByRole("heading",{name:"Editorial"})
    expect(footerheading).toBeInTheDocument();
})

test('should render Footer subheading12',()=>{    
    render (<FooterComp/>);
    const footerheading = screen.getByRole("heading",{name:"Company"})
    expect(footerheading).toBeInTheDocument();
})
test('should render Footer subheading',async()=>{    
    render (<FooterComp/>);
    const card = await screen.findByTestId("paragraph1-1")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading4',async()=>{    
    render (<FooterComp/>);
    const card = await screen.findByTestId("paragraph1-0")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading5',async()=>{    
    render (<FooterComp/>);
    const card = await screen.findByTestId("paragraph1-2")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading6',async()=>{    
    render (<FooterComp/>);
    const card = await screen.findByTestId("paragraph2-2")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading7',async()=>{    
    render (<FooterComp/>);    const card = await screen.findByTestId("paragraph2-0")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading8',async()=>{    
    render (<FooterComp/>);
    const card = await screen.findByTestId("paragraph2-1")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading18',async()=>{    
    render (<FooterComp/>);
    const card = await screen.findByTestId("paragraph2-3")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading9',async()=>{    
    render (<FooterComp/>);
    const card = await screen.findByTestId("paragraph3-0")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading10',async()=>{    
    render (<FooterComp/>);
    const card = await screen.findByTestId("paragraph3-1")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading11',async()=>{    
    render(<FooterComp/>);
    const card = await screen.findByTestId("paragraph3-2")
    expect(card).toBeInTheDocument();
})