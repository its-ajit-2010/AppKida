import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Facebook, LinkedIn, Instagram, WhatsApp, Adb as AdbIcon } from '@mui/icons-material';

function Footer() {
  return (
    <Box position="static" bottom={0} left={0} right={0} bgcolor="#1976d2" color="#fff" py={4} textAlign="center">
      <Grid container justifyContent="space-between" spacing={2} alignItems="flex-start">
        <Grid item xs={12} sm={3}>
          <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography variant="h6" component="span" noWrap>
              AppKida
            </Typography>
          </Box>
          <Typography variant="body2">
            Vinayak Nagar, Pimple Gurav, <br />
            Pimpri-Chinchwad, Maharashtra 411061.
          </Typography>
          <Typography variant="body2">
            +91 8605789034 / +91 9921728696
          </Typography>
          <Typography variant="body2">
            appkidatechnology@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Quick Links</Typography>
          <Box mt={2}>
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </a>
            <br />
            <a href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
              About
            </a>
            <br />
            <a href="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
              Services
            </a>
            <br />
            <a href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
              Contact
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Services</Typography>
          <Box mt={2}>
            <Typography variant="body2">
              UI/UX Design
            </Typography>
            <Typography variant="body2">
              App Development
            </Typography>
            <Typography variant="body2">
              Web Development
            </Typography>
            <Typography variant="body2">
              Consulting and Training
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
  <Typography variant="h6">Follow Us</Typography>
  <Box mt={2} display="flex" flexDirection="column" alignItems="center">
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Facebook fontSize="medium" />
      <Typography variant="body2" component="span" ml={1}>
        Facebook
      </Typography>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <LinkedIn fontSize="medium" />
      <Typography variant="body2" component="span" ml={1}>
        LinkedIn
      </Typography>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Instagram fontSize="medium" />
      <Typography variant="body2" component="span" ml={1}>
        Instagram
      </Typography>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <WhatsApp fontSize="medium" />
      <Typography variant="body2" component="span" ml={1}>
        WhatsApp
      </Typography>
    </div>
  </Box>
</Grid>

      </Grid>
      <Box mt={4}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
