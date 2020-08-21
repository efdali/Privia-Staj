import JOBS from '../../const/jobs';

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ jobs: JOBS });
};
