import React, { useState } from 'react';
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
import CustomDialog from './customDialog';
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

const micImages = [
    require("../assets/mic_1.png"),
    require("../assets/mic_2.png"),
    require("../assets/mic_3.png"),
    require("../assets/mic_4.png"),
];

const cvaImages = [
    require("../assets/cva_1.png"),
    require("../assets/cva_2.png"),
];

const Experience: React.FC = () => {
    const [dialogData, setDialogData] = useState({
        open: false,
        title: '',
        image: '',
        description: '',
        images: [] as string[],
        link: ''
    });

    const handleCardClick = (title: string, image: string, description: string, images: string[], link: string) => {
        setDialogData({ open: true, title, image, description, images, link });
    };

    const closeDialog = () => {
        setDialogData({ ...dialogData, open: false });
    };
    
  return (
    <div className='experiencia'>
      <h1 className='tab-title'>Experiencia</h1>
        <Timeline position="left">
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    Agosto 2023 - Diciembre 2023
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
                    <CustomCard imgSrc={micLogo} link={'https://mapainteractivocultural.ar/home/events'} 
                    onClick={() => handleCardClick(
                        'Mapa Interactivo Cultural (MIC)',
                        micLogo,
                        'Financiada por "CAMAD - Camara de Industria, Comercio y Turismo de Puerto Madryn.", MIC es una aplicación dirigida al turismo y la comunidad de la provincia de Chubut que consiste en un mapa interactivo de consumos culturales de diferentes ciudades. Se utilizó ReactJS para el frontend, NestJS para el backend y Postgresql para la base de datos.',
                        micImages,
                        'https://mapainteractivocultural.ar/home/events'
                    )}
                    title={'Mapa Interactivo Cultural (MIC)'} description={'CAMAD - Camara de Industria, Comercio y Turismo de Puerto Madryn.'} imgClass='mic-logo'></CustomCard>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    Marzo 2024 - Diciembre 2024
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
                    <CustomCard imgSrc={cvaLogo} link={'https://cvagaming.com.ar/'} 
                    onClick={() => handleCardClick(
                        'CVA Gaming',
                        cvaLogo,
                        'Aplicación web de juegos de casino en línea desarrollada utilizando Python, Flask, Vue.js y MongoDB para la base de datos.',
                        cvaImages,
                        'https://cvagaming.com.ar/'
                    )}
                    title={'CVA Gaming'} description={'CVA Magazine.'} imgClass='cva-logo'></CustomCard>
                </TimelineContent>
            </TimelineItem>
        </Timeline>


        {dialogData.open && (
            <CustomDialog 
                title={dialogData.title} 
                image={dialogData.image} 
                description={dialogData.description}
                open={dialogData.open}
                onClose={closeDialog}
                images={dialogData.images}
                link={dialogData.link}
            />
        )}
    </div>
  );
};

export default Experience;
