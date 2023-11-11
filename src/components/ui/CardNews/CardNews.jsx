import './CardNews.scss'

export default function CardNews({ url, data, title }) {
    return (
        <div className="cardNews1">
            <img className="cardNews_image" src={url} alt="" />
            <div className="cardNews2">
                <p className="cardNews_data">{data}</p>
                <h2 className="cardNews_title">{title}</h2>
            </div>
            <button className="cardNews_button">Читать далее</button>
        </div>
    );
}

/* export default function CardNews({ myNew }) {
    return (
        <div className="CardNews1">
            <img className="CardNews_image" src={myNew.url} alt="" />
            <div className="CardNews2">
                <p className="CardNews_data">{myNew.date}</p>
                <h2 className="CardNews_title">{myNew.title}</h2>
            </div>
            <button className="CardNews_button">Читать далее</button>
        </div>
    );
} */




