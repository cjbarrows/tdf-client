/*eslint-disable react/react-in-jsx-scope*/
import { BrowserRouter, Route } from 'react-router-dom'

import SprintView from '../containers/SprintView'

/*
const MainNonRedux = (props) => (
	<main>
		<SprintView activeRider="1" riders={props.allRiders}/>
	</main>
)
*/

const Main = () => (
	<BrowserRouter>
		<Route exact path="/sprint" component={SprintView}/>
	</BrowserRouter>
)

export default Main