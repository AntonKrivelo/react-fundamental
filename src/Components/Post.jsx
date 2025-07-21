import React from 'react';
import './Post.scss';

const Post = ({post}) => {
  return (
    <div>
      <div className="post">
          <div className="post__content">
            <div>
                <strong>{post.id}</strong>
            </div>
            <strong>{post.title}</strong>
            <div>
                {post.description}
            </div>
          </div>
          <div className="post__btns">
              <button className="btns-delete">Удалить</button>
          </div>
       </div>
    </div>
  )
}

export default Post
