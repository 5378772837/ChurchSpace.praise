import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../css/pages/subject.css'


function Subject(props)  {

  const location = useLocation();
  const { subject } = location.state;
  const [newTopic, setNewTopic] = useState({id:"",topicTitle:"",topicBlog:"",subjectId:subject.id,active:true});
  const [topics, setTopics]=useState([]);
  const [renderTopics, setRenderTopics]=useState(false);
  const [topicsSearch, setTopicsSearch]=useState([])

  const navigator = useNavigate()

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const tempTopic = { ...newTopic};
    tempTopic[name] = value;
    setNewTopic(tempTopic)
    }


  const handleTopicClick = (topicInst) => {
    navigator('/Topic', { state: { topic: topicInst } });

  };


useEffect(() => {
  console.log("Subject")
  console.log(subject)
    if (props.user && props.user.token) {
      axios.get(`http://localhost:8080/Topic/User/findActiveBySubjectId/${subject.id}`, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
        .then((response) => {
          console.log("response data", response.data);
          if (Array.isArray(response.data)) {
            setTopics(response.data);
          } else {
            setTopics([response.data]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.user]);

  const saveTopic = () => {
   
    const updatedTopic = { ...newTopic };
    updatedTopic.creatorName = props.user.name;
    updatedTopic.active = true;
    updatedTopic.subjectId = subject.id;

    console.log(updatedTopic);

    axios
      .post('http://localhost:8080/Topic/User/addTopic', updatedTopic, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setTopics(response.data);})
      .catch((error) => {
        console.error(error); // Log and handle any errors
      });
  };


  const renderSubjects = () =>{
    if (topics.length === 0) {
      return(
      <div className = "flex-col three-quarter-width full-height">
      <div className = "flex-row subject-header">
        <h1>SUBJECT: {subject.subject}</h1>
      </div>
        <div className='flex-row full-width center flex-wrap'>Be the first to post a topic on this subject!</div>
      </div>)
    }else{
      return(
      <div className = "flex-col three-quarter-width full-height">
        <div className = "flex-row subject-header">
          <h1>SUBJECT: {subject.subject}</h1>
        </div>
        <div className='flex-row full-width center flex-wrap'>
        {topics.map((topicInst) => {          
          const { id, topicTitle, topicBlog, creatorName, topicDate, subjectId, active} = topicInst
          return (
            
            <div className='topic-box' key={id} onClick={() => handleTopicClick(topicInst)}>
                    <div className='flex-row small bg-navy'>ID:&nbsp;{topicInst.id}&nbsp; Date:&nbsp;{topicInst.topicDate}</div>
                    <div className='flex-row small bg-navy'>Author:&nbsp; {topicInst.creatorName}</div>
                    <div className = 'flex-row large flex-wrap'> {topicInst.topicTitle} </div>
                    <div className = 'flex-row medium flex-wrap'>{topicInst.topicBlog} </div>
              </div>
              
          );
        })}
        </div>
      </div>
      )
    }

  }
    return (
      <div className = "flex-col fill">
      <div className='topic-body'>
        <div className = 'flex-col quarter-width full-height top'>
          <div className = "flex-row subject-header">
            <h1>Create A New Topic</h1>
          </div>
          <div className='flex-row full-width center'>
            <textarea className='input-container-2' 
              style={{ whiteSpace: 'normal' }}  
              name='topicTitle' type='text' 
              onChange={changeHandler}
              placeholder="Enter New Topic Title Here" >
            </textarea>
          </div>
          <div className='flex-row full-width center'>
            <textarea className='input-container-3' 
              style={{ whiteSpace: 'normal' }}  
              name='topicBlog' type='text' 
              onChange={changeHandler}
              placeholder='Enter the new Topic Blog Here'>
            </textarea>
          </div>
          <div className='flex-row full-width center'>
            <button className="button2" onClick={saveTopic}>ADD NEW TOPIC</button>
          </div>
        </div>
        {renderSubjects()}
        </div> 
        </div> 
    );
 }
      
          export default Subject