import { FC } from 'react'
import { useParams } from 'react-router-dom'
import InputWindow from '../../components/InputWindow/InputWindow'
import tasks from '../../task.json'
import styles from './TaskPage.module.scss'

export const TaskPage: FC = () => {
	const { taskId } = useParams<{ taskId: string }>()
	const task = tasks.find(task => task.number.toString() === taskId)

	if (!task) {
		return <div>Задача не найдена</div>
	}

	return (
		<div className={styles.taskPage}>
			<div className={styles.left_block}>
				<p className={styles.language}>Язык: {task.lang}</p>
				<p className={styles.number}>Задача номер: {task.number}</p>
				<p className={styles.description}>Описание: {task.description}</p>
			</div>
			<div className={styles.right_block}>
				<InputWindow />
			</div>
		</div>
	)
}
