import {useCallback, useEffect} from "react";
import Picture from "../Picture/Picture.jsx";
import classes from "./PictureOfTheDay.module.css"

export default function PictureOfTheDay({pic, setPicture, date, isLoaded, setLoaded}) {
    
    const fetchPicture = useCallback(async () => {
        setLoaded(true)
        fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
            .then(res => res.json())
            .then((res) => {
                setLoaded(false);
                setPicture(res.url);
            })
    }, [date, setLoaded, setPicture])

    useEffect(() => {
       fetchPicture()
    }, [fetchPicture])

    return (
        <div className={classes.picture}>
            {isLoaded && <p>Loading ...</p>}
            {!isLoaded && <Picture picture={pic} />}
        </div>
    )
}