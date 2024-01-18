export default function Picture({date, picture}) {
    return (
        <div>
            <h1>{date}</h1>
            <img src={picture} alt="PictureOfTheDay of the Day"/>
        </div>
    )
}