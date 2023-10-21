import { Input, Modal, Space, Checkbox, Image } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const NewsWin = ({ isNewsWinOpen, setIsNewsWinOpen }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');



    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const dataNews = {
        title: "ПРОШЛА КОНФЕРЕНЦИЯ MAXIMA SCHOOL1",
        titleImage: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        forStudents: true,
        forTeachers: false,
        text: "На конференции компания MAXIMA SCHOOL продемонстрировала 11 экспериментальных инструментов и функций. Это новые творческие возможности использования новых технологий генеративного ИИ и 3D",
        createdAt: "2023-10-21"
    };

    const handleNewsWinOk = () => {
        console.log(dataNews)
    };

    const handleNewsWinCancel = () => {
        setIsNewsWinOpen(false);
    };
    return (
        <>
            <Modal title="Title" open={isNewsWinOpen} onOk={handleNewsWinOk} onCancel={handleNewsWinCancel}>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <Image width={300} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                    <Checkbox onChange={onChange}>forStudents</Checkbox>
                    <Checkbox onChange={onChange}>forTeachers</Checkbox>
                    <TextArea rows={4} placeholder="Текст" value={text} onChange={(e) => setText(e.target.value)} />
                </Space>
            </Modal>
        </>
    );
};
export default NewsWin;