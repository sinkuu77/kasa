import '../styles/LogementContents.scss'
import starActive from '../assets/star-active 1.png'
import starInactive from '../assets/star-inactive 1.png'

export default function LogementContents({
  id,
  title,
  location,
  tags,
  rating,
  hostName,
  hostPic,
}) {
  const locationTxt = location ? location.split('-') : []
  const hostTxt = hostName ? hostName.split(' ') : []
  const ratingToNumber = rating ? Number(rating) : 0
  return (
    <div className="contents">
      <div className="contents__container">
        <h1 className="contents__container--title">{title}</h1>
        <h2 className="contents__container--location">{`${locationTxt[1]}, ${locationTxt[0]}`}</h2>
        <ul className="contents__container--tag">
          {tags
            ? tags.map((tag) => (
                <li className="contents__tag--list" key={`${tag}-${id}`}>
                  {tag}
                </li>
              ))
            : ''}
        </ul>
      </div>
      <div>
        <div className="contents__rating">
          <div className="contents__host">
            {
              <p className="contents__host--name">
                {hostTxt[0]}
                <br />
                {hostTxt[1]}
              </p>
            }
            <img
              className="contents__host--img"
              src={hostPic}
              alt="The face of a host"
            />
          </div>
          <div className="contents__rating--star">
            {rating
              ? [...Array(ratingToNumber)].map((star, index) => (
                  <img
                    key={`${index}-${star}`}
                    src={starActive}
                    alt="active star"
                  />
                ))
              : null}
            {rating
              ? [...Array(5 - ratingToNumber)].map((star, index) => (
                  <img
                    key={`${index}-${star}`}
                    src={starInactive}
                    alt="inactive star"
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}
