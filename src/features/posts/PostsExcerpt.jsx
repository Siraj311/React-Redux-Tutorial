import PostAuthor from "./PostAuthor"
import ReactionButton from "./ReactionButton"
import TimeAgo from './TimeAgo'

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  )
}
export default PostsExcerpt