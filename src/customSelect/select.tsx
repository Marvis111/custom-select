//import {} from '@chakra-ui/react'
import { ChangeEvent,ReactElement, ReactNode,useEffect,useState } from 'react'
import { selectWrapper } from './components/classes'
import { IconArrowHead } from './components/icons/arrowDown'
import { CustomOptionProps } from './components/optionInterface'
import {SelectCustomProps} from './components/selectInterfaces'


/** 
 * Custom React component used to select one item from a list of options.
 */
export const Select = function<T>(props : SelectCustomProps<T>){
    const {children,searchable,name,onChange,
        placeholder,id, defaultValue,theme,disabled,style,searchContainerStyle,...rest} = props
        const[isDisabled,setDisabled] = useState("");
        const [searchValue,setSearchValue] = useState("");
        const [mytheme,setTheme] = useState("");
        const filterCondition = (child:ReactElement,searchValue:string) =>{
           return child.props.children.toLowerCase().indexOf(searchValue) != -1
        }
        useEffect(()=>{
           // console.log(searchValue)
           // setDisabled(disabled?"disabled":"");
            switch (theme) {
                case "theme-2":
                    setTheme('theme2')
                    break;
                default:
                    setTheme('');
                    break;
            }
        },[isDisabled,mytheme,searchable,props,mytheme])

    return (
        <>
            {
                !searchable ?
                <>
                <div {...rest} className={
                `${selectWrapper} ${isDisabled} ${mytheme} ${props.className?props.className:""}`}
                style={{...style} }
                > 
        <input type="hidden" id={ 'select-field' } name={ name }
            value = {defaultValue && defaultValue}
        />
            <b><span className="value">{
                placeholder? placeholder : "Select ..."
            }</span> <IconArrowHead />  </b>
           <ul id='option-listXy323' style={{display:`${searchable && 'none'}`}}>{children}</ul>
            </div>
                </>
                :
                <>
                <div {...rest} className={
                `${selectWrapper} ${isDisabled} ${mytheme} ${props.className?props.className:""}`}
                style={{...style} }
                > 
                <div className='wrapper234fw3'>
                <input list="optionsa3432423633rsd4534s45" id={ 'select-field' } name={ name }  className={
                `${selectWrapper} ${isDisabled} ${mytheme} ${props.className?props.className:""}`}
                 placeholder={placeholder && placeholder} 
                onChange={(e)=>{
                    document.getElementById('option-listXy323').style.display = 'block' as string
                    setSearchValue(e.target.value)
                }}
                /><b><IconArrowHead /></b>
                </div>
                <ul id='option-listXy323'>
                      {
                     searchValue !="" &&
                        children.map(child=>{
                            return(
                                <>
                                {
                                    child.props.children.toLowerCase()
                                    .indexOf(searchValue.toLowerCase()) >= 0 &&
                                    child
                                }
                                </>
                            )
                        })
                      }
                      </ul>
                </div>
                </>
            }
        </>
    );
}
