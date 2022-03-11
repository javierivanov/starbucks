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
import TextField from '@mui/material/TextField';
import GaugeChart from 'react-gauge-chart'
import { Container, Link, Stack } from '@mui/material';

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
        this.state = {showReservation: false, reservedBy: ""}
    }




    render() {
        
        return <div><AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => this.props.setVenueView(this.props.data)}
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
                    
                <Stack direction="row" spacing={2}>
                    <Item elevation={15} style={{padding: "2rem"}}>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                    {this.props.data.name}
                    </Typography>
                    <br />
                    <br />
                    <br />
                    {this.state.showReservation ?
                    <Box>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Reserved by: {this.state.reservedBy}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        This is your Zoom pro session available for 1 hour.
                        </Typography>
                        <Link>https://asu.zoom.us/j/81147371994</Link>
                    </Box>
                    :
                    <Box>
                        <TextField id="outlined-basic" label="Your Name" variant="outlined" onChange={(x) => this.setState({reservedBy: x.target.value})}/>
                        
                        {this.props.data.used < this.props.data.space ?
                        <Button onClick={() => {this.props.data.used = this.props.data.used + 1; this.setState({showReservation: true })}}>Reserve token</Button>    
                            :
                        <Button disabled={true}>No Available Tokens</Button>    
                        }
                    </Box>
                    }
                    </Item>
                </Stack>
                </Container>
                
                </Box>
            </div>

    }
}


export default Booking;