import React, {useEffect, useState} from 'react';
import Title from "antd/lib/typography/Title";
import {Button, Space} from "antd";
import CardBase from "../../components/ui/CardBase";
import CoursesService from "../../core/services/NewsService";
import CreateCoursesModal from "../../containers/Modal/CreateCoursesModal";
import {API_URL} from "../../core/http";



const Courses = () => {
    const [Courses, setUser] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    useEffect(() => {
        CoursesService.getAllCourses()
            .then(r => setUser(r.data.data))
    }, [isModalOpen])

    return (
        <>
            <Space align={'start'} wrap={true} size={100}>
                <Title level={3}>Курсы</Title>
                <Button type="primary" onClick={showModal}>
                Создать Курсы
                </Button>
            </Space>
            <Space align={'start'} wrap={true}>
                {
                    Courses.map(n => <CardBase
                        key={n.id}
                        img={`${API_URL}/files/${n.titleImage.storageFileName}`}
                        title={n.title}
                        desc={n.text}
                    />)
                }
            </Space>
            <CreateCoursesModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </>
    );
};

export default Courses;