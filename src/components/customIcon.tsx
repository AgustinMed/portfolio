import React from 'react';
import { Box } from '@mui/material';


interface customIconProps {
  color: string;
  children: React.ReactNode;
}

const customIcon: React.FC<customIconProps> = ({ color, children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: {xs: 30, md: 60},
        height: {xs: 30, md: 60},
        margin: '1%',
        borderRadius: '50%',
        backgroundColor: color,
        color: 'white',
        fontSize: 30,
      }}
    >
      {children}
    </Box>
  );
};

export default customIcon;
