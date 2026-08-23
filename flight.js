module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const operator = req.query.operator;

  if (!operator || !['JAL', 'ANA'].includes(operator)) {
    return res.status(400).json({ error: 'operatorはJALまたはANAを指定してください' });
  }

  const token = process.env.ODPT_TOKEN;
  if (!token) {
    return res.status(500).json({ error: 'トークンが設定されていません' });
  }

  try {
    const url = `https://api.odpt.org/api/v4/odpt:FlightSchedule?odpt:operator=odpt.Operator:${operator}&acl:consumerKey=${token}`;
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader('Cache-Control', 's-maxage=3600');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
