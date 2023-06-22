import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../css/pages/topic.css'


function Topic (props)  {
  const location = useLocation();
  const { topic } = location.state;
  const [thisTopic,setThisTopic] = useState(topic)
  const [newPost, setNewPost] = useState({id:"",post:"",topicID:topic.id,active:true});
  const [posts, setPosts]= useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [comments, setComments]=useState([]);
  const [newComment, setNewComment]=useState({id:"",comment:"",postID:'',creatorName:props.user.name})
  const [renderComments, setRenderComments]=useState(false);


  const navigator = useNavigate()

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const tempPost = { ...newPost};
    tempPost[name] = value;
    setNewPost(tempPost)
    }

    const commentChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      const tempComment = { ...newComment};
      tempComment[name] = value;
      setNewComment(tempComment)
      }


      const handlePostClick = (event, postInst) => {
        event.stopPropagation();
        setSelectedPostId(postInst.id);
        showComments(postInst);
      };


useEffect(() => {
    if (props.user && props.user.token) {
      axios.get(`http://localhost:8080/Post/User/findActiveByTopicId/${thisTopic.id}`, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
        .then((response) => {
          console.log("response data", response.data);
          if (Array.isArray(response.data)) {
            setPosts(response.data);
          } else {
            setPosts([response.data]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.user]);

  const savePost = (e) => {
    e.preventDefault();
    const updatedPost = { ...newPost };
    updatedPost.creatorName = props.user.name;
    updatedPost.active = true;
    updatedPost.topicID = thisTopic.id;

    console.log(updatedPost);

    axios
      .post('http://localhost:8080/Post/User/addPost', updatedPost, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);})
      .catch((error) => {
        console.error(error); // Log and handle any errors
      });
  };

  const saveComment = (postInst) => {
  
    const updatedComment = { ...newComment };
    updatedComment.creatorName = props.user.name;
    updatedComment.active = true;
    updatedComment.postId = postInst.id;

    axios
      .post('http://localhost:8080/Comment/User/addComment', updatedComment, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setComments(response.data);})
      .catch((error) => {
        console.error(error); // Log and handle any errors
      });
  };

  const showComments = (postInst) => {
    axios
      .get(`http://localhost:8080/Comment/User/findActiveByPostId/${postInst.id}`, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      })
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  
    if (comments.length === 0) {
      return <div>Loading Comments now. You could be the first to comment..</div>;
    }
  
    return comments.map((commentInst) => {
      const { id, comment, creatorName, commentDate, postId, active } = commentInst;
  
      return (
        <div className='flex-row' key={id}>
          <div className='.comment-blog-col'>
            <div className='flex-row fill'>ID: {commentInst.id}</div>
            <div className='flex-row fill'>NAME: {commentInst.creatorName}</div>
          </div>
          <div className='comment-info-col'>
            <div className='flex-row'>Comment: {commentInst.comment}</div>
          </div>
        </div>
      );
    });
  };


      return (
        <div className="flex-col fill">
          <div className="flex-row topic-header2 justify-content-center">
            <h1>Topic: {thisTopic.topicTitle} {thisTopic.topicBlog}</h1>
          </div>
          <div className="post-header center">
            <a className="large navy">Create New Post:</a>
            <textarea className="sidebar-input-container3" style={{ whiteSpace: "normal" }}
              name="post" type="text" onChange={changeHandler} placeholder="Enter the new post Here"></textarea>
            <button className="button2" onClick={savePost}>
              ADD NEW POST
            </button>
          </div>
          <div className="post-body">
            {posts.map((postInst) => {
              const { id, post, creatorName, postDate, topicID, active } = postInst;
              return (
                <div className="post-box" key={id} onClick={(event) => handlePostClick(event, postInst)}>
                  <div className="post-flex-col">
                    <div className="flex-row">
                      <div className="top-info-col">
                        <div className="flex-row large"> ID: {postInst.id}</div>
                        <div className="flex-row"> Date: {postInst.postDate}</div>
                        <div className="flex-row">
                          Creator Name: {postInst.creatorName}
                        </div>
                      </div>
                      <div className="top-blog-col">
                        <div className="flex-row medium flex-wrap"> Post: {postInst.post}</div>
                      </div>
                    </div>
                    {selectedPostId === postInst.id && (
                      <div className="comments-flex-col">
                        {/* Render comments */}
                        {comments.length === 0 ? (
                          <div className='cw-flex-row'> Loading Comments now. You could be the first to comment..</div>
                        ) : (
                          comments.map((commentInst) => {
                            const {id, comment, creatorName, commentDate, postId, active} = commentInst;
                            return (
                              <div className="flex-row" key={id}>
                                <div className="comment-info-col">
                                  <div className="flex-row">COMMENT ID: {commentInst.id}</div>
                                  <div className="flex-row"> COMMENTOR: {commentInst.creatorName}</div>
                                </div>
                                <div className="comment-blog-col">
                                  <div className="flex-row">Comment:</div>
                                  <div className="flex-row medium">{commentInst.comment}</div>
                                </div>
                              </div>
                            );
                          })
                        )}
                        <div className="ce-flex-row center">
                          <a className="large navy">Add a Comment:</a>
                            <textarea className="sidebar-input-container3" style={{ whiteSpace: "normal" }} name="comment" type="text" 
                              onChange={commentChangeHandler} placeholder="Enter your comment here"></textarea>
                          <button className="button2" onClick={() => saveComment(postInst)}> ADD NEW COMMENT</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
          }
          export default Topic