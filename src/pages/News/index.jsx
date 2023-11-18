import React, {useState} from 'react';
import Title from "antd/lib/typography/Title";
import { useSelector, useDispatch } from 'react-redux';
import {Button, Space} from "antd";
import NewsWin from "../../components/ui/NewsWin";
import $api from '../../core/http';
import { useEffect } from "react";
import {getNews, dellNews} from "../../core/store/features/news/newsSlice";

const AddNews = () => {
    const [isNewsWinOpen, setIsNewsWinOpen] = useState(false);
    const showNewsWinModal = () => {
        setIsNewsWinOpen (true);
    };
    const news = useSelector(state => state.news.data);
    const dispatch = useDispatch();
    // const [news, setNews] = useState ([]);
    const [ns, setNs] = useState ("");

useEffect (() => {
 $api.get("/news")
 .then(result => {
   console.log(result.data.data);
   dispatch(getNews(result.data.data));
//    setNews(result.data.data)
    })
}, [])

// useEffect (() => {
//     $api.delete("/news/{id}")
//     .then(result => {
//       console.log(result.data);
//       setNews(result.data)
//        })
    
//     }, [])

      const newsHandler = async () => {
        const result = await $api.post("/news/{id}",{name: ns})
        .then(result =>{
        console.log(result)
        
        })
         
        console.log(result);
        // setNews(prev => [...prev, result.data])
        setNs("")
        }
        
        const delHandler = (id) => {
            $api.delete(`/news/${id}`)
                .then(result => {
                    if (result.status === 200) {
                        console.log(result.data);
                        // setNews(result.data)
                        dispatch(dellNews(id));
                    }
                })
            // console.log(id);
        }


   return (
        <>
            <Space align={'start'} wrap={true} size={100}>
                <Title level={3}>Новости</Title>
                <Button type="primary" onClick={showNewsWinModal}>
                    Добавить новость
                </Button>
            </Space>
                  <NewsWin isNewsWinOpen={isNewsWinOpen} setIsNewsWinOpen={setIsNewsWinOpen}/>

            {news?.length > 0 && <table>
                <tr>
                    <th>id</th>
                    <th>Заголовок</th>
                    <th>Дата создания</th>
                    <th>Новость</th>
                    <th>Управление</th>
                </tr>
                {news.map(el => <tr>
                    <td>{el.id}</td>
                    <td>{el.title}</td>
                    <td>{el.createdAt}</td>
                    <td>{el.text}</td>
                    <td><button onClick={e => delHandler(el.id)}>del</button></td>
                </tr>)}
            </table>}
        </>
    );
};

export default AddNews;