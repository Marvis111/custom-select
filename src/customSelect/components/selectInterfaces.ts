import { 
    ReactNode,
    CSSProperties,
} 
    from 'react'

export interface SelectCustomProps <T>  {
    
    id?:string,

    children ? : ReactNode,

    disabled ? : boolean,

    searchable? : boolean,

    name?:string,

    className ? :string,

    style ?: CSSProperties,

    placeholder ? : string,

    defaultValue ? :string,

    value?:string,


}
