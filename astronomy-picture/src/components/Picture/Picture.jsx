import {useContext} from "react";
import {DateContext} from "/src/App"

export default function Picture({picture}) {
    const dateToShow = useContext(DateContext)


    return (
        <div>
            <h1>Картинка {dateToShow} числа</h1>
            <img src={picture} alt="Picture"/>
        </div>
    )
}