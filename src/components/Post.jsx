import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';


export function Post({ author, publishedAt, content }){
  const [comments, setComments] = useState([
    'Post muito banaca, hein?',
  ]);

  const [newCommentText, setNewCommentText] = useState('');
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(){
    event.preventDefault();
    setComments([...comments,newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentTextChange(){
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time 
          dateTime={publishedAt.toISOString()}
          title={publishedDateFormatted}
        >
          {publishedDateRelativeToNow} 
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'pharagraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
        
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          name="comment" 
          placeholder="Deixe seu comentário" 
          onChange={handleNewCommentTextChange}
          value={newCommentText}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment}/>
        })}
      </div>
    </article>
  );
}