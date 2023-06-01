import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';

import {LinkedIn, WhatsApp, Instagram } from '@mui/icons-material';

import T1 from './T1.jpg';
import T2 from './T2.jpg';
import T3 from './T3.jpeg';
import T4 from './T4.jpeg';
import T5 from './T5.jpeg';
import T6 from './T6.jpeg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Trupti D. G.',
      position: 'Recat Developer',
      image: T1,
      email: 'truptighutukade2002@gmail.com',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      whatsapp: 'https://wa.me/1234567890',
      instagram: 'https://www.instagram.com/johndoe',
      thoughts:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo faucibus, varius nulla sed, congue ex.',
    },
    {
      name: 'Ajit D. M.',
      position: 'React Developer',
      image: T2,
      email: 'ajitmolawade4426@gmail.com',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      whatsapp: 'https://wa.me/1234567890',
      instagram: 'https://www.instagram.com/johndoe',
      thoughts:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo faucibus, varius nulla sed, congue ex.',
    },
    {
      name: 'Shubhangi U. M.',
      position: 'Angular Developer',
      image: T3,
      email: 'johndoe@example.com',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      whatsapp: 'https://wa.me/1234567890',
      instagram: 'https://www.instagram.com/johndoe',
      thoughts:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo faucibus, varius nulla sed, congue ex.',
    },
    {
      name: 'John Doe',
      position: 'UI/UX Designer',
      image: T4,
      email: 'johndoe@example.com',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      whatsapp: 'https://wa.me/1234567890',
      instagram: 'https://www.instagram.com/johndoe',
      thoughts:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo faucibus, varius nulla sed, congue ex.',
    },
    {
      name: 'John Doe',
      position: 'UI/UX Designer',
      image: T5,
      email: 'johndoe@example.com',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      whatsapp: 'https://wa.me/1234567890',
      instagram: 'https://www.instagram.com/johndoe',
      thoughts:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo faucibus, varius nulla sed, congue ex.',
    },
    {
      name: 'John Doe',
      position: 'UI/UX Designer',
      image: T6,
      email: 'johndoe@example.com',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      whatsapp: 'https://wa.me/1234567890',
      instagram: 'https://www.instagram.com/johndoe',
      thoughts:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo faucibus, varius nulla sed, congue ex.',
    },
    // Rest of the team members
  ];

  const renderTeamMembers = () => {
    return teamMembers.map((member, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card
          sx={{
            transition: 'transform .2s',
            '&:hover': { transform: 'scale(1.05)' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center', 
            backgroundColor:'#fff'
          }}
        >
          <CardMedia
            component="div"
            sx={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              overflow: 'hidden',
              marginTop:'20px'
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </CardMedia>
          <CardContent>
            <Typography variant="h6" component="div">
              {member.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {member.position}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {member.email}
            </Typography>
            <div
              style={{ display: 'flex', justifyContent: 'center', marginTop: '8px', gap: '4px' }} 
            >
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedIn />
              </a>
              <a href={member.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsApp />
              </a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
            </div>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '8px' }}>
              {member.thoughts}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom py={4}>
        Our Team
      </Typography>
      <Grid container spacing={4}  mb={4}>
        {renderTeamMembers()}
      </Grid>
    </Container>
  );
};

export default Team;
