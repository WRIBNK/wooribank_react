import { Route } from "react-router-dom";

import Header from "./component/common/Header";
import Footer from "./component/common/Footer";

import Main from "./component/main/Main";

import Card from "./component/sub/Card";
import Company from "./component/sub/Company";
import Finance from "./component/sub/Finance";
import Jasan from "./component/sub/Jasan";
import Mydata from "./component/sub/Mydata";
import Personal from "./component/sub/Personal";
import Plogin from "./component/sub/Plogin";

import "./scss/style.scss";

function App() {
	return (
		<>
			<Header />
			
			<Route exact path="/" component={Main} />
			<Route path="/card" component={Card} />
			<Route path="/company" component={Company} />
			<Route path="/finance" component={Finance} />
			<Route path="/jasan" component={Jasan} />
			<Route path="/mydata" component={Mydata} />
			<Route path="/personal" component={Personal} />
			<Route path="/plogin" component={Plogin} />

			<Footer />
		</>
	);
}

export default App;
