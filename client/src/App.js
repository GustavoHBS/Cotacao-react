import React, { useState } from 'react';
import SimpleLineChart from "./components/graph"
import GlobalStyle from "./styles/global";

export default function App(){
	return (
		<>
			<GlobalStyle/>
				<SimpleLineChart/>
		</>
	)
}

/*export default function App(){
	let [apiDados, setApiDados] = useState();
	function timestampToDate(){
		var date = new Date(unix_timestamp*1000);
	}
	function componentDidMount() {
		this.callApi()
			.then(res => this.setState({ response: res.express }))
			.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('/api/mensagem', {
			method: 'post',

		});
		const body = await response.json();
		if (response.status !== 200) throw Error(body.message);
		return body;
	};


	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
			</header>
			<p className="App-intro">{this.state.response}</p>
		</div>
	);
}*/