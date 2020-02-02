import React, { Component } from 'react';
import {
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	AreaChart,
} from 'recharts';

const data = [{"code":"USD","codein":"BRL","name":"Dólar Comercial","high":"4.0717","low":"4.0251","varBid":"0.0412","pctChange":"1.02","bid":"4.0669","ask":"4.0675","timestamp":"1578086997","create_date":"2020-01-03 21:00:02"},{"high":"4.0717","low":"4.0251","varBid":"0.038","pctChange":"0.94","bid":"4.0627","ask":"4.0652","timestamp":"1578056224"},{"high":"4.0197","low":"4.0054","varBid":"-0.0083","pctChange":"-0.21","bid":"4.0104","ask":"4.0111","timestamp":"1577966614"},{"high":"4.049","low":"4.046","varBid":"0.0034","pctChange":"0.08","bid":"4.048","ask":"4.05","timestamp":"1577706520"},{"high":"4.0615","low":"4.0358","varBid":"-0.0097","pctChange":"-0.24","bid":"4.0456","ask":"4.0463","timestamp":"1577481298"},{"high":"4.0566","low":"4.0358","varBid":"-0.0173","pctChange":"-0.43","bid":"4.0371","ask":"4.0397","timestamp":"1577448374"},{"high":"4.0838","low":"4.0838","varBid":"0","pctChange":"0","bid":"4.0833","ask":"4.0843","timestamp":"1577311202"},{"high":"4.0838","low":"4.0838","varBid":"0","pctChange":"0","bid":"4.0833","ask":"4.0843","timestamp":"1577224802"},{"high":"4.0835","low":"4.0835","varBid":"0","pctChange":"0","bid":"4.0833","ask":"4.0838","timestamp":"1577138401"},{"high":"4.1025","low":"4.1015","varBid":"-0.0007","pctChange":"-0.02","bid":"4.1012","ask":"4.1018","timestamp":"1577102185"}]


export default function SimpleLineChart() {

	return (
		<AreaChart width={730} height={250} data={data}
			margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
			<defs>
				<linearGradient id="colorBid" x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
					<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
				</linearGradient>

			</defs>
			<XAxis dataKey="timestamp"/>
			<YAxis />
			<CartesianGrid strokeDasharray="3 3" />
			<Tooltip />
			<Area type="monotone" dataKey="bid" stroke="#8884d8" fillOpacity={1} fill="url(#colorBid)" />
			<Area type="monotone" dataKey="ask" stroke="#82ca9d" fillOpacity={1} fill="url(#colorAsk)" />
			<Area type="monotone" dataKey="low" stroke="#ffffff" fillOpacity={1} fill="url(#colorLow)" />
			<Area type="monotone" dataKey="high" stroke="#ff0000" fillOpacity={1} fill="url(#colorHigh)" />
		</AreaChart>
	);

}