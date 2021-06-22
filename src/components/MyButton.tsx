import { ButtonHTMLAttributes } from 'react'
import "../styles/myButton.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function MyButton(props: ButtonProps) {
    return (
        <button className="my-button" {...props} />
    )
}