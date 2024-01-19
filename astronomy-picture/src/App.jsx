import classes from './App.module.css'
import PictureOfTheDay from "./components/PictureOfTheDay/PictureOfTheDay.jsx";
import SearchSection from "./components/SearchSection/SearchSection.jsx";
import {createContext, useState} from "react";
import PictureList from "./components/PictureList/PictureList.jsx";

export default function App() {
    const [pic, setPicture] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const [inputDate, setInputDate] = useState(date);
    const [isLoaded, setLoaded] = useState(true);
    return (
        <div className={classes.wrapper}>
            <div className={classes.potd}>
                <PictureOfTheDay
                    pic={pic}
                    setPicture={setPicture}
                    date={date} setLoaded={setLoaded}
                    isLoaded={isLoaded}/>
                <ButtonContext.Provider value={{setLoaded, setDate}}>
                    <SearchSection inputDate={inputDate} setInputDate={setInputDate}/>
                </ButtonContext.Provider>
            </div>
            <ButtonContext.Provider value={{setLoaded, setDate}}>
                <PictureList/>
            </ButtonContext.Provider>
        </div>
    )
}
export const ButtonContext = createContext(null)