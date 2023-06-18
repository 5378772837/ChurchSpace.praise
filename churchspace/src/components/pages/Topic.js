import React, { useEffect, useState } from 'react'
import '../../css/pages/SignIn.css'
import '../../css/reusables/positions.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../css/pages/pastor.css'


function Topic(props)  {
  const { Subject } = location.state;

  const [subjects, setSubjects]=useState([]);

  const [topics, setTopics]=useState([]);
  const [renderTopics, setRenderTopics]=useState(false);
  const [topicsSearch, setTopicsSearch]=useState([])


  const [posts, setPosts]=useState([]);
  const [renderPosts, setRenderPosts]=useState(false);
  const [postsSearch, setPostsSearch]=useState([])

  const [comments, setComments]=useState([]);
  const [renderComments, setRenderComments]=useState(false);
  const [commentsSearch, setCommentsSearch]=useState([])

  const navigator = useNavigate()

const handleSubjectClick = (event) => {
    axios.get("http://localhost:8080/Topic/User/")
setSubjectsSearch(event.target.value);
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
      axios.get("http://localhost:8080/Subject/User/findActive", {
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

    const showComments = () => {
        if (comments.length === 0) {
          return <div>Loading Comments now, If this is here more than 2 seconds, something went wrong, try again...</div>; // Display a loading message or placeholder
        }
      
        return comments.map((commentInst) => {
          const { id, comment, creatorName, commentDate, postId, active} = commentInst;
      
          return (
            <div className='subject-edit-box'>
            <div classname="flex-row fill">
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
            <div classname="flex-row fill">
              <div className=" info-col">
              <div className="flex-col fill">
              <div className='flex-row center'>ID: {postInst.id}</div>
              <div className='flex-row center'>Creator Name: {postInst.creatorName}</div>
              <div className='flex-row center'>Post Date: {postInst.postDate}</div>
              <div className='flex-row center'>Topic ID: {postInst.topicId}</div>
              <div className="flex-row">Active: <input name="active" type="checkbox" checked={active} onChange={(event) => postChangeHandler(event, postInst)} /></div>


              </div>
              </div>
              <div className="blog-col">
              <div className='flex-row center'>Post: {postInst.post}</div>
            </div>
            </div>
            </div>
          );
        });
      };

      const showTopics = () => {
        if (topics.length === 0) {
          return <div>Loading Topics now, If this is here more than 5 seconds, something went wrong, try again...</div>;
        }
      
    
      return (
        <div>
          {Topics.map((topicInst) => {          
            const { id, title, blog, creatorName, topicDate, subjectId, active} = topicInst
            return (
              <div className='subject-edit-box' key={id} onClick={() => handleTopicClick(topicInst)}>
                <div className="flex-row fill">
                  <div className="info-col">
                    <div className="flex-col fill">
                      <div className="flex-row"> ID: {topicInst.id}</div>
                      <div className="flex-row"> Date: {topicInst.date}</div>
                      <div className="flex-row">Creator Name: {topicInst.creatorName}</div>
                    </div>
                  </div>
                  <div className="blog-col">
                    <div className='flex-row'>
                    Title: {topicInst.title}
                    </div>
                    <div className = 'flex-row'>
                    Blog: {topicInst.blog}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
      }
      }
          export default Topic