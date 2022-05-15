import './customSelect/components/styles/style.css'

import {  Select,Option } from "./customSelect/index";

function Home(){
  
    return(
        <>
    
        <Select name='options' onChange={(e) =>{
            console.log(e)
        }}
        placeholder='Favourite Sport'
        defaultValue='Hello'
        theme='theme-1'
        searchable
        >
            <Option value='option1'  >Option One</Option>
            <Option value='option2'>Option Two</Option>
            <Option value='option3'>Option Three</Option>
            <Option value='option4'>Option Four</Option>
            <Option value='option5'>Option FHIVE</Option>
        </Select>
       

        </>
    )
}
export default Home