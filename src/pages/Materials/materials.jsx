import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTags, dellTags } from "../../core/store/features/tags/tagSlice";
import { CloseOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import { Button, Space } from "antd";
import ModalTags from "../../containers/Modal/ModalTags";
import ModalWinf from "../../components/ui/ModalWin/ModalWin";
import ModalWin from '../../components/ui/ModalWin/ModalWin';




const Materials = () => {
    const tags = useSelector(state => state.tags.data);
    const dispatch = useDispatch();
    const [isModalTagsOpen, setIsModalTagsOpen] = useState(false);
    const [newTag, setNewTag] = useState("");


    const tagHandler = () => {
        if (newTag) {
            dispatch(addTags(newTag))
            setNewTag("")
            setIsModalTagsOpen(false);
        }
    }

    return (
        <>

            {/* {
        tags.map(el => <div className='tag'>
            <span>{el.tags}</span>
            <button onClick={e => dispatch(dellTags(el.tag))}>Удалить</button>
        </div>)}
        
        <input value={tag} onChange={e => setTag(e.target.value)}/>
        <button onClick={e => {dispatch(addTags(tag)); setTag("")}}> Добавить тэг</button>
    
 */}
            {isModalTagsOpen && <ModalWin setOpenModal={setIsModalTagsOpen}>
                <h4>Добавить новый тег</h4>
                <input type="text" value={newTag} onChange={e => setNewTag(e.target.value)} />
                <button onClick={tagHandler}>Добавить</button>
            </ModalWin>}
            <div className={'materials'}>
                <h1>Материалы</h1>
                <Space align={'start'} wrap={true} size={100}>
                    <Title level={3}>Теги</Title>
                    <Button type="primary" onClick={e => setIsModalTagsOpen(true)}>
                        Добавить тег
                    </Button>

                </Space>
                <ul>
                    <Space align={'start'} direction={"horizontal"} wrap={true}>
                        <div>{tags.map(tags => <div className="tags">
                            <span>{tags.text}</span>
                            <CloseOutlined onClick={e => dispatch(dellTags(tags.id))} />
                        </div>)
                        }</div>

                    </Space>
                </ul>
            </div>


        </>
    );
};

export default Materials;