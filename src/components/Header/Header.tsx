import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Header() {
	return (
		<div className={styles.header}>
			<nav className={styles.links}>
				<NavLink
					className={({ isActive }) =>
						isActive ? `${styles.link} ${styles.active}` : styles.link
					}
					to='/'
				>
					Домой
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? `${styles.link} ${styles.active}` : styles.link
					}
					to='/editor'
				>
					Редактор
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? `${styles.link} ${styles.active}` : styles.link
					}
					to='/about'
				>
					О приложении
				</NavLink>
			</nav>
		</div>
	)
}
