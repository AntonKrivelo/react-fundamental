import Post from './Post'


const PostList = ({posts, setPosts, title}) => {

  return (
    <div>
       <h1 style={{textAlign: 'center'}}>{title}</h1>
        {
          posts.map((post, index) => 
           <Post number={index + 1} post={post} key={post.id} posts={posts} setPosts={setPosts}/>
        )}
    </div>
  )
}

export default PostList
