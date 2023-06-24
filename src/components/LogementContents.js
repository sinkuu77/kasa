import "../styles/LogementContents.scss"


export default function LogementContents({id, title, location, rating, hostName, hostPic}) {
    const locationTxt = location.split("-")
    const hostTxt = hostName.split(" ")
    return (
        <div className='contents'>
        <div>
            <h1 className='contents__title'>{title}</h1>
            {<h2 className='contents__location'>{`${locationTxt[1]}, ${locationTxt[0]}`}</h2> }
            <ul>
                <li key={id}></li>
            </ul>
        </div>
        <div>
            <div className='contents__host'>
                {<p className='contents__host--name'>{hostTxt[0]}<br />{hostTxt[1]}</p>}
                <img className='contents__host--img' src={hostPic} alt='The face of a host' />
            </div>
            <p>{rating}</p>
        </div>
        </div>
    )
}