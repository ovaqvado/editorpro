import styles from './Dropdown.module.scss'

export default function Dropdown() {
	return (
		<div className={styles.dropdown}>
			<span className={styles.sel_lang}>Select language:</span>
			<div className={styles.dropdown_content}>
				<button>Js</button>
				<button>Go</button>
				<button>Python</button>
			</div>
		</div>
	)
}
