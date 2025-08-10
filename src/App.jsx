import Counter from "./features/counter/Counter"
import PostsList from "./features/posts/postsList"
import AddPostForm from "./features/posts/AddPostForm"

const App = () => {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  )
}
export default App