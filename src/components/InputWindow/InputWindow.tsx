import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/go/go'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/python/python'
import 'codemirror/theme/material.css'
import { FC, useState } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'

const languages = ['javascript', 'python', 'go']

export const InputWindow: FC = () => {
	const [code, setCode] = useState('// Ваш код тут')
	const [language, setLanguage] = useState('javascript')
	return (
		<div>
			<select onChange={e => setLanguage(e.target.value)} value={language}>
				{languages.map(lang => (
					<option key={lang} value={lang}>
						{lang}
					</option>
				))}
			</select>
			<CodeMirror
				value={code}
				options={{
					mode: language,
					theme: 'material',
					lineNumbers: true,
					tabSize: 2,
					editable: true,
				}}
				onBeforeChange={(editor, data, value) => {
					setCode(value)
				}}
			/>
			<button onClick={() => console.log(code)}>Проверить код</button>
		</div>
	)
}
