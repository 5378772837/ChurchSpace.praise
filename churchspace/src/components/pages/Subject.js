import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../css/pages/subject.css'


function Subject(props)  {
  const location = useLocation();
  const { subject } = location.state;

  const [topics, setTopics]=useState([]);
  const [renderTopics, setRenderTopics]=useState(false);
  const [topicsSearch, setTopicsSearch]=useState([])

  const navigator = useNavigate()

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


        if (topics.length === 0) {
          return <div>Loading Topics now, If this is here more than 5 seconds, something went wrong, try again...</div>;
        }
      
    
      return (
        <div className = "flex-col fill">
          <div className = "flex-row subject-header">
            <h1>SUBJECT: {subject.subject}</h1>
          </div>

          {topics.map((topicInst) => {          
            const { id, topicTitle, topicBlog, creatorName, topicDate, subjectId, active} = topicInst
            return (
              <div className='subject-body'>
              <div className='topic-box' key={id} onClick={() => handleTopicClick(topicInst)}>
                

                    <div className="sub-info-col">
                      <div className="flex-row large"> ID: {topicInst.id}</div>
                      <div className="flex-row"> Date: {topicInst.topicDate}</div>
                      <div className="flex-row">Creator Name: {topicInst.creatorName}</div>
                    </div>
                  
                  <div className="sub-blog-col">
                    <div className='flex-row large'>
                    Title: {topicInst.topicTitle}
                    </div>
                    <div className = 'flex-row medium flex-wrap'>
                    Blog: {topicInst.topicBlog}
                    </div>
                    </div>
                </div>
                </div>
            );
          })}
        </div>
      );
      }
      
          export default Subject