import { Avatar, Divider, Grid2, IconButton, List, ListItem, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { PointerIcon } from './pointerIcon';
import CustomIcon from './customIcon';
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
    FaJava,
    
  } from "react-icons/fa";
  import { RiNextjsFill } from "react-icons/ri";
  import {
    SiPostgresql,
    SiNestjs,
    SiFlask,
    SiSpring,
    SiMongodb,
    SiMinio,
    SiTypescript,
  } from "react-icons/si";

const Conocimientos: React.FC = () => {
  return (
    <div className='experiencia'>
      <h1 className='tab-title' style={{marginTop: '5%'}}>Conocimientos</h1>
      <div className="icon-container">
        <CustomIcon color={'#3A75B0'} title='Java'><FaJava size={'70%'} /></CustomIcon>
        <CustomIcon color={'#F9DC43'} title='Javascript'><FaJs size={'60%'} /></CustomIcon>
        <CustomIcon color={'#DD4B25'} title='HTML5'><FaHtml5 size={'60%'} /></CustomIcon>
        <CustomIcon color={'#C2E0F2'} title='CSS'><FaCss3Alt size={'60%'} /></CustomIcon>
        <CustomIcon color={'#DE0837'} title='Angular'><FaAngular size={'60%'} /></CustomIcon>
        <CustomIcon color={'#FFD448'} title='Python'><FaPython size={'60%'} /></CustomIcon>
        <CustomIcon color={'#58C4DC'} title='React'><FaReact size={'60%'} /></CustomIcon>
        <CustomIcon color={'#09B680'} title='VueJs'><FaVuejs size={'60%'} /></CustomIcon>
        <CustomIcon color={'#87D030'} title='NodeJs'><FaNodeJs size={'60%'} /></CustomIcon>
        <CustomIcon color={'#010101'} title='Flask'><SiFlask size={'60%'} /></CustomIcon>
        <CustomIcon color={'#E0224E'} title='NestJs'><SiNestjs size={'60%'} /></CustomIcon>
        <CustomIcon color={'#E0224E'} title='NextJs'><RiNextjsFill size={'60%'} /></CustomIcon>
        <CustomIcon color={'#3179C7'} title='Typescript'><SiTypescript size={'60%'} /></CustomIcon>
        <CustomIcon color={'#68BE4C'} title='Spring'><SiSpring size={'60%'} /></CustomIcon>
        <CustomIcon color={'#316192'} title='Postgresql'><SiPostgresql size={'60%'} /></CustomIcon>
        <CustomIcon color={'#52AC43'} title='MongoDB'><SiMongodb size={'60%'} /></CustomIcon>
        <CustomIcon color={'#C63F50'} title='Minio'><SiMinio size={'60%'} /></CustomIcon>
        <CustomIcon color={'#F15639'} title='Git'><FaGitAlt size={'60%'} /></CustomIcon>
      </div>
      
      
    </div>
  );
};

export default Conocimientos;
