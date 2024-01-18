import {useEffect, useState} from "react";
import Picture from "../Picture/Picture.jsx";

export default function PictureOfTheDay({todayPic, setTodayPicture, date}) {
    const [isLoaded, setLoaded] = useState(true);


    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
            .then(res => res.json())
            .then((res) => {
                setLoaded(false);
                setTodayPicture(res.url);
            })
    }, [date, setTodayPicture])

    return (
        <>
            {isLoaded && <p>Loading ...</p>}
            {!isLoaded && <Picture picture={todayPic} />}
        </>
    )
}