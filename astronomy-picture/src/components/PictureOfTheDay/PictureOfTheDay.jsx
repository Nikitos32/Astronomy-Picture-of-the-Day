import {useEffect, useState} from "react";
import Picture from "../Picture/Picture.jsx";

export default function PictureOfTheDay() {
    const [isLoaded, setLoaded] = useState(true);
    const [todayPic, setTodayPicture] = useState('');

    const date = new Date().toISOString().split('T')

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date[0]}`)
            .then(res => res.json())
            .then((res) => {
                setLoaded(false);
                setTodayPicture(res.url);
            })
    }, [date])

    return (
        <>
            {isLoaded && <p>Loading ...</p>}
            {!isLoaded && <Picture date={date[0]} picture={todayPic} />}
        </>
    )
}