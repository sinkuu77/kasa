import "../styles/LogementContents.scss"


export default function LogementContents({ title, location, tags, host, rating}) {
    return (
        <div>
        <div>
            <h1>{title}</h1>
            <h2>{location}</h2>
            <ul>
                <li>{tags}</li>
            </ul>
        </div>
        <div>
            <div>
                <p>{host}</p>
                <img src={host} alt='The face of a host' />
            </div>
            {rating}
        </div>
        </div>
    )
}