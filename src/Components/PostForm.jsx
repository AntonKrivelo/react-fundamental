import { useState } from 'react';
import MyButton from '../Components/UI/button/MyButton';
import MyInput from '../Components/UI/input/MyInput';

const PostForm = ({ posts, setPosts, setVisibleModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Math.floor(Math.random() * 100),
      title,
      description,
    };
    setPosts([...posts, newPost]);
    setTitle('');
    setDescription('');
    setVisibleModal(false);
  };

  return (
    <div>
      <form>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Заголовок поста"
        />
        <MyInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    </div>
  );
};

export default PostForm;
