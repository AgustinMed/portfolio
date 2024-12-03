import { Divider, Grid2, IconButton, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import { PointerIcon } from './pointerIcon';
import CustomIcon from './customIcon';

const Formacion: React.FC = () => {
  return (
    <div className='experiencia'>
      <h1 className='tab-title'>Formación</h1>
      <div className='div-container-f'>
        <div className='div-subtititle-item'>
          <h2 style={{color: 'white', margin: 0}}>Estudios secundarios</h2>
        </div>
          <IconButton sx={{height: '50px', width: '50px'}}>
            <PointerIcon/>
          </IconButton>
      </div>
      <Divider></Divider>
      <div className='paragraph-container'>
        <Typography className='paragraph-typography'>
          Completos, Colegio N°728 Alfonsina Storni, Tecnicatura en  informática, Puerto Madryn – Chubut. 
          <br/>
          Título de técnico en informática. 
        </Typography>
      </div>
      <div className='div-container-f'>
        <div className='div-subtititle-item'>
          <h2 style={{color: 'white', margin: 0}}>Estudios universitarios</h2>
        </div>
          <IconButton sx={{height: '50px', width: '50px'}}>
            <PointerIcon/>
          </IconButton>
      </div>
      <Divider></Divider>
      <div className='paragraph-container'>
        <Typography className='paragraph-typography'>
          Actualmente en 3er - 4to año, Universidad Nacional de la Patagonia San Juan Bosco, 
          Analista Programador Universitario y Licenciatura en informática, Puerto Madryn – Chubut.
          <br/>
          <br/>
          Porcentaje de la carrera "APU" (Analista Programador Universitario): 83.33%
          <br/>
          Porcentaje de la carrera "Licenciatura en informática": 51.52%
        </Typography>
      </div>
    </div>
  );
};

export default Formacion;
