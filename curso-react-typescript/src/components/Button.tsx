import { FunctionComponent } from "react"

interface ButtonProps {
    theme: "Dark" | "Light";
    onClick?: ()=> void;
}


const Button:FunctionComponent<ButtonProps> = () =>{
    return (
        <button>
            oi
        </button>
    )
}

export default Button