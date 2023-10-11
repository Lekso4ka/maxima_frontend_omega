import './CardNews.scss'

export default function CardNews({ myNew }) {
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
}