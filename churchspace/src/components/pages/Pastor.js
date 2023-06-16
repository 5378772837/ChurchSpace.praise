import React, { useEffect, useState } from 'react'
import '../../css/pages/SignIn.css'
import '../../css/reusables/positions.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../css/pages/admin.css'


function Pastor(props)  {

  console.log(props.user)

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
  })
  .catch((error) => {
    console.log(error);
  });
};


    const handleSubjectClick = (selectedSubject) => {

      navigator('/EditSubject', { state: { editSubject: selectedSubject } });
    };

    const handlePostClick = (selectedPost) => {

        navigator('/EditPost', { state: { editPost: selectedPost } });
    };

    const handleMessageClick = (selectedMessage) => {

        navigator('/EditMessage', { state: { editMessage: selectedMessage } });
    };

    const handleTopicClick = (selectedTopic) => {

        navigator('/EditTopic', { state: { editTopic: selectedTopic } });
    };

    const handleCommentClick = (selectedComment) => {

        navigator('/EditComment', { state: { editComment: selectedComment } });
    };

    const showSubjects = () => {
      if (subjects.length === 0) {
        return <div>Loading Subjects now, If this is here more than 5 seconds, something went wrong, try again...</div>; // Display a loading message or placeholder
      }
      console.log("subjects", subjects);
      return subjects.map((subjectInst) => {
        const { id, subject, creatorName, active} = subjectInst;
    
        return (
          <div className='subject-edit-box' key={id} onClick={() => handleSubjectClick(subjectInst)}>
            Click To Edit:
            <div className='flex-row center'>ID: {subjectInst.id}</div>
            <div className='flex-row center'>Subject: {subjectInst.subject}</div>
            <div className='flex-row center'>Creator Name: {subjectInst.creatorName}</div>
            <div className='flex-row center'>Active: {subjectInst.active}</div>
          </div>
        );
      });
    };

    const showComments = () => {
        if (comments.length === 0) {
          return <div>Loading Comments now, If this is here more than 5 seconds, something went wrong, try again...</div>; // Display a loading message or placeholder
        }
      
        return comments.map((commentInst) => {
          const { id, comment, creatorName, commentDate, postId, active} = commentInst;
      
          return (
            <div className='subject-edit-box' key={id} onClick={() => handleCommentClick(commentInst)}>
              Click To Edit:
              <div className='flex-row center'>ID: {commentInst.id}</div>
              <div className='flex-row center'>Comment: {commentInst.comment}</div>
              <div className='flex-row center'>Creator Name: {commentInst.creatorName}</div>
              <div className='flex-row center'>Post Id: {commentInst.postId}</div>
              <div className='flex-row center'>Active: {commentInst.active}</div>
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
            <div className='subject-edit-box' key={id} onClick={() => handleMessageClick(messageInst)}>
              Click To Edit:
              <div className='flex-row center'>ID: {messageInst.id}</div>
              <div className='flex-row center'>Subject: {messageInst.subject}</div>
              <div className='flex-row center'>Message: {messageInst.message}</div>
              <div className='flex-row center'>Message Date: {messageInst.messageDate}</div>
              <div className='flex-row center'>Sender Name: {messageInst.senderName}</div>
              <div className='flex-row center'>Recipient Name: {messageInst.recipientName}</div>
              <div className='flex-row center'>Active: {messageInst.isRead}</div>
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
            <div className='subject-edit-box' key={id} onClick={() => handlePostClick(postInst)}>
              Click To Edit:
              <div className='flex-row center'>ID: {postInst.id}</div>
              <div className='flex-row center'>Post: {postInst.post}</div>
              <div className='flex-row center'>Creator Name: {postInst.creatorName}</div>
              <div className='flex-row center'>Post Date: {postInst.postDate}</div>
              <div className='flex-row center'>Topic ID: {postInst.topicId}</div>
              <div className='flex-row center'>Active: {postInst.active}</div>
 
            </div>
          );
        });
      };

      const showTopics = () => {
        if (topics.length === 0) {
          return <div>Loading Topics now, If this is here more than 5 seconds, something went wrong, try again...</div>;
        }
      
        return topics.map((topicInst) =>{
          const { id, title, blog, creatorName, topicDate, subjectId, active} = topicInst
      
          return (
            <div className='subject-edit-box' key={id} onClick={() => handlePostClick(topicInst)}>
              Click To Edit:
              <div className='flex-row center'>ID: {topicInst.id}</div>
              <div className='flex-row center'>Title: {topicInst.title}</div>
              <div className='flex-row center'>Message: {topicInst.blog}</div>
              <div className='flex-row center'>Creator Name: {topicInst.creatorName}</div>
              <div className='flex-row center'>Topic Date: {topicInst.topicDate}</div>
              <div className='flex-row center'>Subject ID: {topicInst.subjectId}</div>
              <div className='flex-row center'>Active: {topicInst.active}</div>
 
            </div>
          );
        });
      };

    

    return (
            <div className= 'fill'>
            <div className='admin-sidebar justify-content-center'>
                    <h3>Hello {props.user.username}</h3>
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
            <div className = 'user-disp-col scroll'>
            {renderSubjects && showSubjects()}
            {renderComments && showComments()}
            {renderTopics && showTopics()}
            {renderPosts && showPosts()}
            {renderMessages && showMessages()}
                
                      </div>
            </div>         
 
  
   )
}

export default Pastor