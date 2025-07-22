import React from 'react';
import './Post.scss';
import MyButton from './UI/button/MyButton';

const Post = ({post, number, posts, setPosts}) => {

  const deleteItem = (idToDelete) => {
    setPosts(prevItems => prevItems.filter(post => post.id !== idToDelete));
  };

  return (
    <div>
      <div className="post">
          <div className="post__content">
            <div>
                <strong>ID: {number}</strong>
            </div>
            <strong>Заголовок: {post.title}</strong>
            <div>
                Описание: {post.description}
            </div>
          </div>
          <div className="post__btns">
              <MyButton onClick={() => deleteItem(post.id)} className="btns-delete">Удалить</MyButton>
          </div>
       </div>
    </div>
  )
}

export default Post
