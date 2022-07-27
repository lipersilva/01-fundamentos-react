import styles from './Post.module.css';

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar} 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80"
            alt="" 
          />
          <div className={styles.authorInfo}>
            <strong>Jane Cooper</strong>
            <span>Dev Front-End</span>
          </div>
        </div>

        <time 
          dateTime='2022-05-11 08:00:00'
          title='11 de Maio às 08:00'
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href=''> jane.design/doctorcare </a> </p>
        <p> 
          <a href=''> #novoprojeto</a>{' '}
          <a href=''> #nlw </a> {' '}
          <a href=''> #rocketseat </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário"/>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}