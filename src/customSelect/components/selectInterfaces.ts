import { 
    ReactNode,
    CSSProperties,
    ChangeEventHandler,
    ReactHTMLElement,
    ReactElement
} 
    from 'react'

export interface SelectCustomProps <T>  {
    
    id?:string,

    children : ReactElement[],

    disabled ? : boolean,

    searchable? : boolean,

    name?:string,

    className ? :string,

    style ?: CSSProperties,

    placeholder ? : string,

    defaultValue ? :string,

    value?:string,

    onChange?:ChangeEventHandler<T>,

    searchContainerStyle?:CSSProperties,
    theme?:'theme-2' | 'theme-1' | string


}

enum Theme{
    MON,TUE
}