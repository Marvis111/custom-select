import {} from '@chakra-ui/react'
import {SelectCustomProps} from './components/selectInterfaces'


/**
 * Custom React component used to select one item from a list of options.
 */
export const Select = function<T>(props : SelectCustomProps<T>){

    const {children,searchable,style,...rest} = props
    console.log(children)
    return (
        <>
        {
            !searchable ?
            <div {...rest} style={{...style}}  className={
             props.className ? 
             'custom-select '+props.className:
             'custom-select'
        }> 
        {children}
        
        </div>
            :
            "cant perform searchable for now..."
        }
        </>
    )
}

