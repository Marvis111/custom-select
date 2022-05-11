import { 
    ReactNode,
    CSSProperties,
    MouseEventHandler,
    ChangeEventHandler,} 
    from 'react'

export interface SelectCustomProps<T>  {
    children ? : ReactNode,
    disabled ? : boolean,
    searchable? : boolean,
    name?:string,
    className ? :string,
    style ?: CSSProperties,
    placeholder ? : string
    defaultValue ? :string,
    value?:string,
    onChangeField?: MouseEventHandler,
    // ChangeEventHandler,
}
