var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var request = require("request-promise");
const API_URL = `https://economia.awesomeapi.com.br/json/list/`;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.post('/endpoint', async function (req, res) {
	try{
		let result = await getRangePriceOfCoin(req.body);
		console.log(result)
		res.send(result);
	} catch(e){
		res.status(500);
		console.error(e)
		res.send(e);
	}
});

async function getRangePriceOfCoin(coin, rangeLastDays){
	let data = await requestCoinValues(coin, rangeLastDays);
	return formartDataDate(data);
}

async function requestCoinValues(coin, days){
	let url = insertCoinAndDaysInApiUrl(coin, days);
	return JSON.parse(await request(url));
}

function transformTimestampInDate(timestamp){
	let date = new Date(timestamp * 1000);
	return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

function formartDataDate(data){
	return data.map(function(value){
		value.timestamp = transformTimestampInDate(value.timestamp);
		return value;
	});
}

function insertCoinAndDaysInApiUrl(coin, days){
	return API_URL.concat(coin, "-BRL/", days);
}

server.start = (port) => {
	server.listen(port, function () {
		console.log(`Server iniciado na porta ${port}!`);
	});
}

module.exports = {
	server
};