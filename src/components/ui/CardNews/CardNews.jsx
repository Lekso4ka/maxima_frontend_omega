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

