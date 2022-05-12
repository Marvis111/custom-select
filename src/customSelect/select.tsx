//import {} from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import { selectWrapper } from './components/classes'
import {SelectCustomProps} from './components/selectInterfaces'


/** 
 * Custom React component used to select one item from a list of options.
 */
export const Select = function<T>(props : SelectCustomProps<T>){

    const {children,searchable,name,onChange,
        placeholder, defaultValue,style,searchContainerStyle,...rest} = props

    return (
        <>
        {
            !searchable ?
            //this custom select needs styling...
            <div {...rest} style={{...style,display:'flex'}}  className={

             props.className ? 

             `${selectWrapper} `+props.className
             :
             selectWrapper
        }> 
        <input type="hidden" id='select-field' name={ name }
            value = {defaultValue? defaultValue : undefined}
         
        />
            <div className='select-options-wrapper'>
                 {
                 /** all the provided options goes in here
                  * 
                  * this div has is what displays the provided options
                  * 
                  * so this needs to be styled  just like a select option dropdown
               */
                    //generate a div if placeholder is specified
                    placeholder?
                    <div id='custom-option-placeholder'><span>{placeholder}</span></div>
                    :""
               }
                {children}
            </div>

            <div className='select-dropdown-icon'>
                {/** Style this dropdown menu icon.. */}
                <svg viewBox="0 0 24 24"  width='20px' height='20px'>
                <path
                fill="currentColor"
                d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                />
                </svg>
            </div>
            </div>
            :
            <>
    <div {...rest} style={{...style,display:'flex'}}  className={
                props.className ? 
                `${selectWrapper} `+props.className
                :
                selectWrapper
                }>
        <div className='select-options-wrapper'>
            <input type={'text'} placeholder={placeholder} style={{
                width:'max-content',
                height:"35px",
                outline:"vissible",
                border:"1px solid grey",
                ...searchContainerStyle
            }} 
            id='searchable'
            />
            {children}
        </div>
        <div className='select-dropdown-icon'>
                {/** Style this dropdown menu icon.. */}
                <svg viewBox="0 0 24 24"  width='20px' height='20px'>
                <path
                fill="currentColor"
                d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                />
                </svg>
        </div>
    </div>
            </>
        }
        </>
    )
}
//subjected to styling
const IconBaseStyle = {

    position: "absolute",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    top: "50%",
    transform: "translateY(-50%)",
}