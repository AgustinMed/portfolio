import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import { ExpandIcon } from './expandIcon';

interface customCardProps {
  imgSrc: string;
  link: string;
  title: string;
  description: string;
  imgClass: string;
  onClick?: () => void;
}

const customCard: React.FC<customCardProps> = ({ imgSrc, link, title, description, imgClass, onClick }) => {
  return (
    <a onClick={onClick} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
        <Container className='experience-card' sx={{paddingRight: 0}}>
            <Box>
                <ExpandIcon className='expand-icon'/>
                <img src={imgSrc} style={{paddingTop: '5%'}} className={imgClass}/>
            </Box>
            <Typography variant='h5' sx={{ textAlign: 'right', display: {xs: 'none', md: 'contents'}}}>
                {title}
            </Typography>
            <Divider sx={{ display: { xs: 'none', md: 'block' } }} />
            <Typography sx={{fontSize: '14px', textAlign: { xs: 'justify', md: 'right' },display: {xs: 'none', md: 'contents'}}}>
                {description}
            </Typography>
        </Container>
    </a>
  );
};

export default customCard;
