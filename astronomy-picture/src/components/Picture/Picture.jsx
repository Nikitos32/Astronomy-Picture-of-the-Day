import classes from "./Picture.module.css"

export default function Picture({picture}) {
    return (
        <div>
            <img className={classes.pic} src={picture} alt="Picture"/>
        </div>
    )
}