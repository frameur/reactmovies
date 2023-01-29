import { Badge } from '@mui/material'
import { img_300, unavailable } from '../../config/config'
import './SingleContent.css'
import ContentModal from '../ContentModal/ContentModal'

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  const formattedDate = new Date(date).toLocaleDateString().replace(/\//g, '-')
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? 'primary' : 'secondary'}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <div className="contentInfos">
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === 'tv' ? 'TV Series' : 'Movie'}
          <span className="subTitle">{formattedDate}</span>
        </span>
      </div>
    </ContentModal>
  )
}

export default SingleContent
