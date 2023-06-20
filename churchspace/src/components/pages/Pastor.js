import React, { useEffect, useState } from 'react'


import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../css/pages/pastor.css'


function Pastor(props)  {

  console.log(props.user)

  const [newSubject, setNewSubject]=useState({subject:""});

  const [subjects, setSubjects]=useState([]);
  const [renderSubjects, setRenderSubjects]=useState(false);
  const [subjectsSearch, setSubjectsSearch]=useState([]);

  const [messages, setMessages]=useState([]);
  const [renderMessages, setRenderMessages]=useState(false);
  const [messagesSearch, setMessagesSearch]=useState([]);

  const [posts, setPosts]=useState([]);
  const [renderPosts, setRenderPosts]=useState(false);
  const [postsSearch, setPostsSearch]=useState([])

  const [comments, setComments]=useState([]);
  const [renderComments, setRenderComments]=useState(false);
  const [commentsSearch, setCommentsSearch]=useState([])

  const [topics, setTopics]=useState([]);
  const [renderTopics, setRenderTopics]=useState(false);
  const [topicsSearch, setTopicsSearch]=useState([])

  const navigator = useNavigate()

const handleSubjectSearchChange = (event) => {
setSubjectsSearch(event.target.value);
};
const handleMessagesSearchChange = (event) => {
setMessagesSearch(event.target.value);
};
const handlePostsSearchChange = (event) => {
setPostsSearch(event.target.value);
};
const handleTopicsSearchChange = (event) => {
setTopicsSearch(event.target.value);
};
const handleCommentsSearchChange = (event) => {
setCommentsSearch(event.target.value);
};
const handleNewSubjectChange = (event) => {
  setNewSubject({ subject: event.target.value });
};


useEffect(() => {
    if (props.user && props.user.token) {
      axios.get("http://localhost:8080/Subject/Pastor/findActive", {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
        .then((response) => {
          console.log("response data", response.data);
          if (Array.isArray(response.data)) {
            setSubjects(response.data);
          } else {
            setSubjects([response.data]);
          }
          setRenderSubjects(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.user]);


  const saveSubject = (e) => {
    e.preventDefault();
    const updatedSubject = { ...newSubject };
    updatedSubject.creatorName = props.user.name;
    updatedSubject.active = true;

    console.log(updatedSubject);

    axios
      .post('http://localhost:8080/Subject/Pastor/addSubject', updatedSubject, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then((response) => {
        console.log(response.data); // Check the response data
        // Perform any necessary updates based on the response
      })
      .catch((error) => {
        console.error(error); // Log and handle any errors
      });
  };

  const subjectChangeHandler = (event, subjectInst) => {
    console.log(subjectInst);
    const checked = event.target.checked;
    const updatedSubject = {
      ...subjectInst,
      active: checked,
    };
  
    axios
      .post('http://localhost:8080/Subject/Pastor/updateSubject', updatedSubject, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then((response) => {
        console.log(response.data); // Check the response data
        // Perform any necessary updates based on the response
      })
      .catch((error) => {
        console.error(error); // Log and handle any errors
      });
  };




  const commentChangeHandler = (event, commentInst) => {
    console.log(commentInst);
    const checked = event.target.checked;
    const updatedComment = {
      ...commentInst,
      active: checked,
    };
  
    axios
      .post('http://localhost:8080/Comment/Pastor/updateComment', updatedComment, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then((response) => {
        console.log(response.data); // Check the response data
        // Perform any necessary updates based on the response
      })
      .catch((error) => {
        console.error(error); // Log and handle any errors
      });
  };

  const postChangeHandler = (event, postInst) => {

    const checked = event.target.checked;
    const updatedPost= {
      ...postInst,
      active: checked,
    };
  
    axios
      .post('http://localhost:8080/Post/Pastor/updatePost', updatedPost, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then((response) => {
        console.log(response.data); // Check the response data
        // Perform any necessary updates based on the response
      })
      .catch((error) => {
        console.error(error); // Log and handle any errors
      });
  };


  const topicChangeHandler = (event, topicInst) => {

    const checked = event.target.checked;
    const updatedTopic= {
      ...topicInst,
      active: checked,
    };
  
    axios
      .post('http://localhost:8080/Topic/Pastor/updateTopic', updatedTopic, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then((response) => {
        console.log(response.data); // Check the response data
        // Perform any necessary updates based on the response
      })
      .catch((error) => {
        console.error(error); // Log and handle any errors
      });
  };

  const messageChangeHandler = (event, messageInst) => {

    const checked = event.target.checked;
    const updatedMessage= {
      ...messageInst,
      active: checked,
    };
  
    axios
      .post('http://localhost:8080/Message/Pastor/updateMessage', updatedMessage, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then((response) => {
        console.log(response.data); // Check the response data
        // Perform any necessary updates based on the response
      })
      .catch((error) => {
        console.error(error); // Log and handle any errors
      });
  };




  const findSubjects = (event) => {
    setRenderMessages(false)
    setMessages([])
    setRenderPosts(false)
    setPosts([])
    setRenderTopics(false)
    setTopics([])
    setRenderComments(false)
    setComments([])
  event.preventDefault();
    
  axios.get(`http://localhost:8080/Subject/Pastor/findSubject/${subjectsSearch}`, {
  headers: {
    Authorization: `Bearer ${props.user.token}`,
  },
})
  .then((response) => {
    console.log("response data", response.data);
    setSubjects(response.data); // Make sure response.data is an array
    setRenderSubjects(true);
  })
  .catch((error) => {
    console.log(error);
  });
};

const findTopics = (event) => {
  setRenderPosts(false)
  setPosts([])
  setRenderSubjects(false)
  setSubjects([])
  setRenderMessages(false)
  setMessages([])
  setRenderComments(false)
  setComments([])
event.preventDefault();
  
axios.get(`http://localhost:8080/Topic/Pastor/findTopic/${topicsSearch}`, {
headers: {
  Authorization: `Bearer ${props.user.token}`,
},
})
.then((response) => {
  console.log("response data", response.data);
  setTopics(response.data); // Make sure response.data is an array
  setRenderTopics(true)
})
.catch((error) => {
  console.log(error);
});
};


const findPosts = (event) => {
    setRenderMessages(false)
    setMessages([])
    setRenderSubjects(false)
    setSubjects([])
    setRenderTopics(false)
    setTopics([])
    setRenderComments(false)
    setComments([])
  event.preventDefault();
    
  axios.get(`http://localhost:8080/Post/Pastor/findPost/${postsSearch}`, {
  headers: {
    Authorization: `Bearer ${props.user.token}`,
  },
})
  .then((response) => {
    console.log("response data", response.data);
    setPosts(response.data); // Make sure response.data is an array
    setRenderPosts(true)
  })
  .catch((error) => {
    console.log(error);
  });
};

const findComments = (event) => {
  setRenderPosts(false)
  setPosts([])
  setRenderSubjects(false)
  setSubjects([])
  setRenderMessages(false)
  setMessages([])
  setRenderTopics(false)
  setTopics([])
event.preventDefault();
  
axios.get(`http://localhost:8080/Comment/Pastor/findComment/${commentsSearch}`, {
headers: {
  Authorization: `Bearer ${props.user.token}`,
},
})
.then((response) => {
  console.log("response data", response.data);
  setComments(response.data); // Make sure response.data is an array
  setRenderComments(true);
})
.catch((error) => {
  console.log(error);
});
};


const findMessages = (event) => {
    setRenderPosts(false)
    setPosts([])
    setRenderSubjects(false)
    setSubjects([])
    setRenderTopics(false)
    setTopics([])
    setRenderComments(false)
    setComments([])
  event.preventDefault();
    
  axios.get(`http://localhost:8080/Message/Pastor/findMessage/${messagesSearch}`, {
  headers: {
    Authorization: `Bearer ${props.user.token}`,
  },
})
  .then((response) => {
    console.log("response data", response.data);
    setMessages(response.data); // Make sure response.data is an array
    setRenderMessages(true);
  })
  .catch((error) => {
    console.log(error);
  });
};



    const showSubjects = () => {
      if (subjects.length === 0) {
        return <div>Loading Subjects now...</div>; // Display a loading message or placeholder
      }
      return subjects.map((subjectInst) => {
        const { id, subject, creatorName, active} = subjectInst;
    
        return (
          
          // <div className='subject-edit-box' key={id} onClick={() => handleSubjectClick(subjectInst)}>
          <div className='subject-edit-box'>
           
              <div className="info-col">
              <div className="flex-col fill">
                <div className="flex-row large"> ID: {subjectInst.id}</div>
                <div className=" flex-row">Creator Name: {subjectInst.creatorName}</div>
                <div className="flex-row">Active: <input name="active" type="checkbox" checked={active} onChange={(event) => subjectChangeHandler(event, subjectInst)} /></div>

              </div>
              </div>
              <div className="blog-col">
              <div className='flex-row large'>Subject: </div>
              <div className='flex-row large'>{subjectInst.subject}</div>
            </div>
           
          </div>
        );
      });
    };

    const showTopics = () => {
      if (topics.length === 0) {
        return <div>Loading Topics now, If this is here more than 5 seconds, something went wrong, try again...</div>;
      }
    
      return topics.map((topicInst) =>{
        const { id, topicTitle, topicBlog, creatorName, topicDate, subjectId, active} = topicInst
    
        return (
          <div className='subject-edit-box'>
  
            <div className=" info-col">
            <div className="flex-col fill">
            <div className='flex-row large'>ID: {topicInst.id}</div>
            <div className='flex-row'>Creator Name: {topicInst.creatorName}</div>
            <div className='flex-row'>Topic Date: {topicInst.topicDate}</div>
            <div className='flex-row'>Subject ID: {topicInst.subjectId}</div>
            <div className="flex-row">Active: <input name="active" type="checkbox" checked={active} onChange={(event) => topicChangeHandler(event, topicInst)} /></div>


            </div>
            </div>
            <div className="blog-col">
            <div className='flex-row large'>Title: {topicInst.topicTitle}</div>
            <div className='flex-row'>Message: {topicInst.topicBlog}</div>
          </div>
         
          </div>
        );
      });
    };

    const showPosts = () => {
      if (posts.length === 0) {
        return <div>Loading Posts now, If this is here more than 5 seconds, something went wrong, try again...</div>;
      }
    
      return posts.map((postInst) =>{
        const { id, post, creatorName, postDate, topicId, active} = postInst
    
        return (
          <div className='subject-edit-box'>
   
            <div className=" info-col">
            <div className="flex-col fill">
            <div className='flex-row large'>ID: {postInst.id}</div>
            <div className='flex-row'>Creator Name: {postInst.creatorName}</div>
            <div className='flex-row'>Post Date: {postInst.postDate}</div>
            <div className='flex-row'>Topic ID: {postInst.topicId}</div>
            <div className="flex-row">Active: <input name="active" type="checkbox" checked={active} onChange={(event) => postChangeHandler(event, postInst)} /></div>


            </div>
            </div>
            <div className="blog-col">
            <div className='flex-row'>Post: {postInst.post}</div>
          </div>
          </div>
        );
      });
    };

    const showComments = () => {
        if (comments.length === 0) {
          return <div>Loading Comments now...</div>; // Display a loading message or placeholder
        }
      
        return comments.map((commentInst) => {
          const { id, comment, creatorName, commentDate, postId, active} = commentInst;
      
          return (
            <div className='subject-edit-box'>

              <div className=" info-col">
              <div className="flex-col fill">
              <div className='flex-row center'>ID: {commentInst.id}</div>
              <div className='flex-row center'>Post Id: {commentInst.postId}</div>
              <div className='flex-row center'>Post Date: {commentInst.postDate}</div>
              <div className='flex-row center'>Creator Name: {commentInst.creatorName}</div>
              <div className="flex-row">Active: <input name="active" type="checkbox" checked={active} onChange={(event) => commentChangeHandler(event, commentInst)} /></div>

              
              </div>
              </div>
              <div className="blog-col">
              <div className='flex-row center'>Comment: {commentInst.comment}</div>
              </div>

            </div>
          );
        });
      };

      const showMessages = () => {
        if (messages.length === 0) {
          return <div>Loading Messages now, If this is here more than 5 seconds, something went wrong, try again...</div>;
        }
      
        return messages.map((messageInst) =>{
          const { id, subject, message, messageDate, senderName, recipientName, isRead} = messageInst;
      
          return (
            <div className='subject-edit-box'>

              <div className=" info-col">
              <div className="flex-col fill">
              <div className='flex-row center'>ID: {messageInst.id}</div>
              <div className='flex-row center'>Message Date: {messageInst.messageDate}</div>
              <div className='flex-row center'>Sender Name: {messageInst.senderName}</div>
              <div className='flex-row center'>Recipient Name: {messageInst.recipientName}</div>
              <div className="flex-row">Active: <input name="active" type="checkbox" checked={isRead} onChange={(event) => messageChangeHandler(event, messageInst)} /></div>


              </div>
              </div>
              <div className="blog-col">
              <div className='flex-row center'>Subject: {messageInst.subject}</div>
              <div className='flex-row center'>Message: {messageInst.message}</div>
            </div>
            </div>
          );
        });
      };
 





    

    return (
            <div className= 'fill'>
            <div className='pastor-sidebar justify-content-center'>
                    <h3>Hello {props.user.name}</h3>
                    <div className="flex-row">
                    <a className="large">Search For Subjects</a>
                    </div>
                    <div className="flex-row">
                    <input className='sidebar-input-container2'  name='subject' type='subject' onChange={handleSubjectSearchChange} required></input>
                    </div>
                    <div className="flex-row">
                    <button className="button2" onClick={findSubjects}>FIND SUBJECT BY KEYWORD</button>
                    </div>
                    <div className="flex-row ">
                    <a className="large">Search For Topics</a>
                    </div>
                    <div className="flex-row ">
                    <input className='sidebar-input-container2'  name='blog' type='blog' onChange={handleTopicsSearchChange} required></input>
                    </div>
                    <div className="flex-row ">
                    <button className="button2" onClick={findTopics}>FIND TOPIC BY KEYWORD</button>
                    </div>
                    <div className="flex-row ">
                    <a className="large">Search For Posts</a>
                    </div>
                    <div className="flex-row ">
                    <input className='sidebar-input-container2'  name='post' type='post' onChange={handlePostsSearchChange} required></input>
                    </div>
                    <div className="flex-row ">
                    <button className="button2" onClick={findPosts}>FIND POST BY KEYWORD</button>
                    </div>
                    <div className="flex-row ">
                    <a className="large">Search For Comments</a>
                    </div>
                    <div className="flex-row ">
                    <input className='sidebar-input-container2'  name='comment' type='comment' onChange={handleCommentsSearchChange} required></input>
                    </div>
                    <div className="flex-row ">
                    <button className="button2" onClick={findComments}>FIND COMMENT BY KEYWORD</button>
                    </div>
                    <div className="flex-row ">
                    <a className="large">Search For Messages</a>
                    </div>
                    <div className="flex-row ">
                    <input className='sidebar-input-container2' name='message' type='text' onChange={handleMessagesSearchChange} required></input>
                    </div>
                    <div className="flex-row ">
                    <button className="button2" onClick={findMessages}>FIND MESSAGE BY KEYWORD</button>
                    </div>
                    


            </div>
              <div className='flex-col-past'>
                <div className="pastor-sub-header center">
                  <a className='large'>Create New Subject:</a>
                <textarea className='sidebar-input-container3' style={{ whiteSpace: 'normal' }}  name='subject' type='text' onChange={handleNewSubjectChange}></textarea>
                <button className="button2" onClick={saveSubject}>ADD NEW SUBJECT</button>
                </div>
                <div className='pastor-sub-body'>
              {renderSubjects && showSubjects()}
              {renderComments && showComments()}
              {renderTopics && showTopics()}
              {renderPosts && showPosts()}
              {renderMessages && showMessages()}
              </div>
              </div>
              </div>
                   
 
  
   )
}


export default Pastor