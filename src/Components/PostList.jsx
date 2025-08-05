import Post from './Post';
import '../styles/App.scss';

const PostList = ({ posts, setPosts, title }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <Post key={post.id} number={index + 1} post={post} posts={posts} setPosts={setPosts} />
      ))}
    </div>
  );
};

export default PostList;
