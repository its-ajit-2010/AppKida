import React, { useState } from 'react';
import { Grid, Typography, Card, CardContent, Paper, Box, Grow, Tab, Tabs } from '@mui/material';
import { Code as CodeIcon } from '@mui/icons-material';
import WebDesign from './WebDesign.avif';
import Frontend from './Frontend.avif';
import Backend from './Backend.jpg';
import Ecommerse from './Ecommerse.png';
import AppDevelope from './Mobile.avif';
import Cms from './Cms.avif';

const servicesData = [
  {
    title: 'Website Design',
    description: 'We design modern and responsive websites tailored to your needs.',
    image: WebDesign,
  },
  {
    title: 'Frontend Development',
    description: 'We create interactive and user-friendly interfaces using cutting-edge frontend technologies.',
    image: Frontend,
  },
  {
    title: 'Backend Development',
    description: 'We develop scalable and secure backend systems to power your applications.',
    image: Backend,
  },
  {
    title: 'E-commerce Solutions',
    description: 'We build customized e-commerce platforms to help you sell your products online.',
    image: Ecommerse,
  },
  {
    title: 'Mobile App Development',
    description: 'We create native and cross-platform mobile applications for iOS and Android.',
    image: AppDevelope,
  },
  {
    title: 'CMS Development',
    description: 'We offer content management system development to easily manage your website content.',
    image: Cms,
  },
];

const projectsData = [
  {
    category: 'React Project',
    title: 'Project 1',
    description: 'Description of Project 1',
    image: 'project1.jpg',
  },
  {
    category: 'Android Project',
    title: 'Project 2',
    description: 'Description of Project 2',
    image: 'project2.jpg',
  },
  {
    category: 'Other Projects',
    title: 'Project 3',
    description: 'Description of Project 3',
    image: 'project3.jpg',
  },
  {
    category: 'React Project',
    title: 'Project 1',
    description: 'Description of Project 1',
    image: 'project1.jpg',
  },
  {
    category: 'Android Project',
    title: 'Project 2',
    description: 'Description of Project 2',
    image: 'project2.jpg',
  },
  {
    category: 'Other Projects',
    title: 'Project 3',
    description: 'Description of Project 3',
    image: 'project3.jpg',
  },
  {
    category: 'React Project',
    title: 'Project 1',
    description: 'Description of Project 1',
    image: 'project1.jpg',
  },
  {
    category: 'Android Project',
    title: 'Project 2',
    description: 'Description of Project 2',
    image: 'project2.jpg',
  },
  {
    category: 'Other Projects',
    title: 'Project 3',
    description: 'Description of Project 3',
    image: 'project3.jpg',
  },
];

function ServicesPage() {
  const [activeTab, setActiveTab] = useState('All Projects');

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  const filteredProjects = activeTab === 'All Projects' ? projectsData : projectsData.filter(project => project.category === activeTab);

  return (
    <Box py={4}>
      <Typography variant="h4" align="center" style={{ marginBottom: '2rem' }}>
        Web Development Services
      </Typography>
      <Grid container spacing={2}>
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={index * 200}>
              <Paper
                elevation={3}
                style={{
                  backgroundColor: '#f7f7f7',
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    backgroundColor: '#ebebeb',
                  },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Card style={{ height: '100%' }}>
                  <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <Typography variant="h6" gutterBottom>
                        {service.title}
                      </Typography>
                      <img
                        src={service.image}
                        alt={service.title}
                        style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '1rem' }}
                      />
                      <Typography variant="body2" color="textSecondary">
                        {service.description}
                      </Typography>
                    </div>
                    <div></div>
                  </CardContent>
                </Card>
              </Paper>
            </Grow>
          </Grid>
        ))}
      </Grid>
      <Box mt={4}>
        <Typography variant="h4" align="center" style={{ marginBottom: '1rem' }}>
          Our Projects
        </Typography>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="All Projects" value="All Projects" />
          <Tab label="React Projects" value="React Project" />
          <Tab label="Android Projects" value="Android Project" />
          <Tab label="Other Projects" value="Other Projects" />
        </Tabs>
        <Grid container spacing={2}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={index * 200}>
                <Paper
                  elevation={3}
                  style={{
                    backgroundColor: '#f7f7f7',
                    transition: 'background-color 0.3s',
                    '&:hover': {
                      backgroundColor: '#ebebeb',
                    },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginTop:'20px',
                  }}
                >
                  <Card style={{ height: '100%' }}>
                    <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <Typography variant="h6" gutterBottom>
                          {project.title}
                        </Typography>
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '1rem' }}
                        />
                        <Typography variant="body2" color="textSecondary">
                          {project.description}
                        </Typography>
                      </div>
                      <div></div>
                    </CardContent>
                  </Card>
                </Paper>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ServicesPage;
