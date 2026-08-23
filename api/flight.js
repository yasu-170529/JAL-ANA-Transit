// NGOのモックデータ（JAL・ANA）
const NGO_MOCK = [
  // JAL系
  {from:'NGO',to:'HND',dep:'07:35',arr:'08:40',dur:65,airline:'JAL',flight:'JAL202'},
  {from:'NGO',to:'HND',dep:'10:35',arr:'11:40',dur:65,airline:'JAL',flight:'JAL204'},
  {from:'NGO',to:'HND',dep:'13:35',arr:'14:40',dur:65,airline:'JAL',flight:'JAL206'},
  {from:'NGO',to:'HND',dep:'16:35',arr:'17:40',dur:65,airline:'JAL',flight:'JAL208'},
  {from:'NGO',to:'HND',dep:'20:55',arr:'22:00',dur:65,airline:'JAL',flight:'JAL210'},
  {from:'HND',to:'NGO',dep:'07:00',arr:'08:05',dur:65,airline:'JAL',flight:'JAL201'},
  {from:'HND',to:'NGO',dep:'09:50',arr:'10:55',dur:65,airline:'JAL',flight:'JAL203'},
  {from:'HND',to:'NGO',dep:'12:50',arr:'13:55',dur:65,airline:'JAL',flight:'JAL205'},
  {from:'HND',to:'NGO',dep:'16:00',arr:'17:05',dur:65,airline:'JAL',flight:'JAL207'},
  {from:'HND',to:'NGO',dep:'19:35',arr:'20:40',dur:65,airline:'JAL',flight:'JAL209'},
  {from:'NGO',to:'NRT',dep:'08:20',arr:'09:30',dur:70,airline:'JAL',flight:'JAL3082'},
  {from:'NGO',to:'NRT',dep:'14:35',arr:'15:55',dur:80,airline:'JAL',flight:'JAL3084'},
  {from:'NRT',to:'NGO',dep:'10:45',arr:'12:00',dur:75,airline:'JAL',flight:'JAL3081'},
  {from:'NRT',to:'NGO',dep:'16:50',arr:'18:05',dur:75,airline:'JAL',flight:'JAL3083'},
  {from:'NGO',to:'CTS',dep:'08:10',arr:'09:55',dur:105,airline:'JAL',flight:'JAL3101'},
  {from:'NGO',to:'CTS',dep:'09:40',arr:'11:25',dur:105,airline:'JAL',flight:'JAL3103'},
  {from:'NGO',to:'CTS',dep:'17:40',arr:'19:25',dur:105,airline:'JAL',flight:'JAL3117'},
  {from:'CTS',to:'NGO',dep:'06:55',arr:'08:40',dur:105,airline:'JAL',flight:'JAL3102'},
  {from:'CTS',to:'NGO',dep:'12:00',arr:'13:45',dur:105,airline:'JAL',flight:'JAL3104'},
  {from:'CTS',to:'NGO',dep:'20:05',arr:'21:50',dur:105,airline:'JAL',flight:'JAL3118'},
  {from:'NGO',to:'OBO',dep:'12:35',arr:'14:20',dur:105,airline:'JAL',flight:'JAL3303'},
  {from:'OBO',to:'NGO',dep:'15:05',arr:'16:55',dur:110,airline:'JAL',flight:'JAL3304'},
  {from:'NGO',to:'OKA',dep:'07:25',arr:'09:30',dur:125,airline:'JTA',flight:'JTA043'},
  {from:'NGO',to:'OKA',dep:'08:30',arr:'10:45',dur:135,airline:'JTA',flight:'JTA045'},
  {from:'NGO',to:'OKA',dep:'15:00',arr:'17:10',dur:130,airline:'JTA',flight:'JTA047'},
  {from:'NGO',to:'OKA',dep:'18:30',arr:'20:40',dur:130,airline:'JTA',flight:'JTA049'},
  {from:'OKA',to:'NGO',dep:'10:20',arr:'12:25',dur:125,airline:'JTA',flight:'JTA044'},
  {from:'OKA',to:'NGO',dep:'14:35',arr:'16:40',dur:125,airline:'JTA',flight:'JTA046'},
  {from:'OKA',to:'NGO',dep:'17:55',arr:'20:00',dur:125,airline:'JTA',flight:'JTA048'},
  {from:'NGO',to:'KMJ',dep:'10:45',arr:'12:10',dur:85,airline:'JAL',flight:'JAL4535'},
  {from:'NGO',to:'KMJ',dep:'14:35',arr:'16:00',dur:85,airline:'JAL',flight:'JAL4537'},
  {from:'KMJ',to:'NGO',dep:'07:15',arr:'08:45',dur:90,airline:'JAL',flight:'JAL4536'},
  {from:'KMJ',to:'NGO',dep:'16:45',arr:'18:15',dur:90,airline:'JAL',flight:'JAL4538'},
  {from:'NGO',to:'KCZ',dep:'18:20',arr:'19:20',dur:60,airline:'JAL',flight:'JAL4517'},
  {from:'KCZ',to:'NGO',dep:'07:40',arr:'08:45',dur:65,airline:'JAL',flight:'JAL4518'},
  // ANA系
  {from:'NGO',to:'HND',dep:'07:20',arr:'08:25',dur:65,airline:'ANA',flight:'ANA086'},
  {from:'NGO',to:'HND',dep:'10:00',arr:'11:05',dur:65,airline:'ANA',flight:'ANA088'},
  {from:'NGO',to:'HND',dep:'13:00',arr:'14:05',dur:65,airline:'ANA',flight:'ANA090'},
  {from:'NGO',to:'HND',dep:'16:00',arr:'17:05',dur:65,airline:'ANA',flight:'ANA092'},
  {from:'NGO',to:'HND',dep:'19:00',arr:'20:05',dur:65,airline:'ANA',flight:'ANA094'},
  {from:'HND',to:'NGO',dep:'07:30',arr:'08:35',dur:65,airline:'ANA',flight:'ANA085'},
  {from:'HND',to:'NGO',dep:'10:30',arr:'11:35',dur:65,airline:'ANA',flight:'ANA087'},
  {from:'HND',to:'NGO',dep:'13:30',arr:'14:35',dur:65,airline:'ANA',flight:'ANA089'},
  {from:'HND',to:'NGO',dep:'16:30',arr:'17:35',dur:65,airline:'ANA',flight:'ANA091'},
  {from:'HND',to:'NGO',dep:'19:30',arr:'20:35',dur:65,airline:'ANA',flight:'ANA093'},
  {from:'NGO',to:'NRT',dep:'14:00',arr:'15:20',dur:80,airline:'ANA',flight:'ANA494'},
  {from:'NRT',to:'NGO',dep:'11:30',arr:'12:50',dur:80,airline:'ANA',flight:'ANA493'},
  {from:'NGO',to:'CTS',dep:'07:45',arr:'09:30',dur:105,airline:'ANA',flight:'ANA701'},
  {from:'NGO',to:'CTS',dep:'08:40',arr:'10:25',dur:105,airline:'ANA',flight:'ANA703'},
  {from:'NGO',to:'CTS',dep:'10:20',arr:'12:10',dur:110,airline:'ANA',flight:'ANA705'},
  {from:'NGO',to:'CTS',dep:'13:45',arr:'15:30',dur:105,airline:'ANA',flight:'ANA707'},
  {from:'NGO',to:'CTS',dep:'15:30',arr:'17:10',dur:100,airline:'ANA',flight:'ANA4835'},
  {from:'NGO',to:'CTS',dep:'17:35',arr:'19:20',dur:105,airline:'ANA',flight:'ANA715'},
  {from:'NGO',to:'CTS',dep:'19:20',arr:'21:05',dur:105,airline:'ANA',flight:'ANA717'},
  {from:'CTS',to:'NGO',dep:'06:50',arr:'08:35',dur:105,airline:'ANA',flight:'ANA702'},
  {from:'CTS',to:'NGO',dep:'10:55',arr:'12:40',dur:105,airline:'ANA',flight:'ANA704'},
  {from:'CTS',to:'NGO',dep:'13:55',arr:'15:40',dur:105,airline:'ANA',flight:'ANA706'},
  {from:'CTS',to:'NGO',dep:'18:00',arr:'19:45',dur:105,airline:'ANA',flight:'ANA716'},
  {from:'NGO',to:'AKJ',dep:'09:00',arr:'10:50',dur:110,airline:'ANA',flight:'ANA325'},
  {from:'AKJ',to:'NGO',dep:'11:45',arr:'13:35',dur:110,airline:'ANA',flight:'ANA326'},
  {from:'NGO',to:'MMB',dep:'14:05',arr:'16:00',dur:115,airline:'ANA',flight:'ANA327'},
  {from:'MMB',to:'NGO',dep:'16:45',arr:'18:45',dur:120,airline:'ANA',flight:'ANA328'},
  {from:'NGO',to:'HKD',dep:'11:15',arr:'12:45',dur:90,airline:'ANA',flight:'ANA4827'},
  {from:'NGO',to:'HKD',dep:'16:05',arr:'17:35',dur:90,airline:'ANA',flight:'ANA499'},
  {from:'HKD',to:'NGO',dep:'08:15',arr:'09:50',dur:95,airline:'ANA',flight:'ANA4828'},
  {from:'HKD',to:'NGO',dep:'18:25',arr:'20:00',dur:95,airline:'ANA',flight:'ANA500'},
  {from:'NGO',to:'SDJ',dep:'08:15',arr:'09:30',dur:75,airline:'ANA',flight:'ANA361'},
  {from:'NGO',to:'SDJ',dep:'11:50',arr:'13:05',dur:75,airline:'ANA',flight:'ANA363'},
  {from:'NGO',to:'SDJ',dep:'12:45',arr:'13:50',dur:65,airline:'ANA',flight:'ANA3121'},
  {from:'NGO',to:'SDJ',dep:'13:40',arr:'14:45',dur:65,airline:'ANA',flight:'ANA3123'},
  {from:'NGO',to:'SDJ',dep:'20:05',arr:'21:10',dur:65,airline:'ANA',flight:'ANA3125'},
  {from:'SDJ',to:'NGO',dep:'07:30',arr:'08:45',dur:75,airline:'ANA',flight:'ANA362'},
  {from:'SDJ',to:'NGO',dep:'10:20',arr:'11:35',dur:75,airline:'ANA',flight:'ANA364'},
  {from:'SDJ',to:'NGO',dep:'15:10',arr:'16:25',dur:75,airline:'ANA',flight:'ANA3122'},
  {from:'NGO',to:'AXT',dep:'09:15',arr:'10:35',dur:80,airline:'ANA',flight:'ANA4685'},
  {from:'NGO',to:'AXT',dep:'15:35',arr:'16:55',dur:80,airline:'ANA',flight:'ANA4687'},
  {from:'AXT',to:'NGO',dep:'07:30',arr:'08:55',dur:85,airline:'ANA',flight:'ANA4686'},
  {from:'AXT',to:'NGO',dep:'17:35',arr:'18:55',dur:80,airline:'ANA',flight:'ANA4688'},
  {from:'NGO',to:'FUK',dep:'08:00',arr:'09:30',dur:90,airline:'ANA',flight:'ANA3859'},
  {from:'NGO',to:'FUK',dep:'12:10',arr:'13:35',dur:85,airline:'ANA',flight:'ANA3863'},
  {from:'NGO',to:'FUK',dep:'13:55',arr:'15:20',dur:85,airline:'ANA',flight:'ANA3159'},
  {from:'NGO',to:'FUK',dep:'18:00',arr:'19:30',dur:90,airline:'ANA',flight:'ANA3869'},
  {from:'NGO',to:'FUK',dep:'19:20',arr:'20:45',dur:85,airline:'ANA',flight:'ANA447'},
  {from:'NGO',to:'FUK',dep:'19:50',arr:'21:25',dur:95,airline:'ANA',flight:'ANA4655'},
  {from:'FUK',to:'NGO',dep:'07:00',arr:'08:35',dur:95,airline:'ANA',flight:'ANA3858'},
  {from:'FUK',to:'NGO',dep:'10:30',arr:'12:00',dur:90,airline:'ANA',flight:'ANA3862'},
  {from:'FUK',to:'NGO',dep:'16:00',arr:'17:30',dur:90,airline:'ANA',flight:'ANA3160'},
  {from:'FUK',to:'NGO',dep:'21:00',arr:'22:30',dur:90,airline:'ANA',flight:'ANA448'},
  {from:'NGO',to:'NGS',dep:'07:20',arr:'08:45',dur:85,airline:'ANA',flight:'ANA371'},
  {from:'NGO',to:'NGS',dep:'17:55',arr:'19:20',dur:85,airline:'ANA',flight:'ANA373'},
  {from:'NGS',to:'NGO',dep:'09:30',arr:'10:55',dur:85,airline:'ANA',flight:'ANA372'},
  {from:'NGS',to:'NGO',dep:'19:55',arr:'21:20',dur:85,airline:'ANA',flight:'ANA374'},
  {from:'NGO',to:'OIT',dep:'09:20',arr:'10:30',dur:70,airline:'ANA',flight:'ANA3161'},
  {from:'NGO',to:'OIT',dep:'17:45',arr:'18:55',dur:70,airline:'ANA',flight:'ANA3165'},
  {from:'OIT',to:'NGO',dep:'07:30',arr:'08:45',dur:75,airline:'ANA',flight:'ANA3162'},
  {from:'OIT',to:'NGO',dep:'19:35',arr:'20:45',dur:70,airline:'ANA',flight:'ANA3166'},
  {from:'NGO',to:'KMJ',dep:'10:45',arr:'12:10',dur:85,airline:'ANA',flight:'ANA4533'},
  {from:'NGO',to:'KMJ',dep:'14:35',arr:'16:00',dur:85,airline:'ANA',flight:'ANA4535'},
  {from:'KMJ',to:'NGO',dep:'07:15',arr:'08:45',dur:90,airline:'ANA',flight:'ANA4534'},
  {from:'KMJ',to:'NGO',dep:'16:45',arr:'18:15',dur:90,airline:'ANA',flight:'ANA4536'},
  {from:'NGO',to:'KMI',dep:'09:30',arr:'10:45',dur:75,airline:'ANA',flight:'ANA2507'},
  {from:'NGO',to:'KMI',dep:'13:00',arr:'14:25',dur:85,airline:'ANA',flight:'ANA4689'},
  {from:'NGO',to:'KMI',dep:'19:40',arr:'21:00',dur:80,airline:'ANA',flight:'ANA2509'},
  {from:'KMI',to:'NGO',dep:'07:30',arr:'08:50',dur:80,airline:'ANA',flight:'ANA2508'},
  {from:'KMI',to:'NGO',dep:'15:10',arr:'16:30',dur:80,airline:'ANA',flight:'ANA4690'},
  {from:'NGO',to:'KOJ',dep:'08:10',arr:'09:30',dur:80,airline:'ANA',flight:'ANA2515'},
  {from:'NGO',to:'KOJ',dep:'13:10',arr:'14:40',dur:90,airline:'ANA',flight:'ANA351'},
  {from:'NGO',to:'KOJ',dep:'18:25',arr:'19:45',dur:80,airline:'ANA',flight:'ANA2517'},
  {from:'KOJ',to:'NGO',dep:'07:00',arr:'08:25',dur:85,airline:'ANA',flight:'ANA2516'},
  {from:'KOJ',to:'NGO',dep:'15:30',arr:'16:55',dur:85,airline:'ANA',flight:'ANA352'},
  {from:'KOJ',to:'NGO',dep:'20:30',arr:'21:55',dur:85,airline:'ANA',flight:'ANA2518'},
  {from:'NGO',to:'OKA',dep:'07:10',arr:'09:15',dur:125,airline:'ANA',flight:'ANA1127'},
  {from:'NGO',to:'OKA',dep:'08:20',arr:'10:35',dur:135,airline:'ANA',flight:'ANA303'},
  {from:'NGO',to:'OKA',dep:'12:15',arr:'14:35',dur:140,airline:'ANA',flight:'ANA2521'},
  {from:'NGO',to:'OKA',dep:'14:45',arr:'17:00',dur:135,airline:'ANA',flight:'ANA309'},
  {from:'NGO',to:'OKA',dep:'17:35',arr:'19:50',dur:135,airline:'ANA',flight:'ANA311'},
  {from:'OKA',to:'NGO',dep:'07:30',arr:'09:45',dur:135,airline:'ANA',flight:'ANA1128'},
  {from:'OKA',to:'NGO',dep:'11:20',arr:'13:30',dur:130,airline:'ANA',flight:'ANA304'},
  {from:'OKA',to:'NGO',dep:'15:25',arr:'17:35',dur:130,airline:'ANA',flight:'ANA310'},
  {from:'OKA',to:'NGO',dep:'20:30',arr:'22:40',dur:130,airline:'ANA',flight:'ANA312'},
  {from:'NGO',to:'MMY',dep:'11:35',arr:'14:00',dur:145,airline:'ANA',flight:'ANA329'},
  {from:'MMY',to:'NGO',dep:'14:50',arr:'17:20',dur:150,airline:'ANA',flight:'ANA330'},
  {from:'NGO',to:'ISG',dep:'10:55',arr:'13:30',dur:155,airline:'ANA',flight:'ANA579'},
  {from:'ISG',to:'NGO',dep:'14:20',arr:'16:55',dur:155,airline:'ANA',flight:'ANA580'},
];

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=3600');

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
    const odptData = await response.json();

    // ODPTデータをパース
    const JAL_ALS = ['JAL','JTA','JAC','RAC'];
    const ANA_ALS = ['ANA','AJX'];

    function airlineFromFlight(fNum, opKey) {
      if (!fNum) return opKey === 'JAL' ? 'JAL' : 'ANA';
      const p = fNum.replace(/[0-9]/g, '').toUpperCase();
      return {JL:'JAL',NU:'JTA',JC:'JAC',RC:'RAC',NH:'ANA',EL:'AJX'}[p] || (opKey === 'JAL' ? 'JAL' : 'ANA');
    }

    // ODPTデータをフラット化
    const odptFlights = [];
    if (Array.isArray(odptData)) {
      odptData.forEach(item => {
        const origin = (item['odpt:originAirport'] || '').replace(/^odpt\.[^:]+:/, '');
        const dest = (item['odpt:destinationAirport'] || '').replace(/^odpt\.[^:]+:/, '');
        (item['odpt:flightScheduleObject'] || []).forEach(obj => {
          const dep = obj['odpt:originTime'];
          const arr = obj['odpt:destinationTime'];
          if (!dep || !arr) return;
          const fNums = obj['odpt:flightNumber'] || [];
          const fNum = Array.isArray(fNums) ? fNums[0] : fNums;
          const airline = airlineFromFlight(fNum, operator);
          const depMin = parseInt(dep.split(':')[0]) * 60 + parseInt(dep.split(':')[1]);
          let arrMin = parseInt(arr.split(':')[0]) * 60 + parseInt(arr.split(':')[1]);
          if (arrMin < depMin) arrMin += 1440;
          odptFlights.push({
            id: `${origin}${dest}${dep}${fNum}`,
            from: origin, to: dest,
            dep, arr, depMin, arrMin,
            dur: arrMin - depMin,
            airline, flight: fNum || operator,
            calendar: (item['odpt:calendar'] || '').replace('odpt.Calendar:', ''),
            validFrom: obj['odpt:isValidFrom'] || null,
            validTo: obj['odpt:isValidTo'] || null,
          });
        });
      });
    }

    // NGOモックデータをODPT形式に変換して追加（NGO発着のみ）
    const mockFlights = NGO_MOCK
      .filter(f => (operator === 'JAL' ? ['JAL','JTA','JAC','RAC'] : ['ANA','AJX']).includes(f.airline))
      .map(f => {
        const depMin = parseInt(f.dep.split(':')[0]) * 60 + parseInt(f.dep.split(':')[1]);
        let arrMin = parseInt(f.arr.split(':')[0]) * 60 + parseInt(f.arr.split(':')[1]);
        if (arrMin < depMin) arrMin += 1440;
        return {
          id: `MOCK_${f.from}${f.to}${f.dep}${f.flight}`,
          from: f.from, to: f.to,
          dep: f.dep, arr: f.arr,
          depMin, arrMin, dur: f.dur,
          airline: f.airline, flight: f.flight,
          calendar: 'Everyday',
          validFrom: null, validTo: null,
        };
      });

    // 重複除去してマージ（ODPTデータ優先）
    const odptIds = new Set(odptFlights.map(f => `${f.from}${f.to}${f.dep}`));
    const filteredMock = mockFlights.filter(f => !odptIds.has(`${f.from}${f.to}${f.dep}`));
    const allFlights = [...odptFlights, ...filteredMock];

    return res.status(200).json(allFlights);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
