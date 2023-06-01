import React from 'react';
import { Typography, Grid, Container, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';
import Director from './Director.jpg';
import Cofounder from './Cofounder.jpg';
import MissionLogo from './Mission.png';
import ExpertiseLogo from './Experties.png';
import VisionLogo from './Vision.png';

// Define the styles for the sections
const Section = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(4),
}));

const AboutPage = () => {
  return (
    <Container maxWidth="md" mt={4}>
      <Typography variant="h4" align="center" gutterBottom py={4} >
        About Us
      </Typography>
      <Section>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform .2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="div" gutterBottom textAlign={'center'}>
                  Our Mission
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <img src={MissionLogo} alt="Mission Logo" height={50} />
                </Box>
                
                <Typography variant="body1">
                  We are dedicated to delivering high-quality software solutions that help businesses succeed in the digital world.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform .2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="div" gutterBottom textAlign={'center'}>
                  Our Expertise
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <img src={ExpertiseLogo} alt="Expertise Logo" height={50} />
                </Box>
                
                <Typography variant="body1">
                  With years of experience, our team of skilled developers specializes in web and mobile application development, UI/UX design, and more.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform .2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="div" gutterBottom textAlign={'center'}>
                  Our Vision
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <img src={VisionLogo} alt="Vision Logo" height={50} />
                </Box>
               
                <Typography variant="body1">
                  We envision a future where technology seamlessly integrates into everyday life, making businesses more efficient and people's lives easier.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};

export default AboutPage;
