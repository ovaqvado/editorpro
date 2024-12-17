import { TaskSheet } from '../../components/TaskSheet/TaskSheet'
import styles from './Editor.module.scss'

export default function Editor() {
	return (
		<div className={styles.editor}>
			<TaskSheet />
		</div>
	)
}
