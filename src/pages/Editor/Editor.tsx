import Dropdown from '../../components/Dropdown/Dropdown'
import { TaskSheet } from '../../components/TaskSheet/TaskSheet'
import styles from './Editor.module.scss'

export default function Editor() {
	return (
		<div className={styles.editor}>
			<Dropdown />
			<TaskSheet />
		</div>
	)
}
