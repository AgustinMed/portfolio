import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import perfil from '../assets/perfilCV.png';


const Contacto: React.FC = () => {
  return (
    <div className='experiencia'>
      <h1 className='tab-title'>Redes y contacto</h1>
            <img src={perfil} className='contact-image'/>
            <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className='avatar-list-icon'>
                        <i className="bi bi-linkedin"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <a href='https://www.linkedin.com/in/agust%C3%ADn-medina-3345562a5/' target="_blank" style={{textDecoration: 'none'}}>
                    <ListItemText
                        primary="LinkedIn" primaryTypographyProps={{color: 'white'}} secondary="www.linkedin.com/in/agustín-medina-3345562a5"
                    />
                  </a>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className='avatar-list-icon'>
                        <i className="bi bi-github"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <a href='https://github.com/AgustinMed' target="_blank" style={{textDecoration: 'none'}}>
                    <ListItemText
                        primary="GitHub" primaryTypographyProps={{color: 'white'}} secondary="www.github.com/AgustinMed"
                    />
                  </a>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className='avatar-list-icon'>
                        <i className="bi bi-envelope-at"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <a href="mailto:medina.4gus@gmail.com" target="_blank" style={{textDecoration: 'none'}}>
                    <ListItemText
                        primary="E-mail" primaryTypographyProps={{color: 'white'}} secondary="medina.4gus@gmail.com"
                    />
                  </a>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className='avatar-list-icon'>
                        <i className="bi bi-telephone"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Teléfono" primaryTypographyProps={{color: 'white'}} secondary="(0280) 154 84 51 08."
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className='avatar-list-icon'>
                      <i className="bi bi-file-earmark-pdf"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <a
                    href="/assets/cv.pdf"
                    download="Agustin_Medina_CV.pdf"
                    style={{ textDecoration: 'none' }}
                  >
                    <ListItemText
                      primary="Descargar CV"
                      primaryTypographyProps={{ color: 'white' }}
                      secondary="Click para descargar"
                    />
                  </a>
                </ListItem>
            </List>

        

    </div>
  );
};

export default Contacto;
