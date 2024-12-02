import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Container } from '@mui/material';
import Formacion from './components/formacion';
import Experience from './components/experience';

function App() {
  const [tabValue, setValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabStyle = {
    '&.Mui-selected': {
      color: 'white',
      fontWeight: 'bold',
      zIndex: 4,
    },
  };

  return (
    <div className="App">
      <header className="App-header" >
        <p>
          Portafolio Agustín Medina
        </p>
      </header>
      <Container>
        <div className='tabs-wrapper'>
          <Tabs
          TabIndicatorProps={{
            style: {
              backgroundColor: '#458588',
              height: '100%',
              borderRadius: '30px',
              margin: 'auto',
              transition: 'all 0.3s ease',
            },
          }} 
          value={tabValue} onChange={handleTabChange} className='tabs' centered>
            <Tab label="Formación" 
            sx={tabStyle}
            disableRipple/>
            <Tab 
            sx={tabStyle}
            label="Experiencia" disableRipple/>
            <Tab 
            sx={tabStyle}
            label="Contacto" disableRipple/>
          </Tabs>
        </div>
        <Box className="content">
          {tabValue === 0 && 
            <Formacion></Formacion>
            }
          {tabValue === 1 && 
            <Experience></Experience>
            }
          {tabValue === 2 && <span>
            Contenido de Contacto
            </span>}
        </Box>
      </Container>
    </div>
  );
}

export default App;
