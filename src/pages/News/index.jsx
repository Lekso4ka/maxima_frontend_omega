import React, {useState} from 'react';
import Title from "antd/lib/typography/Title";
import {Button, Space} from "antd";
import NewsWin from "../../components/ui/NewsWin";


const AddNews = () => {
      const [isNewsWinOpen, setIsNewsWinOpen] = useState(false);
    const showNewsWinModal = () => {
        setIsNewsWinOpen (true);
    };

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