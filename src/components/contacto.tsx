import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import CustomIcon from './customIcon';

const Contacto: React.FC = () => {
  return (
    <div className='experiencia'>
      <h1 className='tab-title'>Redes y contacto</h1>
            <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{backgroundColor: '#1E3B3C'}}>
                        <i className="bi bi-envelope-at"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="E-mail" primaryTypographyProps={{color: 'white'}} secondary="medina.4gus@gmail.com"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{backgroundColor: '#1E3B3C'}}>
                        <i className="bi bi-telephone"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Teléfono" primaryTypographyProps={{color: 'white'}} secondary="(0280) 154 84 51 08."
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{backgroundColor: '#1E3B3C'}}>
                        <i className="bi bi-linkedin"></i>
                    </Avatar>
                  </ListItemAvatar>
                  <a href='https://www.linkedin.com/in/agust%C3%ADn-medina-3345562a5/' target="_blank" style={{textDecoration: 'none'}}>
                    <ListItemText
                        primary="LinkedIn" primaryTypographyProps={{color: 'white'}} secondary="www.linkedin.com/in/agustín-medina-3345562a5"
                    />
                  </a>

                  
                </ListItem>
            </List>

        

    </div>
  );
};

export default Contacto;
