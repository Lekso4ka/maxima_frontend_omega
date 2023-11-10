import { Input, Modal, Space } from 'antd';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTags } from "../../core/store/features/tags/tagSlice";


const ModalTags = ({ isModalTagsOpen, setIsModalTagsOpen }) => {
    const [tag, setTag] = useState('')
    const dispatch = useDispatch();

    const handleOk = () => {
        dispatch(addTags(tag))
        setIsModalTagsOpen(false)
    };
    const handleCancel = () => {
        setIsModalTagsOpen(false);
    };
    return (
        <>
            <Modal title="Добавление тега" open={isModalTagsOpen} onOk={handleOk} onCancel={handleCancel}>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Input placeholder="Введите тег" value={tag} onChange={(e) => setTag(e.target.value)} />
                </Space>
            </Modal>
        </>
    );
};
export default ModalTags;