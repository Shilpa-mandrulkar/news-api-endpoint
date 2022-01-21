const express = require('express');
const app = express();
const port = 5000;
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('b0b1de14457e4cf89fd4d163ede57e05');

const getNews = async (queries) => {
  return await newsapi.v2.topHeadlines({
    category: queries.category,
    language: 'en',
    country: queries.country,
  });
};
app.get('/news-api', async (req, res) => {
  const queries = req.query;
  const news = await getNews(queries);
  console.log(news);
  res.json(news);
});
app.listen(port, () => console.log(`Example app Listening on port ${port}!`));
