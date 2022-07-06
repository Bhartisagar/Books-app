import App from "./App";

import renderer from 'react-test-renderer'

test("first snapshot",()=>{
    const component = renderer.create(
        
        <App></App>
       
    )
    let tree=component.toJSON();

    expect(tree).toMatchSnapshot();
})