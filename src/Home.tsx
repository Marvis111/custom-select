

import {  Select,Option } from "./customSelect/index";

function Home(){
  
    return(
        <>
        <br/>
        <form action="" >
        <Select name='options' placeholder="Choose From Fav Sport" defaultValue="option1">
            <Option value='option1' >Option 1</Option>
            <Option value='option2'>Option 2</Option>
            <Option value='option3'>Option 3</Option>
        </Select>
        <input type={'text'} name="name"></input>
        <input type={'submit'} />
        </form>

        </>
    )
}
export default Home