import * as React from 'react';
import {useState} from 'react';
import { styled } from '@material-ui/styles';
import { Card, CardMedia, CardActions, CardContent, Button, Typography, IconButton, Grid, Link } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteCreditCard } from '../../../actions/CreditCard';
import Transilvania from '../../../img/mainPage/Transilvania.png'
import BRD from '../../../img/mainPage/BRD.png'
import alpha from '../../../img/mainPage/alpha.jpg'
export default function DesignCard({project}) {
    const [expanded, setExpanded] = useState(false);
    const dispatch = useDispatch();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            {   (project.bank=="Transilvania")? ( 
                <CardMedia component="img" height="300" width="500" src={Transilvania}/>
                ):
                (project.bank=="BRD") ? (
                <CardMedia component="img" height="300" width="700" src={BRD}/>
                ):
                (project.bank=="Alpha Bank") ? (
                <CardMedia component="img" height="300" width="700" src={alpha}/>
                ):
                <CardMedia component="img" height="300" width="700" src={alpha}/>
               
            }
            <Grid container justifyContent="flex-end">
                <Grid item xs={6}>
                    <CardContent>
                        <Typography variant="body2" style={{fontFamily:'Nunito'}}>{project.name}</Typography>
                        <Typography variant="body2" style={{fontFamily:'Nunito'}}>IBAN:{project.IBAN}</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={6} alignContent="flex-end">
                    <CardActions>
                        <Button onClick={handleExpandClick}>
                            <IconButton>
                        {
                            expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />
                        }
                            </IconButton>
                        </Button>
                        <Button onClick={() => dispatch(deleteCreditCard(project._id))}>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </Button>
                    </CardActions>
                </Grid>
                </Grid>
        </Card>
    );
}