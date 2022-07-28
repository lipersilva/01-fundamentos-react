import Header from './components/Header'
import './global.css'
import styles from './App.module.css'
import Sidebar from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars0.githubusercontent.com/u/8186664?v=4',
      name: 'Filipe Rodrigues',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'pharagraph', content:'Fala galeraa 👋'},
      { type: 'pharagraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}, 
        // <a href=''> #novoprojeto</a>{' '}
        // <a href=''> #nlw </a> {' '}
        // <a href=''> #rocketseat </a>
    ],
    publishedAt: new Date('2022-07-28 09:48:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      name: 'Rebeca Rodrigues',
      role: 'Back-end Developer'
    },
    content: [
      { type: 'pharagraph', content:'Fala galeraa 👋'},
      { type: 'pharagraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}, 
        // <a href=''> #novoprojeto</a>{' '}
        // <a href=''> #nlw </a> {' '}
        // <a href=''> #rocketseat </a>
    ],
    publishedAt: new Date('2022-07-28 10:00:00'),
  }
]

function App() {
  return (
    <>
      <Header/> 
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author= {post.author}
                content= {post.content}
                publishedAt= {post.publishedAt}
              />
            )
          })}
        </main>  
      </div> 
    </>
  )
}

export default App
