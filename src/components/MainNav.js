import React from 'react'
import styled from '@emotion/styled'
import BottomNavigation from '@mui/material/BottomNavigation'
import { Button } from '@mui/material'
import TvIcon from '@mui/icons-material/Tv'
import MovieIcon from '@mui/icons-material/Movie'
import SearchIcon from '@mui/icons-material/Search'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import { useNavigate } from 'react-router-dom'

const useStyles = styled({
  root: {
    margin: '20px',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#2d313a',
    zIndex: 100,
  },
})

export default function SimpleBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  let navigate = useNavigate()

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.root}
    >
      <Button
        style={{
          color: 'white',
          margin: '10px',
          backgroundColor: 'green',
        }}
        label="Trending"
        onClick={() => navigate('/')}
      >
        <WhatshotIcon />
        <span style={{ margin: '5px', fontSize: '8px' }}>Tendance</span>
      </Button>
      <Button
        style={{ color: 'white', margin: '10px', backgroundColor: 'green' }}
        label="Movies"
        onClick={() => navigate('/movies')}
      >
        <MovieIcon />
        <span style={{ margin: '5px', fontSize: '8px' }}>films</span>
      </Button>
      <Button
        style={{ color: 'white', margin: '10px', backgroundColor: 'green' }}
        label="Series"
        onClick={() => navigate('/series')}
      >
        <TvIcon />
        <span style={{ margin: '5px', fontSize: '8px' }}>Series</span>
      </Button>
      <Button
        style={{ color: 'white', margin: '10px', backgroundColor: 'red' }}
        label="Movies"
        onClick={() => navigate('/search')}
      >
        <span style={{ margin: '5px', fontSize: '8px' }}>recherche</span>
        <SearchIcon />
      </Button>
    </BottomNavigation>
  )
}
