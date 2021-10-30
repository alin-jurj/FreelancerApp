import * as React from 'react';
import {useState} from 'react';
import { styled } from '@material-ui/styles';
import { Card, CardMedia, CardActions, CardContent, Button, Typography, IconButton, Grid, Link } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteCreditCard } from '../../../actions/CreditCard';

export default function DesignCard({project}) {
    const [expanded, setExpanded] = useState(false);
    const dispatch = useDispatch();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardMedia component="img" height="200" src={project.photo} />
            <Grid container justifyContent="flex-end">
                <Grid item xs={6}>
                    <CardContent>
                        <Typography variant="body2" style={{fontFamily:'Nunito'}}>{project.name}</Typography>
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