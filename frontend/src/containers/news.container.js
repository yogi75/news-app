import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import fetchData from '../apis';
import Search from '../components/news.search';
import NewsComponent from '../components/news.component';
import Footer from '../components/news.footer';
import useStyles from '../utils/style';
import { filterNews } from '../utils';

export default function NewsContainer() {
    const [news, setNews] = useState([]);
    const [response, setResponse] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const querryParams = {
            country: 'us', category: 'business'
        }
        fetchData(querryParams).then(response => {
            console.log("data- ", response);
            response.articles.forEach((item, key) => {
                response.articles[key].key = key + 1;
            })
            setNews(response.articles);
            setResponse(response.articles)
        }).catch(error => {
            console.log(error)
        });

    }, []);

    const setFilteredNews = (filteredNews) => {
        let timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            setNews(filteredNews);
        }, 1000);
    }
    const onChange = (e) => {
        e.preventDefault();
        const searchText = e.target.value.trim();
        const filteredNews = filterNews(searchText, response);
        setFilteredNews(filteredNews);
        // console.log("filteredNews - ", filteredNews)
    }

    return (
        <>
            <CssBaseline />
            <main>
                <Search classes={classes} news={news} onChange={onChange} />
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {news && news.map((item, key) => (
                            <NewsComponent classes={classes} item={item} key={item.key} />
                        ))}
                    </Grid>
                </Container>
            </main>
            <Footer classes={classes} />
        </>
    )
}
