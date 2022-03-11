import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Review from './Review';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

import GaugeChart from 'react-gauge-chart'
import { Container, Stack } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));





class Booking extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showPredictions: false}
    }

    render() {
        
        const data = this.props.data.prediction.map((x) => (
            <ListItem>
                <ListItemText primary={"time slot: " + x.time} secondary={"occupancy: " + x.occupancy} />
                <Box sx={{ width: '50%' }}>
                    <LinearProgress variant="determinate" value={x.occupancy * 100} color={x.kind}/>
                </Box>
            </ListItem>
        ))



        return <div><AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => this.props.setMapView()}
                >
                  <ArrowBackIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {this.props.data.name}
                </Typography>
              </Toolbar>
            </AppBar>

                <Box>
                <Container>
                    <br />
                <Stack direction="row" spacing={2}>
                    <Item elevation={15} style={{padding: "2rem"}}>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                    {this.props.data.name}
                    </Typography>    
                    <img src={this.props.data.img} alt="s" />

                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            Current Occupancy: {this.props.data.used} / {this.props.data.space}
                        </Typography>
                        <GaugeChart id="gauge-chart3" 
                            nrOfLevels={10} 
                            percent={this.props.data.used / this.props.data.space}
                            textColor="gray"
                            />
                            <br /><br /><br />
                        <Button
                        onClick={() => this.props.setBookingView()}
                        >Reserve now</Button>
                    </Item>
                    <Item elevation={15} style={{padding: "3rem"}}>
                            {this.state.showPredictions ?
                            <Box>
                                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                                Occupancy Forecast
                            </Typography>
                            
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            
                            {data}
                            
                            </List>
                            </Box>
                            :
                            <Button style={{paddingTop: "3rem"}} onClick={() => {this.setState({showPredictions: true})}}>Show Predicitons</Button>
                            }

                    </Item>
                </Stack>
                </Container>
                
                </Box>
            </div>

    }
}


export default Booking;