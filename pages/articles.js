import { getAllPostsForHome } from '../lib/api';
import { Post } from '../components/post';
import { ContentContainer } from '../components/content-container';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Articles({allPosts}){

    return (
        <>
            <Header />
            <div className='bg-articles-headline py-10 text-white'>
                <h1 className='text-xl'>Articles</h1>
                <p>Our most recent featured article will go here</p>
            </div>
            <ContentContainer>
                <div>
                    <h2>All Articles</h2>
                    <div className='flex flex-wrap justify-between'>
                        { allPosts.map((post, i) => <Post excerpt={post.excerpt} imgSrc={post.coverImage} title={post.title} key={i} />) }
                    </div>
                </div>
            </ContentContainer>
            <Footer />
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview)
    return {
      props: { allPosts, preview },
      revalidate: 1
    }
  }
  