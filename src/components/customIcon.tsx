import React from 'react';
import { Box, Tooltip } from '@mui/material';


interface CustomIconProps {
  color: string;
  children: React.ReactNode;
  title?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ color, children, title }) => {
  return (
    <Tooltip title={<span style={{ fontSize: '13px' }}>{title}</span>} disableFocusListener arrow disableInteractive placement='top' >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: {xs: 30, md: 50},
          height: {xs: 30, md: 50},
          margin: '1%',
          borderRadius: '50%',
          backgroundColor: color,
          color: 'white',
          fontSize: 30,
        }}
      >
        {children}
      </Box>
    </Tooltip>
  );
};

export default CustomIcon;
