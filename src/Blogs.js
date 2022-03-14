import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BlogsData from './BlogsObj';





const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));




const Blogs = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='container'>
            <h1 className='heading'> Management & Operation Division </h1>

            <div className="row">
                {
                    BlogsData.map((data) => {
                        let { id, image, heading, description } = data;
                        return (
                            <div className="col-lg-4">
                                <Card sx={{ maxWidth: 400 }}>

                                    <CardMedia
                                        component="img"
                                        height="400"
                                        image={image}
                                        alt="blog-img"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            <h2>{heading}</h2>
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>
                                        <ExpandMore
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <Typography paragraph>{heading} </Typography>

                                            <Typography paragraph>{description}</Typography>


                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </div>
                        );
                    })
                }
            </div>
        </div>

    )
}

export default Blogs