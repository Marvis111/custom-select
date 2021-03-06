
import {
    ReactNode,
    MouseEvent,
    ElementType,
    }
    from "react"
    

export interface CustomOptionProps <T> {

    children?:ReactNode,

    value?:string,
    
    className?:string,

    id?:string,

    //WE CAN ADD icons to the option to make it nice.. sh
    icon?:ElementType,


}

export type SelectChildType = CustomOptionProps<Element>