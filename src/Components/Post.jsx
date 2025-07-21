import React from 'react';
import './Post.scss';

const Post = () => {
  return (
    <div>
      <div className="post">
          <div className="post__content">
            <strong> 1. JavaScript </strong>
            <div>
                JavaScript - язык программирования
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
