import {useRef} from "react";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";
import classes from "./SearchSection.module.css";

export default function SearchSection({inputDate, setInputDate}) {
    const input = useRef();

    return (
        <section className={classes.search}>
                <Input inputDate={inputDate} setInput={setInputDate} input={input}/>
                <Button input={input}/>
        </section>
    )
}