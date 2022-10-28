import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'


function TabPanel(props) {
  
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };


  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%'
    }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Segunda-feira" {...a11yProps(0)} />
          <Tab label="Terça-feira" {...a11yProps(1)} />
          <Tab label="Quarta-feira" {...a11yProps(2)} />
          <Tab label="Quinta-feira" {...a11yProps(3)} />
          <Tab label="Sexta-feira" {...a11yProps(4)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={1.5}
          paddingBottom='10px'
        >
          <Button variant="contained" onClick={() => {
            alert('Squads • Segunda-feira - 18:00 \n Squad - Porto Digital: \n Athos, \n Davi, \n Eli, \n Natalia, \n Rian, \n Miguel, \n Daniel, \n Hernande,');
          }}
          >18:00</Button>
          <Button variant="contained">18:30</Button>
          <Button variant="contained">19:00</Button>
          <Button variant="contained">19:30</Button>
          <Button variant="contained">20:00</Button>
          <Button variant="contained">20:30</Button>
          <Button variant="contained">21:00</Button>
          <Button variant="contained">21:30</Button>
        </Stack>

      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
        </Stack>
      </TabPanel>
    </Box>
  );
}