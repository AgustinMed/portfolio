import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';
import { Box, Container, Grid2, Typography } from '@mui/material';
import micLogo from '../assets/mic.png';
import cvaLogo from '../assets/cva.png';
import CustomIcon from './customIcon';
import CustomCard from './customCard';
import {
    FaJs,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaTrello,
    FaAngular,
    FaReact,
    FaVuejs,
    FaNodeJs,
  } from "react-icons/fa";
  import { RiJavaLine, RiNextjsFill } from "react-icons/ri";
  import {
    SiPostgresql,
    SiNestjs,
    SiFlask,
    SiSpring,
    SiMongodb,
    SiMinio,
    SiTypescript,
  } from "react-icons/si";

const Experience: React.FC = () => {
  return (
    <div className='experiencia'>
      <h1 className='tab-title'>Experiencia</h1>
        <Timeline position="left">
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    <h3>Agosto 2023 - Diciembre 2023</h3>
                    <Grid2 container spacing={2} columns={3}>
                        <Grid2>
                            <CustomIcon color='#58C4DC'>
                                <FaReact size={'60%'} />
                            </CustomIcon>
                        </Grid2>
                        <Grid2>
                            <CustomIcon color='#E0224E'>
                                <SiNestjs size={'60%'}/>
                            </CustomIcon>
                        </Grid2>
                        <Grid2>
                            <CustomIcon color='#3179C7'>
                                <SiTypescript size={'60%'}/>
                            </CustomIcon>
                        </Grid2>
                        <Grid2>
                            <CustomIcon color='#C63F50'>
                                <SiMinio size={'60%'}/>
                            </CustomIcon>
                        </Grid2>
                        <Grid2>
                            <CustomIcon color='#316192'>
                                <SiPostgresql size={'60%'}/>
                            </CustomIcon>
                        </Grid2>
                    </Grid2>
                        
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className='timeline-dot'/>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <CustomCard imgSrc={micLogo} link={'https://mapainteractivocultural.ar/home/events'} title={'Mapa Interactivo Cultural (MIC)'} description={'CAMAD - Camara de Industria, Comercio y Turismo de Puerto Madryn.'} imgClass='mic-logo'></CustomCard>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    <h3>Marzo 2024 - Diciembre 2024</h3>
                    <Grid2 container spacing={2} columns={3}>
                        <Grid2>
                            <CustomIcon color='#FFD448'>
                                <FaPython size={'60%'}/>
                            </CustomIcon>
                        </Grid2>
                        <Grid2>
                            <CustomIcon color='#09B680'>
                                <FaVuejs size={'60%'}/>
                            </CustomIcon>
                        </Grid2>
                        <Grid2>
                            <CustomIcon color='#010101'>
                            <SiFlask size={'60%'}/>
                            </CustomIcon>
                        </Grid2>
                        <Grid2>
                            <CustomIcon color='#52AC43'>
                                <SiMongodb size={'60%'}/>
                            </CustomIcon>
                        </Grid2>
                    </Grid2>
                </TimelineOppositeContent>
                <TimelineDot className='timeline-dot'/>
                <TimelineContent>
                    <CustomCard imgSrc={cvaLogo} link={'https://cvagaming.com.ar/'} title={'CVA Gaming'} description={'Plataforma de juegos de casino en línea.'} imgClass='cva-logo'></CustomCard>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    </div>
  );
};

export default Experience;
