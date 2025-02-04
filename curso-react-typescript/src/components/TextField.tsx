import { FunctionComponent, useRef } from "react"

interface TextFieldProps{
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const TextField:FunctionComponent<TextFieldProps> = ({onChange})=>{

    const inputRef = useRef<HTMLInputElement>(null)

    return(
        <div>
            <input ref={inputRef} type="text" onChange={onChange}/>
        </div>
    )
}

export default TextField