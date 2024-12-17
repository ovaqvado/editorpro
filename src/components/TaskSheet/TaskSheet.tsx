import { FC, useState } from 'react'
import { Link } from 'react-router'
import tasks from '../../task.json'
import Dropdown from '../Dropdown/Dropdown'
import styles from './TaskSheets.module.scss'

export const TaskSheet: FC = () => {
	const [selectedLang, setSelectedLang] = useState<string>('')

	const handleLanguageSelect = (lang: string) => {
		setSelectedLang(lang)
	}

	const filteredTasks = selectedLang
		? tasks.filter(
				task => task.lang.toLowerCase() === selectedLang.toLowerCase()
		  )
		: tasks
	return (
		<>
			<Dropdown selectedLang={selectedLang} onSelect={handleLanguageSelect} />
			<ol className={styles.list}>
				{filteredTasks.map(task => (
					<li key={task.number} className={styles.task}>
						<p className={styles.num_task}>{task.number}.</p>
						<div className={styles.info_btn}>
							<div className={styles.img_text}>
								<img
									className={styles.img_lang}
									src={`/src/assets/img/${task.lang.toLowerCase()}.png`}
									alt={task.lang}
								/>
								<p className={styles.description}>{task.description}</p>
							</div>
						</div>
						<Link to={`/task/${task.number}`} className={styles.btn_run}>
							Запустить
						</Link>
					</li>
				))}
			</ol>
		</>
	)
}
