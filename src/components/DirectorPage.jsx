import React from 'react';
import { Grid, Typography, Button, Box, Paper } from '@mui/material';
import Founder from './Director.jpg';
import Cofounder from './Director.jpg';

const Hero = () => {
  return (
    <>
    <Paper elevation={3} sx={{ p: 4, m:4, overflow: 'hidden', transition: 'transform 0.3s' }}>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h4">
          Welcome to Our Site
          </Typography>
          <Typography variant="h6">
          What sets us apart is our commitment to excellence. We follow industry best practices and employ cutting-edge technologies to ensure that our software solutions are robust, scalable, and future-proof. We stay updated with the latest advancements in the software development landscape, allowing us to leverage emerging technologies and frameworks to create state-of-the-art solutions. Customer satisfaction is at the core of our business philosophy. We prioritize clear communication, timely delivery, and responsive support throughout the software development lifecycle. Our agile methodology enables us to adapt to changing requirements and deliver incremental value to our clients at every stage of the project. We have successfully completed numerous software development projects across various industries, including finance, healthcare, e-commerce, and more.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px', mt: 3 }}
          >
            HIRE US
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s',
              },
            }}
          >
            <img
              src={Founder}
              alt="My Team"
              style={{ width: '100%', height: '100%', maxWidth: '100%'}}
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
    <Paper elevation={3} sx={{ p: 4, m:4, overflow: 'hidden', transition: 'transform 0.3s' }}>
      <Grid container spacing={6} alignItems="center">
      <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s',
              },
            }}
          >
            <img
              src={Cofounder}
              alt="My Team"
              style={{ width: '100%', height: '100%', maxWidth: '100%'}}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4">
          Welcome to Our Site.
          </Typography>
          <Typography variant="h6">
          Our portfolio showcases our diverse range of expertise and demonstrates our ability to tackle complex challenges effectively. Whether you are a startup looking to build your minimum viable product or an established enterprise seeking to enhance your existing software infrastructure, we are here to help. Contact us today to discuss your software development needs and embark on a journey towards digital transformation. Thank you for considering Appkida Technologies as your software development partner. We look forward to working with you and bringing your software ideas to life!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px', mt: 3 }}
          >
            HIRE US
          </Button>
        </Grid>
        
      </Grid>
    </Paper>
    </>
  );
};

export default Hero;
