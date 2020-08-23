import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


export default function NewsComponent(props) {
    const { classes, item } = props;
    return (
        <>
            {item && item.urlToImage && <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <Link href={item.url}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={item.urlToImage}
                            title="Image title"
                        />
                    </Link>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                        </Typography>
                        <Typography>
                            {item.description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>}
        </>
    )
}
