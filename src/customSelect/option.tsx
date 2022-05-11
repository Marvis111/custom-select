import {CustomOptionProps} from './components/optionInterface'

export const Option = function<T> (props: CustomOptionProps<T> ){

    const { children,...rest } = props
    return(
        <>
        <div {...rest } >
            { children }
        </div>
        </>
    )
}

