import React, {useEffect, useState} from 'react';
import Title from "antd/lib/typography/Title";
import {Button, Space} from "antd";
import CardBase from "../../components/ui/CardBase";
import UsersService from "../../core/services/UsersService";
import CreateUsersModal from "../../containers/Modal/CreateUsersModal";
import {API_URL} from "../../core/http";

const Users = () => {
    const [Users, setUser] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        UsersService.getAllUsers()
            .then(r => setUser(r.data.data))
    }, [isModalOpen])

    return (
        <>
            <Space align={'start'} wrap={true} size={100}>
                <Title level={3}>Пользователи</Title>
                <Button type="primary" onClick={showModal}>
                Создать новость
                </Button>
            </Space>
            <Space align={'start'} wrap={true}>
                {
                    Users.map(n => <CardBase
                        key={n.id}
                        img={`${API_URL}/files/${n.titleImage.storageFileName}`}
                        title={n.title}
                        desc={n.text}
                    />)
                }
            </Space>
            <CreateUsersModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </>
    );
};

export default Users;