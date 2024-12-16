import styles from './TaskSheets.module.scss'

export default function TaskSheet() {
	return (
		<div>
			<ol className={styles.list}>
				<li className={styles.task}>
					<p className={styles.num_task}>1.</p>
					<div className={styles.info_btn}>
						<div className={styles.img_text}>
							<img
								className={styles.img_lang}
								src='/src/assets/img/js.png'
								alt='js'
							/>
							<p className={styles.description}>
								Description: Lorem ipsum dolor sit amet consectetur, adipisicing
								elit. Saepe, a eveniet et recusandae amet quisquam provident
								distinctio laborum sequi sit perferendis rerum alias facere
								sint, doloribus, quidem eum. Ducimus, distinctio!
							</p>
						</div>
					</div>
					<button className={styles.btn_run}>Run</button>
				</li>
				<li className={styles.task}>
					<p className={styles.num_task}>1.</p>
					<div className={styles.info_btn}>
						<div className={styles.img_text}>
							<img
								className={styles.img_lang}
								src='/src/assets/img/js.png'
								alt='js'
							/>
							<p className={styles.description}>
								Description: Lorem ipsum dolor sit amet consectetur, adipisicing
								elit. Saepe, a eveniet et recusandae amet quisquam provident
								distinctio laborum sequi sit perferendis rerum alias facere
								sint, doloribus, quidem eum. Ducimus, distinctio!
							</p>
						</div>
					</div>
					<button className={styles.btn_run}>Run</button>
				</li>
				<li className={styles.task}>
					<p className={styles.num_task}>1.</p>
					<div className={styles.info_btn}>
						<div className={styles.img_text}>
							<img
								className={styles.img_lang}
								src='/src/assets/img/js.png'
								alt='js'
							/>
							<p className={styles.description}>
								Description: Lorem ipsum dolor sit amet consectetur, adipisicing
								elit. Saepe, a eveniet et recusandae amet quisquam provident
								distinctio laborum sequi sit perferendis rerum alias facere
								sint, doloribus, quidem eum. Ducimus, distinctio!
							</p>
						</div>
					</div>
					<button className={styles.btn_run}>Run</button>
				</li>
			</ol>
		</div>
	)
}
