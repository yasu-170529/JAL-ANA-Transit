// api/flight.js
// このファイルがサーバー側で動きます。トークンはユーザーに見えません。

export default async function handler(req, res) {
  // CORSヘッダー（ブラウザからのアクセスを許可）
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { operator } = req.query;

  // operatorのバリデーション（JALまたはANAのみ許可）
  if (!operator || !['JAL', 'ANA'].includes(operator)) {
    return res.status(400).json({ error: 'operatorはJALまたはANAを指定してください' });
  }

  // トークンはVercelの環境変数から取得（外部には公開されない）
  const token = process.env.ODPT_TOKEN;
  if (!token) {
    return res.status(500).json({ error: 'サーバー設定エラー：トークンが設定されていません' });
  }

  try {
    const url = `https://api.odpt.org/api/v4/odpt:FlightSchedule?odpt:operator=odpt.Operator:${operator}&acl:consumerKey=${token}`;
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).json({ error: `ODPTエラー: ${response.status}` });
    }

    const data = await response.json();

    // キャッシュ設定（1時間キャッシュ）
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({ error: 'データ取得に失敗しました: ' + error.message });
  }
}
