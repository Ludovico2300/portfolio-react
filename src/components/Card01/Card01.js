import "./_card01.scss"

export default function Card(props) {
  const { source, tag,  date, title, content } = props;

  return (

    <div className="card-content">
      <img
        className={`img-content`}
        src={source}
        alt=""
      />

      <div className="info-card-content-container">
        <div className="mark-date-content">
          <h3 className="mark">{tag}</h3>
          <div>{date}</div>
        </div>

        <div className="title-card-content">
          <h3>{title}</h3>
        </div>
        <div className="text-card-content">
          <h4>
            {content}
          </h4>
        </div>
      </div>
    </div>
  )
}
