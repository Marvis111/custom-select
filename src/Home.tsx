import {
useState,
MouseEvent

} 

from 'react'



import {  Select,Option } from "./customSelect/index";
function Home(){

    const [hey,setHey] = useState('heyy' as string | null);
  
    return(
        <>
        <br/>
        <Select name='' className='' >
            <Option className='' onSelectOption={()=>{
                
            }}>Hello</Option>
        </Select>
        </>
    )
}
export default Home