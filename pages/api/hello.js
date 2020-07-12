module.exports = (req, res) => {
  const { name = 'word' } = req.query;
  res.status(200).send(`hello ${ name }`); 
};