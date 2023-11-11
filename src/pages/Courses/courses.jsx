import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import ModalWin from '../../components/ui/ModalWin/ModalWin';
import { addSubjects, dellSubjects } from '../../core/store/features/subjects/subjectsStore';
import './courses.scss';

const Courses = () => {
  const subjects = useSelector(state => state.subjects.data)
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [subject, setSubject] = useState("");

  return (
    <>
      <h2 className="courses">Курсы</h2>

      <div className={'wrapper_disciplines'}>
        <button className={'open_button'} onClick={() => {
          setModalOpen(true);
        }}>Открыть дисциплины</button>

        {modalOpen && <ModalWin setOpenModal={setModalOpen}>

          <h2 className="disciplines">Дисциплины</h2>
          {subjects.map(subjects => <div className='subjects'>
            <span>{subjects.text}</span>
            <button className="del" onClick={e => { 
                dispatch(dellSubjects(subjects.id)); 
              }}
            >del</button>
          </div>)}
          <input value={subject} onChange={e => setSubject(e.target.value)} />

          <button 
            className={"button_disciplines"} 
            onClick={e => {
              dispatch(addSubjects(subject));
              setSubject("") 
            }}
          >add </button>

        </ModalWin>}
      </div>
    </>

  );

}

export default Courses;