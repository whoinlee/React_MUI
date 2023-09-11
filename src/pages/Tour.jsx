import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import QuiltedImageList from '../components/ImageLists'
import ControlledAccordions from "../components/Accordion";

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
        <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
        </Typography>
        <Box sx={{ display: "flex" }}>
            <Typography variant="paragraph" component="p" marginY={3}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            voluptates rem quos delectus debitis earum modi, ipsum veritatis.
            Perferendis officiis nobis, aut hic praesentium nulla vero, possimus
            omnis reprehenderit blanditiis quis incidunt minima voluptatibus illum
            quam corporis libero fugiat doloremque. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Exercitationem officiis commodi beatae
            animi incidunt necessitatibus aut provident ad ex. Saepe!
            </Typography>
        </Box>
        <Typography variant="h6" component="h4" marginBottom={3}>
            Frequently Asked Questions
        </Typography>
        <ControlledAccordions />
    </Container>
  )
}

export default Tour
