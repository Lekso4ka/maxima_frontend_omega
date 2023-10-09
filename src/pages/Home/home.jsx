import React from 'react';
import { news } from "../../assets/data/data";
import CardNews from "../../components/ui/CardNews/CardNews";

const Home = () => {
    return (
        <>
            <h2>Главная</h2>
            {news.map(myNew => <CardNews
                title={myNew.title}
                data={myNew.data}
                url={myNew.url}
            />)}
        </>
    );
};

export default Home;