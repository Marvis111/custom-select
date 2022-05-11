

import {  Select,Option } from "./customSelect/index";

function Home(){
  
    return(
        <>
        <br/>
        <Select name='options'>
            <Option value='option1'>Option 1</Option>
            <Option value='option2'>Option 2</Option>
            <Option value='option3'>Option 3</Option>
        </Select>


        </>
    )
}
export default Home