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

  if (topics.length === 0) {
    return (
      <div className = "flex-col fill">
      <div className = "subject-header justify-content-center">
        <h1>SUBJECT: {subject.subject}</h1>
      </div>
      <div className="topic-header center">
        <a className='large navy'>Create New Topic:</a>
        <textarea className='sidebar-input-container2' 
          style={{ whiteSpace: 'normal' }}  
          name='topicTitle' type='text' 
          onChange={changeHandler}
          placeholder="Enter New Topic Title Here" >
        </textarea>
        <textarea className='sidebar-input-container3' 
          style={{ whiteSpace: 'normal' }}  
          name='topicBlog' type='text' 
          onChange={changeHandler}
          placeholder='Enter the new Topic Blog Here'></textarea>
          <button className="button2" onClick={saveTopic}>ADD NEW TOPIC</button>
      </div>
      <div>Loading Topics now. You could be the first to post a topic on this Subject..</div>
      </div>
    );
  }

    
      return (
        <div className = "flex-col fill">
          <div className = "flex-row subject-header justify-content-center">
            <h1>SUBJECT: {subject.subject}</h1>
          </div>
          <div className="topic-header center">
            <a className='large navy'>Create New Topic:</a>
            <textarea className='sidebar-input-container2' 
              style={{ whiteSpace: 'normal' }}  
              name='topicTitle' type='text' 
              onChange={changeHandler}
              placeholder="Enter New Topic Title Here" >
            </textarea>
            <textarea className='sidebar-input-container3' 
              style={{ whiteSpace: 'normal' }}  
              name='topicBlog' type='text' 
              onChange={changeHandler}
              placeholder='Enter the new Topic Blog Here'></textarea>
              <button className="button2" onClick={saveTopic}>ADD NEW TOPIC</button>
          </div>
          <div className='topic-body'>
          {topics.map((topicInst) => {          
            const { id, topicTitle, topicBlog, creatorName, topicDate, subjectId, active} = topicInst
            return (
              
              <div className='topic-box' key={id} onClick={() => handleTopicClick(topicInst)}>
                

                    <div className="topic-info-col">
                      <div className="flex-row large"> ID: {topicInst.id}</div>
                      <div className="flex-row"> Date: {topicInst.topicDate}</div>
                      <div className="flex-row">Creator Name: {topicInst.creatorName}</div>
                    </div>
                  
                  <div className="topic-blog-col">
                    <div className='flex-row large'>
                    Title: {topicInst.topicTitle}
                    </div>
                    <div className = 'flex-row medium flex-wrap'>
                    Blog: {topicInst.topicBlog}
                    </div>
                    </div>
                </div>
                
            );
          })}
        </div>
        </div>
      );
      }
      
          export default Subject