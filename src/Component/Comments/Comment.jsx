import React from "react";
import { BiMessage } from 'react-icons/bi';
import { MdModeEditOutline } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import CommentForm from "./CommentForm";
import { stables } from "../../constants";
import { useEffect, useState } from 'react';
import axios from 'axios';


const Comment = ({
     comment,
     logginedUserId,
     affectedComment,
     setAffectedComment,
     addComment,
     parentId = null,
     updateComment,
     deletComment,
     replies,
   
    }) => {
     
    const isUserLoggined = Boolean(logginedUserId);
  


    // photo section fetch 
    const [userAvatar, setUserAvatar] = useState('');

    useEffect(() => {
      // Define the URL to fetch the user's avatar from the backend.
      const avatarUrl = 'http://localhost:7000/uploads/:userdId'; // Replace with the actual endpoint.
    
      // Make an HTTP GET request to fetch the avatar.
      axios.get(avatarUrl)
        .then(response => {
          setUserAvatar(response.data.avatarUrl); // Assuming the response contains the avatar URL.
        })
        .catch(error => {
          console.error('Error fetching user avatar:', error);
        });
    }, []);
    


    // ==============================//
    const commentBelongsToUser = logginedUserId === comment.user._id;
    // replay a comment
    const isReplying = 
      affectedComment && 
      affectedComment.type === "replying" &&
      affectedComment._id === comment._id;
    // edit a comment
    const isEditing = 
      affectedComment && 
      affectedComment.type === "editing" &&
      affectedComment._id === comment._id;
    const repliedCommentId = parentId ? parentId : comment._id;
    const replyOnUserId = comment.user._id;


    
    return (
        <div className="flex flex-nowrap items-start gap-x-3 p-3 rounded-lg bg-transparent border border-white">
            <img src={userAvatar} alt="user profile" className="w-9 h-9 object-cover rounded-full" />
            <div className="flex-1 flex flex-col">
                <h5 className="font-bold text-dark-hard text-xs">
                    {/* {profileData.name} */}
                </h5>
                <span className="text-xs text-dark-light">
                    {new Date(comment.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </span>
                {!isEditing && (
                  <p className="font-opensans mt-[10px]">
                    {comment.desc}
                  </p>                    
                )}

                {isEditing && (
                    <CommentForm 
                       btnLabel="Update"
                       formSubmitHandler={(value) => updateComment(value, comment._id)}
                       formCancelHandler={() => setAffectedComment(null)}
                       initialText={comment.desc}
                    />
                )}
                <div className="flex items-center gap-x-3 text-dark">
                    {isUserLoggined && (
                      <button className="flex items-center space-x-2"
                        onClick={() => setAffectedComment({type: 'replying', _id: comment._id})}>
                        <BiMessage className="w-4 h-auto" />
                        <span>Reply</span>
                      </button>
                    )}
                    {commentBelongsToUser && (
                      <>
                        <button
                          className="flex items-center space-x-2"
                          onClick={() =>
                            setAffectedComment({type: "editing", _id: comment._id})
                        }>
                          <MdModeEditOutline className="w-4 h-auto" />
                          <span>Edit</span>
                        </button>
                        <button
                          className="flex items-center space-x-2"
                          onClick={() => deletComment(comment._id)} >
                          <MdDelete className="w-4 h-auto" />
                          <span>Delete</span>
                        </button>
                      </>
                    )}
                </div>
                {isReplying && (
                 <CommentForm
                  btnLabel= "Reply"
                  formSubmitHandler={(value) =>
                    addComment(value, repliedCommentId, replyOnUserId)}
                    formCancelHandler={() => setAffectedComment(null)} 
                 />
                )}
                {replies.length > 0 && (
                  <div>
                    {replies.map((reply) => (
                        <Comment
                          key={reply._id}
                          addComment={addComment}
                          affectedComment={affectedComment}
                          setAffectedComment={setAffectedComment}
                          comment={reply}
                          deletComment={deletComment}
                          logginedUserId={logginedUserId}
                          replies={[]}
                          updateComment={updateComment}
                          parentId={comment._id}
                        />
                    ))}
                  </div>
                )}
            </div>
        </div>
    );
};

export default Comment