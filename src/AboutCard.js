import React from 'react'
// ....card...
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//........card end......
import ecareimg from './images/imgs/ecare1.jpg';
// import ecareimg1 from './images/imgs/ecare2.jpg';


const useStyles = makeStyles({
    root: {
        maxWidth: 370,
        backgroundColor: '#ffff',
        boxShadow: '0 0 10px rgb(0 0 0 / 20%)'
    },
    media: {
        height: 140,
    },
});


const AboutCard = () => {
    const classes = useStyles();
    return (

        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={ecareimg}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography className='headings-color' gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className='headings-color' size="small" color="primary">
                    Share
                </Button>
                <Button className='headings-color' size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>

    )
}

export default AboutCard