import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { img_300, noPicture } from '../../config/config'
import './Carousel.css'

const handleDragStart = (e) => e.preventDefault()

const Gallery = ({ id, media_type }) => {
  const [credits, setCredits] = useState([])

  // Fonction pour tronquer le texte
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
  }

  const items = credits.map((c) => (
    <div className="carouselItem" key={c.id}>
      <img
        src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
        alt={c?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <a
        href={`https://www.themoviedb.org/person/${c.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <b className="carouselItem__txt">{truncateText(c?.name, 15)}</b>
      </a>
    </div>
  ))

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  }

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
    )
    setCredits(data.cast)
  }

  useEffect(() => {
    fetchCredits()
    // eslint-disable-next-line
  }, [])

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      // autoPlay
    />
  )
}

export default Gallery
