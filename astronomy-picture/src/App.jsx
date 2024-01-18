import './App.css'
import PictureOfTheDay from "./components/PictureOfTheDay/PictureOfTheDay.jsx";
import SearchSection from "./components/SearchSection/SearchSection.jsx";
import {createContext, useState} from "react";

export default function App() {
    const [todayPic, setTodayPicture] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const [inputDate, setInputDate] = useState(date);


    return (

        <>
            <DateContext.Provider value={date}>
                <PictureOfTheDay todayPic={todayPic} setTodayPicture={setTodayPicture} date={date}/>
            </DateContext.Provider>
            <SearchSection inputDate={inputDate} setInputDate={setInputDate} setDate={setDate}/>

        </>

    )
}

export const DateContext = createContext(null)