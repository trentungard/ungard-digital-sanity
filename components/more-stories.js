import PostPreview from '../components/post-preview'
import { ContentContainer } from './content-container'

export default function MoreStories({ posts }) {
  return (
    <>
      {posts.map((post, i) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
          order={i}
        />
      ))}
    </>
  )
}
