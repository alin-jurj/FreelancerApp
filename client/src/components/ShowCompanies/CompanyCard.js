import React from 'react';
import { Card, CardMedia, CardContent,Typography, Grid, Divider } from '@material-ui/core';
import GlobalStyle from '../LandingPage/GlobalStyle';
import  useStyle from './styles';
import { useHistory } from 'react-router-dom';

const CompanyCard = ({company}) => {
    const classes = useStyle();
    const history = useHistory();

    const handleClick = () => {
        console.log('click');
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
                        <Typography className={classes.hover} variant="h6" style={{fontFamily:'Nunito'}} onClick={handleClick}>{company.name}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
        </>
    );
}

export default CompanyCard;
