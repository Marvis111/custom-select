import {
useState,
MouseEvent

} 

from 'react'



import {  Select } from "./customSelect/index";
function Home(){

    const [hey,setHey] = useState('heyy' as string | null);
  
    return(
        <>
        {hey}
        <br/>
        <Select>
            <option value={'heyy'}>HEYY</option>
            <option value={'h2'}>HEYY</option>
        </Select>
        </>
    )
}
export default Home