import {} from '@chakra-ui/react'
import {SelectCustomProps} from './components/selectInterfaces'


/**
 * Custom React component used to select one item from a list of options.
 */
export const Select = function<T>(props : SelectCustomProps<T>){

    const {children,searchable,name, defaultValue,style,...rest} = props
    console.log(children)
    return (
        <>
        {
            !searchable ?

            //this custom select needs styling...
            <div {...rest} style={{...style}}  className={
             props.className ? 
             'custom-select '+props.className:
             'custom-select'
        }> 
        <input type="hidden" name={ name }
        className='select-option-class'
         id='select-option-id'
        value={ defaultValue ? defaultValue :
         "coming: this will change base on the the onselect funcion" }/>

        {children}
        
            </div>
            :
            "cant perform searchable for now..."
        }
        </>
    )
}

