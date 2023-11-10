import { Input, Modal, Space, Checkbox, Image } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import ModalWin from "../ModalWin/ModalWin";


const NewsWin = ({ isNewsWinOpen, setIsNewsWinOpen }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [titleImage, setTitleImage] = useState('');
    const [data, setData] = useState({});


    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };



    const handleNewsWinOk = (e) => {
        e.preventDefault();
        const dataNews = {
            title: title,
            titleImage: titleImage,
            forStudents: true,
            forTeachers: false,
            text: text,
            createdAt: new Date().toISOString()
        };
        setData(dataNews)
        console.log(dataNews)
    };

    const handleNewsWinCancel = () => {
        setIsNewsWinOpen(false);
    };
    return (
        <>
            {/* <Modal title="Title" open={isNewsWinOpen} onOk={handleNewsWinOk} onCancel={handleNewsWinCancel}>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}> */}
            <ModalWin setOpenModal={setIsNewsWinOpen}>
                <form onSubmit={handleNewsWinOk}>
                    <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="url" value={titleImage} src=" " placeholder="Image"  />
                     <Checkbox onChange={onChange}>forStudents</Checkbox>
                <Checkbox onChange={onChange}>forTeachers</Checkbox> 
                    <TextArea rows={4} placeholder="Текст" value={text} onChange={(e) => setText(e.target.value)} />
                    <button>Добавить</button>
                </form>
            </ModalWin>
            {/*      </Space>
            </Modal> */}
        </>
    );
};
export default NewsWin;