import {useCallback, useEffect, useRef, useState} from "react";
import PictureListItem from "../PictureListItem/PictureListItem.jsx";
import Input from "../Input/Input.jsx";
import classes from "./PictureList.module.css"

export default function PictureList() {
    const inputMinRef = useRef();
    const inputMaxRef = useRef();
    const [isLoadedList, setIsLoadedList] = useState(false)
    const [pictures, setPictures] = useState([])
    const [inputMin, setInputMin] = useState(new Date().toISOString().split('T')[0]);
    const [inputMax, setInputMax] = useState(new Date().toISOString().split('T')[0]);

    const fetchPictures = useCallback(async () => {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${inputMin}&end_date=${inputMax}`)
        const pictures = await response.json()
        setPictures(pictures);
    }, [inputMax, inputMin])

    useEffect(() => {
        fetchPictures()
    }, [fetchPictures])


    return (
        <section className={!isLoadedList ? classes.list : classes.column}>
            <div className={classes.list}>
                <p className={classes.text}>Вывести список с: </p>
                <Input input={inputMinRef} inputDate={inputMin} setInput={setInputMin}/>
                <p className={classes.text}>по: </p>
                <Input input={inputMaxRef} inputDate={inputMax} setInput={setInputMax}/>
                <button className={classes.button} onClick={(event) => {
                    event.preventDefault();
                    if (inputMinRef.current.value > inputMaxRef.current.value ||
                        inputMinRef.current.value > new Date().toISOString().split('T')[0] ||
                        inputMaxRef.current.value > new Date().toISOString().split('T')[0] ||
                        inputMinRef.current.value.split('-')[0] < 2015 ||
                        inputMaxRef.current.value.split('-')[0] < 2015
                    ) {
                        alert("Некорректный ввод даты!")
                    } else {
                        setIsLoadedList(true)
                        setInputMin(inputMinRef.current.value);
                        setInputMax(inputMaxRef.current.value);
                    }
                }
                }>Вывести
                </button>
            </div>
            <div>
                {isLoadedList && pictures.map((elem, index) =>
                    <PictureListItem
                        title={elem.title}
                        date={elem.date}
                        key={index}
                        pic={elem.url}
                    />
                )}
            </div>
        </section>
    )
}