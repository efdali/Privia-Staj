import ARTICLES from '../../../const/articles';

export default (req, res) => {
  const {
    query: { slug },
  } = req;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const articles = ARTICLES.filter(
    (article) => article.category === slug,
  );
  res.json({ articles });
};
