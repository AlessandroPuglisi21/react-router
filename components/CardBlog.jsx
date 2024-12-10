import style from './CardBlog.module.css';
import { Link } from 'react-router-dom';
import DeletePost from './DeletePost'; // Importa il componente DeletePost

export default function CardBlog({ post, onDelete }) {
    const { id, title, content, image, categories } = post;

    return (
        <div className={style.cardContainer}>
            <div className={style.card}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{content}</p>
                <p>{categories}</p>
                <Link className={style.link} to={`/posts/${id}`}>Vai alla pagina del prodotto</Link>

                {/* BOTTONE ELIMINA */}
                <DeletePost id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}
