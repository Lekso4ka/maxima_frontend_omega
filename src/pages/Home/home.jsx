import React, {useEffect, useState} from 'react';
import Title from "antd/lib/typography/Title";
import {Button, Space} from "antd";
import  {API_URL} from "../../core/http";
import HomeService from "../../core/services/Home Service";
import CreateHomeModal from "../../containers/Modal/CreateHomeModal";
import CardBase from "../../components/ui/CardBase";

const Home = () => {
    const [Home , setUser] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        HomeService.getAllHome ()
            .then(r => setUser(r.data.data))
    }, [isModalOpen])

    return (
        <>
            <Space align={'start'} wrap={true} size={100}>
                <Title level={3}>Главная</Title>
                <Button type="primary" onClick={showModal}>
                Главная
                </Button>
            </Space>
            <Space align={'start'} wrap={true}>
                {
                  Home.map(n => <CardBase
                        key={n.id}
                        img={`${API_URL}/files/${n.titleImage.storageFileName}`}
                        title={n.title}
                        desc={n.text}
                    />)
                }
            </Space>
            <CreateHomeModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </>
    );
};

export default Home ;