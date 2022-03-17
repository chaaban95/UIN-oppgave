import { useState, useEffect } from 'react'
import { getActors } from '../lib/movieService'
import { Link } from 'react-router-dom'
import Title from './Title'

function ActorList({ data }) {
    return (
      <section className='cards'>
        {data?.map((act) => (
          <article key={act.slug}>
            <h2>{act.title}</h2>
            <Link to={act.slug}>
              {act.slug}
            </Link>
          </article>
        ))}
      </section>
    )
  }

export default function Actors() {
    const [ data, setData] = useState([])

    useEffect(()=>{
        const getActorsData = async () => {
            const actors = await getActors()
            setData(actors)
            console.log(actors)
        }
        getActorsData()
    }, [])
    
    return (
        <>
            <p className='breadcrumb'>Home / Actors</p>
            <Title title="Actors" />
            <ActorList data={data}/>
        </>
    )
}