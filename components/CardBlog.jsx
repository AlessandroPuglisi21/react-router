import style from './CardBlog.module.css';
import { Link } from 'react-router-dom';

export default function CardBlog({ post }) {
    const { id,title, content, image, categories } = post;

    return (
        <div style={{ display: "inline-block" }}>
            <div className={style.card}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{content}</p>
                <p>{categories}</p>
                <Link className={style.link} to = {`/posts/${id}`}> Vai alla pagina del prodotto</Link>
            </div>
            
        </div>
    );
}
