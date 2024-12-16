import styles from './App.module.scss'
import Header from './components/Header/Header'
import Routers from './Router'

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<Routers />
		</div>
	)
}

export default App
