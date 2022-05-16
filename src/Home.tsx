import './customSelect/components/styles/style.css'

import {  Select,Option } from "./customSelect/index";

function Home(){
  
    return(
        <>
        <form method='get'>
            <input type='text' name='name'  />
            <Select 
        placeholder='Favorite Sport'
       name='options'
       theme='theme-2'
        >
            <Option value='option1' >Option One</Option>
            <Option value='option2'>Option Two</Option>
            <Option value='option3'>Option Three</Option>
            <Option value='option4'>Option Four</Option>
            <Option value='option5'>Option FIVE</Option>
        </Select>
            <button type="submit">Submit</button>
        </form>
    
        
       

        </>
    )
}
export default Home