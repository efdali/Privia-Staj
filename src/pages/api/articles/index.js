import ARTICLES from '../../../const/articles';

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ articles: ARTICLES });
};
