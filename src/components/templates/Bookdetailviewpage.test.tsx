import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Bookdetailviewpage from '.'
import renderer from 'react-test-renderer'

test("first snapshot",()=>{
    const component = renderer.create(
     <MemoryRouter><Bookdetailviewpage/></MemoryRouter>   
    )
    let tree=component.toJSON();

    expect(tree).toMatchSnapshot();
})

test('should render footer logo',()=>{
    render(<MemoryRouter><Bookdetailviewpage/></MemoryRouter>)
    const FootIcon = screen.getByAltText("blinkist")
    expect(FootIcon).toBeInTheDocument();
})

test('should render Footer heading',()=>{    
    render (<MemoryRouter><Bookdetailviewpage/></MemoryRouter>);
    const footerheading = screen.getByRole("heading",{name:"Big ideas in small packages"})
    expect(footerheading).toBeInTheDocument();
})
test('should render Footer subheading1',()=>{    
    render (<MemoryRouter><Bookdetailviewpage/></MemoryRouter>);
    const footerheading = screen.getByRole("heading",{name:"Start learning now"})
    expect(footerheading).toBeInTheDocument();
})
test('should render Footer subheading2',()=>{    
    render (<MemoryRouter><Bookdetailviewpage/></MemoryRouter>);
    const footerheading = screen.getByRole("heading",{name:"Editorial"})
    expect(footerheading).toBeInTheDocument();
})
test('should render Footer subheading3',async()=>{    
    render (<MemoryRouter><Bookdetailviewpage/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph1-1")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading4',async()=>{    
    render (<MemoryRouter><Bookdetailviewpage/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph1-0")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading5',async()=>{    
    render (<MemoryRouter><Bookdetailviewpage/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph1-2")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading6',async()=>{    
    render (<MemoryRouter><Bookdetailviewpage/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph2-2")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading7',async()=>{    
    render (<MemoryRouter><Bookdetailviewpage/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph2-0")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading8',async()=>{    
    render (<MemoryRouter><Bookdetailviewpage/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph2-1")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading18',async()=>{    
    render (<MemoryRouter><Bookdetailviewpage/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph2-3")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading9',async()=>{    
    render (<MemoryRouter><Bookdetailviewpage/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph3-0")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading10',async()=>{    
    render (<MemoryRouter><Bookdetailviewpage/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph3-1")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading11',async()=>{    
    render (<MemoryRouter><Bookdetailviewpage/></MemoryRouter>);
    const card = await screen.findByTestId("paragraph3-2")
    expect(card).toBeInTheDocument();
})
test('should render Footer subheading12',()=>{    
    render (<MemoryRouter><Bookdetailviewpage/></MemoryRouter>);
    const footerheading = screen.getByRole("heading",{name:"Company"})
    expect(footerheading).toBeInTheDocument();
})

test('should render seacrh icon',()=>{
    render(<MemoryRouter><Bookdetailviewpage/></MemoryRouter>)
    const searchIcon= screen.getByAltText("search")
    expect(searchIcon).toBeInTheDocument();
})
test('should render logo icon',()=>{
    render(<MemoryRouter><Bookdetailviewpage/></MemoryRouter>)
    const searchIcon= screen.getByAltText("logo")
    expect(searchIcon).toBeInTheDocument();
})
test('should render downlist icon',()=>{
    render(<MemoryRouter><Bookdetailviewpage/></MemoryRouter>)
    const searchIcon= screen.getByAltText("downlist")
    expect(searchIcon).toBeInTheDocument();
})
test('should render downlist1 icon',()=>{
    render(<MemoryRouter><Bookdetailviewpage/></MemoryRouter>)
    const searchIcon= screen.getByAltText("downlist1")
    expect(searchIcon).toBeInTheDocument();
})
test('should render Explore text',()=>{
    render(<MemoryRouter><Bookdetailviewpage/></MemoryRouter>)
    const searchIcon= screen.getByText('Explore')
    expect(searchIcon).toBeInTheDocument();
})

test('should render mapp data',async()=>{
    render(<MemoryRouter>
       <Bookdetailviewpage/>
        </MemoryRouter>)
    const card = await screen.findByTestId("headings-1")
    expect(card).toBeInTheDocument();
})
test('should render mapp',async()=>{
    render(<MemoryRouter>
       <Bookdetailviewpage/>
        </MemoryRouter>)
    const card = await screen.findByTestId("current-1")
    expect(card).toBeInTheDocument();
})


