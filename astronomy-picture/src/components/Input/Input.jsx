import classes from "./Input.module.css"
export default function Input({input, setInput, inputDate}) {
    return (
        <input
            className={classes.input}
            ref={input}
            max={new Date().toISOString().split('T')[0]}
            min={"2015-01-01"} type="date"
            value={inputDate}
            onChange={(event) => {
                setInput(event.target.value)
            }
            }/>
    )
}