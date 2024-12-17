import Editor from '@monaco-editor/react'
import React, { useState } from 'react'

const CodeEditor: React.FC = () => {
	const [code, setCode] = useState('//Введите свой текст')

	const handleEditorChange = (value: string | undefined) => {
		setCode(value || '')
	}

	return (
		<Editor
			height='50vh'
			defaultLanguage='javascript'
			value={code}
			onChange={handleEditorChange}
		/>
	)
}

export default CodeEditor
