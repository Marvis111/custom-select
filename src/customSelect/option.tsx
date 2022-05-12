import { MouseEvent ,
} from 'react'
import {CustomOptionProps} from './components/optionInterface'


export const Option = function <T> (props: CustomOptionProps<T> ){

    const { children,value,...rest} = props
    return(
        <>
        <div {...rest } 
        className={ props.className ? 'custom-option '+props.className:'custom-option'}
        onClick={(e) =>{OnSelectOption(e)}}
        onMouseEnter={(e) =>{OnSelectOptionHover(e)}}
        >
            <input type={'hidden'} value={value} />
            { children }
        </div>
        </>
    )
}
const OnSelectOption = function (e : MouseEvent <HTMLDivElement,globalThis.MouseEvent> ){
    const selectField = document.getElementById('select-field');
     const optionValue = e.currentTarget.firstElementChild?.getAttribute('value');
     selectField?.setAttribute('value',optionValue as string)
}

const OnSelectOptionHover = function (e : MouseEvent <HTMLDivElement,globalThis.MouseEvent> ){
    
    document.onkeydown = function(event){
        if(event.code =='Enter'){
            //select the option..

            OnSelectOption(e);

        }
    }
}