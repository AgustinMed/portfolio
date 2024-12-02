import { Divider, Grid2, IconButton, Typography } from '@mui/material';
import React from 'react';
import { PointerIcon } from './pointerIcon';
import CustomIcon from './customIcon';

const Formacion: React.FC = () => {
  return (
    <div className='experiencia'>
      <h1 className='tab-title'>Formación</h1>
      
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          backgroundColor: '#83A598',
          width: '30%',
          borderRadius: '20px',
          margin: 'auto 0',
          textAlign: 'center',
        }}>
          <h2 style={{color: 'white', margin: 0}}>Estudios secundarios</h2>
        </div>
          <IconButton sx={{height: '50px', width: '50px'}}>
            <PointerIcon/>
          </IconButton>
      </div>

      
      <Divider></Divider>
      <Typography fontSize={'15px'} padding={3} color='white'>
        Completos, Colegio N°728 Alfonsina Storni, Tecnicatura en  informática, Puerto Madryn – Chubut. 
        <br/>
        Título de técnico en informática. 
      </Typography>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          backgroundColor: '#83A598',
          width: '30%',
          borderRadius: '20px',
          margin: 'auto 0',
          textAlign: 'center',
        }}>
          <h2 style={{color: 'white', margin: 0}}>Estudios universitarios</h2>
        </div>
          <IconButton sx={{height: '50px', width: '50px'}}>
            <PointerIcon/>
          </IconButton>
      </div>
      <Divider></Divider>
      <Typography fontSize={'15px'} padding={3} color='white'>
      Actualmente en 3er - 4to año, Universidad Nacional de  la Patagonia San Juan Bosco, Analista Programador Universitario y Licenciatura en informática, Puerto Madryn – Chubut. 
      </Typography>



    </div>
  );
};

export default Formacion;
