import React, {useState } from 'react';
import { Card, CardMedia, CardContent,Typography, Grid, Divider, CardActions, Button, IconButton } from '@material-ui/core';
import GlobalStyle from '../LandingPage/GlobalStyle';
import  useStyle from './styles';
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../actions/user';

const CompanyCard = ({company}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyle();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        history.push(`/company/${company._id}`);
    }

    return (
        <>
        <GlobalStyle />
        <Card>
            <CardMedia component="img" height="200" src={company.photo} />
            <Divider variant="middle" style={{marginTop: '10px'}} />
            <Grid container justifyContent="flex-start">
                <Grid item xs={6}>
                    <CardContent>
                        {
                            company.type === 'company' ? (
                                <Typography className={classes.hover} variant="h6" style={{fontFamily:'Nunito'}} onClick={handleClick}>{company.name}</Typography>
                            ) : (
                                <Typography className={classes.hover} variant="h6" style={{fontFamily:'Nunito'}} >{company.name}</Typography>
                            )
                        }
                    </CardContent>
                </Grid>
                <Grid item xs={6}>
                    {
                        user.result.type === 'admin' && (
                            <CardActions>
                        <Button onClick={() => dispatch(deleteUser(company._id))}>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </Button>
                    </CardActions>
                        )
                    }
                </Grid>
            </Grid>
        </Card>
        </>
    );
}

export default CompanyCard;
