import './CardNews.scss'

export default function CardNews({ url, data, title }) {
    return (
        <div className="CardNews1">
            <img className="CardNews_image" src={url} alt="" />
            <div className="CardNews2">
                <p className="CardNews_data">{data}</p>
                <h2 className="CardNews_title">{title}</h2>
            </div>
            <button className="CardNews_button">Читать далее</button>
        </div>
    );
}

