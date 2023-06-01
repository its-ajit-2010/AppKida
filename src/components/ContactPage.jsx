import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Container,
  styled,
} from '@mui/material';

const ResponsiveIframe = styled('iframe')({
  width: '100%',
  height: 0,
  paddingBottom: '56.25%', // 16:9 aspect ratio (change as needed)
  border: '0',
});

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        align="center"
        style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem' }}
        py={4} >
        Contact Us
      </Typography>
      <Grid container spacing={2} style={{ margin: '2rem auto' }}>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12} md={4}>
            <Box px={2}>
              <Paper elevation={3} style={{ padding: '1rem', marginBottom: '1rem' }}>
                <Typography variant="body1">Email:</Typography>
                <Typography variant="body2">appkidatechnology@gmail.com</Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box px={2}>
              <Paper elevation={3} style={{ padding: '1rem', marginBottom: '1rem' }}>
                <Typography variant="body1">Phone Number:</Typography>
                <Typography variant="body2">+91 8605789034 / +91 9921728696</Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box px={2}>
              <Paper elevation={3} style={{ padding: '1rem', marginBottom: '1rem' }}>
                <Typography variant="body1">Address:</Typography>
                <Typography variant="body2">
                Vinayak Nagar, Pimple Gurav, Pimpri-Chinchwad, Maharashtra 411061
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
        <Grid item xs={12} md={6}>
          <Box px={2}>
            <Typography variant="h5">Location</Typography>
          </Box>
            <Box px={2}>
              <Paper elevation={3} style={{ padding: '1rem', marginBottom: '1rem' ,height:'390px'}}>
                <Box sx={{ position: 'relative', paddingTop: '56.25%', }}>
                  <ResponsiveIframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7563.51373178327!2d73.814758!3d18.584997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b910836d7a13%3A0x3b3d3140aa693b!2sPatil%20complex!5e0!3m2!1sen!2sin!4v1685528232422!5m2!1sen!2sin" 
                    title="Map"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '130%',
                    }}
                  ></ResponsiveIframe>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box px={2}>
              <Typography variant="h5">Contact Information</Typography>
              <Paper elevation={3} style={{ padding: '1rem', marginBottom: '1rem' }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Mobile"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Submit
                      </Button>
                    </Grid>
                    <Grid item xs={4}></Grid>
                  </Grid>
                </form>
              </Paper>
            </Box>
          </Grid>

        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactPage;
