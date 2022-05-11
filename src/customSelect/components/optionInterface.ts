
import {
    ReactNode,
    MouseEvent
    }
    from "react"
    

export interface CustomOptionProps <T> {

    children?:ReactNode,

    value?:string,
    
    onSelectOption?:MouseEvent<T>,

    className?:string,

    id?:string,

}