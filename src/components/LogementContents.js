import "../styles/LogementContents.scss"


export default function LogementContents({id, title, location, rating, hostName, hostPic}) {
    return (
        <div className='contents'>
        <div>
            <h1 className='contents__title'>{title}</h1>
            <h2 className='contents__location'>{location}</h2>
            <ul>
                <li key={id}></li>
            </ul>
        </div>
        <div>
            <div>
                <p>{hostName}</p>
                <img src={hostPic} alt='The face of a host' />
            </div>
            <p>{rating}</p>
        </div>
        </div>
    )
}