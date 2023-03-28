import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GitHubIcon from '@mui/icons-material/GitHub';
import GitHub from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function About({ comp }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className='about-button' size='small' onClick={handleOpen}>{comp}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            About the developer
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This was developed by: Ahmed El-Kilany
            <br/>
            <br/>
                      <div className='container' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                          <a style={{ color: 'black',margin:'5px' }} href='https://github.com/kilvny' target='_blank'> <GitHub /> </a>
                          <a style={{ color: 'blue' }} href='https://www.linkedin.com/in/kilvny' target='_blank'> <LinkedInIcon /></a>
                      </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}