import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import QuiltedImageList from '../components/ImageLists'

const Tour = () => {
  return (
    <Container sx={{width: 900}}>
        <Typography variant="h3" components="h1" marginTop={3}>
            Explore the world in Vegas
        </Typography>
        <Box marginTop={3} sx={{display: 'flex'}}>
            <img
                alt="Las Vegas"
                src="https://media.timeout.com/images/105124791/750/422/image.jpg"
                height={325}
            />
            <QuiltedImageList />
        </Box>
    </Container>
  )
}

export default Tour
