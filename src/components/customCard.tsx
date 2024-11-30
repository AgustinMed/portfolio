import React from 'react';
import { Box, Container, Typography } from '@mui/material';


interface customCardProps {
  imgSrc: string;
  link: string;
  title: string;
  description: string;
  imgClass: string;
}

const customCard: React.FC<customCardProps> = ({ imgSrc, link, title, description, imgClass }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
        <Container className='experience-card'>
            <Box>
                <img src={imgSrc} style={{paddingTop: '5%'}} className={imgClass}/>
            </Box>
            <Typography sx={{fontSize: '13px', textAlign: 'right', display: {xs: 'none', md: 'contents'}}}>
                <h2>{title}</h2>
            </Typography>
            <Typography sx={{fontSize: '14px', textAlign: { xs: 'justify', md: 'right' },display: {xs: 'none', md: 'contents'}}}>
                {description}
            </Typography>
        </Container>
    </a>
  );
};

export default customCard;
