import {ButtonContext} from "/src/App"
import {useContext} from "react";
import classes from "./Button.module.css"
export default function Button({input}) {
    const buttonProps = useContext(ButtonContext)

    return (
        <button className={classes.button} onClick={(event) => {
            event.preventDefault();
            if (input.current.value > new Date().toISOString().split('T')[0] ||
                input.current.value.split('-')[0] < 2015
            ) {
                alert("Некорректный ввод даты!")
            }
            else {
                buttonProps.setDate(input.current.value)
            }
        }
        }>Показать</button>
    )
}