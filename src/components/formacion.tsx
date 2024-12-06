import { Avatar, Divider, Grid2, IconButton, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import { PointerIcon } from './pointerIcon';

const Formacion: React.FC = () => {
  return (
    <div className='experiencia'>
      <h1 className='tab-title'>Formación</h1>
      <div className='div-container-f'>
        <div className='div-subtititle-item'>
          <h2 style={{color: 'white', margin: 0}}>Estudios secundarios</h2>
        </div>
        <a href='https://www.google.com.ar/maps/place/Escuela+N%C2%BA+728+Alfonsina+Storni/@-42.7791513,-65.027112,17z/data=!3m1!4b1!4m6!3m5!1s0xbe024aa7aceb6c71:0x30182d763a77c6c7!8m2!3d-42.7791553!4d-65.0245371!16s%2Fg%2F11c2j2s632?entry=ttu&g_ep=EgoyMDI0MTIwMi4wIKXMDSoASAFQAw%3D%3D' target="_blank">
          <IconButton sx={{height: '50px', width: '50px'}}>
            <Avatar className='avatar-list-icon'>
              <i className="bi bi-geo-alt-fill"></i>
            </Avatar>
          </IconButton>
        </a>
      </div>
      <div className='paragraph-container'>
        <Typography className='paragraph-typography'>
          Completos, Colegio N°728 Alfonsina Storni, Tecnicatura en  informática, Puerto Madryn – Chubut. 
          <br/>
          Título de técnico en informática. 
        </Typography>
      </div>
      <Divider variant='middle' sx={{borderWidth: '1px'}}/>
      <div className='div-container-f'>
        <div className='div-subtititle-item'>
          <h2 style={{color: 'white', margin: 0}}>Estudios universitarios</h2>
        </div>
        <a href='https://www.unp.edu.ar/' target="_blank">
          <IconButton sx={{height: '50px', width: '50px'}}>
            <Avatar className='avatar-list-icon'>
              <i className="bi bi-link-45deg"></i>
            </Avatar>
          </IconButton>
        </a>
      </div>
      <div className='paragraph-container'>
        <Typography className='paragraph-typography'>
          Actualmente en 3er - 4to año, Universidad Nacional de la Patagonia San Juan Bosco, 
          Analista Programador Universitario y Licenciatura en informática, Puerto Madryn – Chubut.
          <br/>
          <br/>
          Porcentaje de la carrera "APU" (Analista Programador Universitario): <b><u>83.33%</u></b>
          <br/>
          Porcentaje de la carrera "Licenciatura en informática": <b><u>51.52%</u></b>
        </Typography>
      </div>
      
    </div>
  );
};

export default Formacion;
