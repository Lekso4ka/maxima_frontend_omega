import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTags, dellTags } from "../../core/store/features/tags/tagSlice";
import { CloseOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import { Button, Space } from "antd";
import { ModalTags } from "../../containers/Modal/ModalTags";




const Materials = () => {
    const tags = useSelector(state => state.tags.data);
    const dispatch = useDispatch();
    const [isModalTagsOpen, setIsModalTagsOpen] = useState(false);


    return (
        <>
            <h2>Материалы</h2>

            {/* {
        tags.map(el => <div className='tag'>
            <span>{el.tags}</span>
            <button onClick={e => dispatch(dellTags(el.tag))}>Удалить</button>
        </div>)}
        
        <input value={tag} onChange={e => setTag(e.target.value)}/>
        <button onClick={e => {dispatch(addTags(tag)); setTag("")}}> Добавить тэг</button>
    
 */}
            <ModalTags isModalTagsOpen={isModalTagsOpen} setIsModalTagsOpen={setIsModalTagsOpen} />
            <div className={'materials'}>
                <h1>Материалы</h1>
                <Space align={'start'} wrap={true} size={100}>
                    <Title level={3}>Теги</Title>
                    <Button type="primary" onClick={e => { dispatch(addTags(tags.id)) }}>
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