
import {
    ReactNode,
    MouseEvent,
    ElementType,
    MouseEventHandler
    }
    from "react"
    

export interface CustomOptionProps <T> {

    children?:ReactNode,

    value?:string,
    
    onSelectOption ? : MouseEventHandler<T>,

    className?:string,

    id?:string,

    //WE CAN ADD icons to the option to make it nice.. sh
    icon?:ElementType

}