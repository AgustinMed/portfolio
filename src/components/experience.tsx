import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';
import { Box, Typography } from '@mui/material';
import micLogo from '../assets/mic_logo.png';

const Experience: React.FC = () => {
  return (
    <div className='experiencia'>
      <h1>Experiencia</h1>
        <Timeline position="alternate-reverse">
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    Agosto 2023 - Diciembre 2023
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined"/>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Box>
                        <img src={micLogo} alt="Descripción de la imagen" className='mic-logo'/>
                    </Box>
                    <Typography>
                        
                        Mapa Interactivo Cultural (MIC)
                    </Typography>
                    <Typography>
                        CAMAD - Camara de Industria, Comercio y Turismo de Puerto Madryn
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineDot variant="outlined"/>
                <TimelineContent>CVA Gaming</TimelineContent>
            </TimelineItem>
        </Timeline>
    </div>
  );
};

export default Experience;
