import { MouseEvent ,
} from 'react'
import {CustomOptionProps} from './components/optionInterface'


export const Option = function <T> (props: CustomOptionProps<T> ){

    const { children,value,...rest} = props
    return(
        <>
        <li {...rest } 
        className={ props.className ? 'custom-option '+props.className:'custom-option'}
        onClick={(e) =>{OnSelectOption(e)}}
        onMouseEnter={(e) =>{OnSelectOptionHover(e)}}
        >
            <input type={'hidden'} value={value} />
            { children }
        </li>
        </>
    )
}
const OnSelectOption = function (e : MouseEvent <HTMLLIElement,globalThis.MouseEvent> ){
    const selectField = document.getElementById('select-field');
  ///   const optionValue = e.currentTarget.firstElementChild?.getAttribute('value');
  const optionValue = e.currentTarget?.firstElementChild?.getAttribute('value')
     selectField?.setAttribute('value',optionValue as string)
     document.getElementById('option-listXy323').style.display = 'none' as string
}
const OnSelectOptionHover = function (e : MouseEvent <HTMLLIElement,globalThis.MouseEvent> ){
    const selectField = document.getElementById('select-field');
    const optionValue = e?.target?.firstElementChild?.getAttribute('value')
    document.onkeydown = function(event){
        if(event.code =='Enter'){
            selectField?.setAttribute('value',optionValue as string);
            document.querySelectorAll('.select-io ul li').forEach(elem =>{
                elem.classList.remove('active')
            });
            e.target?.classList.add('active');
            document.getElementById('option-listXy323').style.display = 'none' as string
            document.querySelector('.select-io b span').innerHTML = e.target?.innerText as string
            //
        }
    }
}
