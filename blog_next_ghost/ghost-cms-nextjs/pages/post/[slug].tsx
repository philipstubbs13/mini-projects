import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.scss'

const { BLOG_URL, CONTENT_API_KEY } = process.env

async function getPost(slug: string) {
  console.log(slug, 'slug');

  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`
  ).then((res) => res.json())

  console.log(res, 'res')

  const posts = res.posts

  return posts[0]
}

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  return {
    props: { post },
    revalidate: 10
  }
}

// hello-world - on first request = Ghost CMS call is made (1)
// hello-world - on other requests ... = filesystem is called (1M)

export const getStaticPaths = () => {
  // paths -> slugs which are allowed
  // fallback ->
  return {
    paths: [],
    fallback: true
  }
}

type Post = {
  title: string;
  html: string;
  slug: string;
}

const Post: React.FC<{ post: Post }> = props => {
  console.log(props);

  const { post } = props;

  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={styles.container}>
      <Link href="/">
        <a>Go Back</a>
      </Link>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  )
}

export default Post;