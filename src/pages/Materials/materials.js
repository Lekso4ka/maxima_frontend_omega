import React, {useEffect, useState} from 'react';
import Title from "antd/lib/typography/Title";
import {Button, Space} from "antd";
import CardBase from "../../components/ui/CardBase";
import MaterialsService from "../../core/services/MaterialsService";
import CreateMaterialsModal from "../../containers/Modal/CreateMaterialssModal";
import {API_URL} from "../../core/http";

const Materials = () => {
    const [Materials, setUser] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        MaterialsService.getAllMaterials()
            .then(r => setUser(r.data.data))
    }, [isModalOpen])

    return (
        <>
            <Space align={'start'} wrap={true} size={100}>
                <Title level={3}></Title>
                <Button type="primary" onClick={showModal}>
                Создать новость
                </Button>
            </Space>
            <Space align={'start'} wrap={true}>
                {
                    Materials.map(n => <CardBase
                        key={n.id}
                        img={`${API_URL}/files/${n.titleImage.storageFileName}`}
                        title={n.title}
                        desc={n.text}
                    />)
                }
            </Space>
            <CreateMaterialsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </>
    );
};

export default Materials;