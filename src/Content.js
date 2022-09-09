import { tab } from '@testing-library/user-event/dist/tab';
import { useEffect, useState } from 'react'
            
function Content() {
            const nav = ['posts','comments','albums']
            const [title, setTitle] = useState('')
            const [posts, setPosts] = useState([])
            const [type, setType] = useState('posts')
            const [showTop, setShowTop] = useState(false)
            const [width, setWidth] = useState(window.innerWidth)
            const [time, setTime] = useState(180)
            // useEffect(() => { 
            //             fetch(`https://jsonplaceholder.typicode.com/${type}`)
            //                         .then(res => res.json())
            //                         .then(posts => setPosts(posts))
            // }, [type]);
            // useEffect(() => {
            //             document.title = title
            // })
            
            // useEffect(() => {
            //             const handleScroll = () => {
            //                         setShowTop(window.scrollY >= 200)
            //             }

            //             window.addEventListener('scroll', handleScroll)
            //             return () => {
            //                         window.removeEventListener('scroll', handleScroll)       
            //             }
            // })
            // useEffect(() => {
            //             const handleResize = () => {
            //                      setWidth(window.innerWidth)   
            //             }
            //             window.addEventListener('resize', handleResize)
            // })
            useEffect(() => {
                        const timer = 
                        setInterval(() => {
                                    setTime(prev => prev - 1 )
                                    console.log(time)
                        }, 1000)
                        
                        return () => {
                                    clearInterval(timer)
                        }
            },[])
            return (    
                        <div>
                                    <div>
                                                {nav.map(n => (
                                                            <button key={n}
                                                                        style={type === n ? {
                                                                                    color: '#fff',
                                                                                    backgroundColor: '#333'}:{}} onClick={()=> setType(n)}
                                                            >{n}</button>
                                                ))}
                                    </div>
                                    <input
                                                value={title}
                                                onChange={e => setTitle(e.target.value)}
                                    />
                                    {/* <ul>
                                                {posts.map(post => (
                                                            <li key={post.id}>{post.body || post.title}</li>
                                                ))}
                                    </ul> */}
                                    <p>{time}</p>
                                    {
                                                showTop && (
                                                            <button
                                                                        style={{ position: 'fixed', right: '20px', bottom: '20px' }}
                                                            onClick = {()=> window.scrollTo(0,0)}>Top</button>
                                                )
                                    }

                        </div>
            )
}
export default Content