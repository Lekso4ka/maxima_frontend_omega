import React, {useState} from 'react';
import Title from "antd/lib/typography/Title";
import {Button, Space} from "antd";
import NewsWin from "../../components/ui/NewsWin";
import $api from '../../core/http';
import { useEffect } from "react";

const AddNews = () => {
      const [isNewsWinOpen, setIsNewsWinOpen] = useState(false);
    const showNewsWinModal = () => {
        setIsNewsWinOpen (true);
    };
    const [news, setNews] = useState ([]);
    const [ns, setNs] = useState ("");

    useEffect (() => {
 $api.get("/news/{id}")
 .then(result => {
   console.log(result.data.data);
   setNews(result.data.data)
    })
}, [])

useEffect (() => {
    $api.delete("/news/{id}")
    .then(result => {
      console.log(result.data);
      setNews(result.data)
       })
    
      }, [])

      const newsHandler = async () => {
        const result = await $api.post("/news/{id}",{name: ns})
        .then(result =>{
        console.log(result)
        
        })
         
        console.log(result);
        setNews(prev => [...prev, result.data])
        setNs("")
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
        </>
    );
};

export default AddNews;