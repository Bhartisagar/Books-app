import Banner from "./Banner";
import { render, screen } from "@testing-library/react";

test('should render heading1',async()=>{
    render (<Banner></Banner>);
    const BannerComponent = screen.getByRole("heading",{name:"Explore Books on"})
    expect(BannerComponent).toBeInTheDocument();
})
test('should render heading2',async()=>{
    render (<Banner></Banner>);
    const BannerComponent = screen.getByRole("heading",{name:"entrepreneurship"})
    expect(BannerComponent).toBeInTheDocument();
})
test('should render subtitilepart1',async()=>{
    render (<Banner></Banner>);
    const BannerComponent = screen.getByRole("heading",{name:"Everything you need to know about thriving on a"})
    expect(BannerComponent).toBeInTheDocument();
})
test('should render subtitilepart2',async()=>{
    render (<Banner></Banner>);
    const BannerComponent = screen.getByRole("heading",{name:"shoestring budget, making your first million, and hiring"})
    expect(BannerComponent).toBeInTheDocument();
})
test('should render subtitilepart3',async()=>{
    render (<Banner></Banner>);
    const BannerComponent = screen.getByRole("heading",{name:"right from the start."})
    expect(BannerComponent).toBeInTheDocument();
})
test('should render bannerImage',()=>{
    render (<Banner></Banner>);
    const BannerComponent = screen.getByRole("img")
    expect(BannerComponent).toBeInTheDocument();
})