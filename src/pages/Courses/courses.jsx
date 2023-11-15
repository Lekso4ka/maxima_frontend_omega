import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import ModalWin from '../../components/ui/ModalWin/ModalWin';
import { addSubjects, dellSubjects } from '../../core/store/features/subjects/subjectsStore';
import './courses.scss';
import $api from '../../core/http'  



const Courses = () => {
  const subjects = useSelector(state => state.subjects.data)
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [subject, setSubject] = useState("");
  

  const [tags, setTags] = useState ([]);
  const [tg, setTg] = useState ("");

   useEffect (() => {
$api.get("/disciplines")
.then(result => {
  console.log(result.data.data);
  setTags(result.data.data)
   })

  }, [])
  useEffect (() => {
    $api.delete("/disciplines")
    .then(result => {
      console.log(result.data);
      setTags(result.data)
       })
    
      }, [])
    
  const tgHandler = async () => {
const result = await $api.post("/disciplines",{name:tg})
//.then(result =>{
console.log(result)

//})
 
console.log(result);
setTags(prev => [...prev, result.data])
setTg("")
}

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
<div style={{
padding:"20px",
borderRadius:"10px",
boxShadow:"0 0 5px #0004",
marginTop: "20px",
display:"flex",
gap:"20px",
flexWrap: "wrap"
}}>
{tags.map(tg =><span key={tg.id}>{tg.name}</span>)}
<div style={{flex: 1,width:"100%"}}>
<input
 type='text'
  value={tg}
   onChange={e => setTg(e.target.value)}
   />
<button onClick={tgHandler}>Добавить в БД</button>
<div>
<button className="delete"  onClick={e => { 
                dispatch(setTg(tg.id)); 
              }}
            >delete
  <div class="cart_delete"onClick={e => { 
                dispatch(setTg(tg.id)); 
              }} >0</div>
  </button>
  
          </div>
  </div>
           
</div>



    </>

  );

}

export default Courses;