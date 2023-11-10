import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import Modal from '../../components/ui/Modal/Modal';
import {addSubjects, dellSubjects } from '../../core/store/features/subjects/subjectsStore';
import './courses.scss';

const Courses = () => {
  const subjects = useSelector(state => state.subjects.data)
  const dispatch = useDispatch();
 
    const  [modalOpen,setModalActive, setModalOpen] = useState(false);
  const [subject,setSubjects] = useState ("");

    return (
      <>
  <h2  className= "courses">Курсы</h2>
  
  <div className={'wrapper_disciplines'}>
  <button className={'open_button'} onClick={() => {
                  setModalOpen (true);
                }}>Открыть дисциплины</button>
                   
                   {modalOpen && <Modal setOpenModal={setModalOpen}> 
  
      <h2 className= "disciplines">Дисциплины</h2>
      {subjects.map(subjects => <div className='subjects'>
      <span>{subjects.text}</span>
      <button className ="del" onClick={e => {dispatch(dellSubjects(subjects.id)); setSubjects("")}}>del</button>  
       </div>)}
<input value={subjects} onChange={e => setSubjects(e.target.value)} />

       <button className={"button_disciplines"} onclick={e => dispatch (addSubjects (subject)) }>add </button>
       
              <button className={'cancel'}onClick={() => {setModalActive (false);}}>Закрыть</button>
            
              </Modal> } 
              </div> 
      </>
              
      );
    
    }
  
export default Courses;