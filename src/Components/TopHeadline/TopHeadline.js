import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([])
    // console.log(articles);
    useEffect(() => {
        const url = 'http://newsapi.org/v2/everything?q=apple&from=2021-03-05&to=2021-03-05&sortBy=popularity&apiKey=648a47f69b5046a590f3e4960a2e5418'
        fetch(url)
        .then(response => response.json())
        .then(data => setArticles(data.articles))
    },[])
    return (
        <div>
            <h1>Top Headline News:{articles.length}</h1>
            {
                articles.map(article => <News article={article}> </News>)
            }
        </div>
    );
};

export default TopHeadline;