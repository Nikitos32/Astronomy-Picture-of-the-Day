import {useRef, useState} from "react";
import Picture from "../Picture/Picture.jsx";
import classes from "./PictureListItem.module.css"

export default function PictureListItem({date, title, pic}) {
    const paragraphWithDate = useRef();
    const [isShowPicture, setIsShowPicture] = useState(false)

    return (
        <div className={classes.listItem}>
            <p ref={paragraphWithDate} className={classes.date}>{date}</p>
            <p className={classes.title}>{title}</p>
            {isShowPicture && <Picture picture={pic}/>}
            <button className={classes.button} onClick={() => setIsShowPicture(!isShowPicture)}>Показать</button>
        </div>
    )
}