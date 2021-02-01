import articleStyles from '../styles/Article.module.css';
import Link from 'next/link';

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <pe>{article.excerpt}</pe>
      </a>
    </Link>
  )
}

export default ArticleItem
