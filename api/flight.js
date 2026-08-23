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
    const text = await response.text();
    
    // デバッグ：最初の200文字を確認
    return res.status(200).json({ 
      status: response.status,
      preview: text.substring(0, 200),
      tokenLength: token.length
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
