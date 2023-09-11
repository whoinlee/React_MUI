import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {
  AccessTime
} from '@mui/icons-material';


const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img className="tourcard-img" alt="img1" src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
        <Box paddingX={1}>
          <Typography variant="subtitle1" components="h2">
            title goes here
          </Typography>
          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <AccessTime sx={{
              width: 12.5
            }} />
            <Typography variant="body2" components="p" marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>
          <Box  sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
                marginTop={3}>
            <Rating name="read-only" 
                    value={4.5}
                    precision={0.5}
                    size="small"
                    readOnly
            />
            <Typography variant="body2" components="p" marginLeft={0.5}>
              4.5
            </Typography>
            <Typography variant="body2" components="p" marginLeft={1.5}>
              (650 reviews)
            </Typography>
          </Box>
          <Box  sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
                marginTop={3}>
            <Typography variant="h6" components="h3" marginTop={0}>
              From C $145
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  )
}

export default TourCard
