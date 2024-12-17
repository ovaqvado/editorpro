import { FC } from 'react'
const languages = ['JS', 'Python', 'Go']

const Dropdown: FC<{
	selectedLang: string
	onSelect: (lang: string) => void
}> = ({ selectedLang, onSelect }) => {
	return (
		<select value={selectedLang} onChange={e => onSelect(e.target.value)}>
			<option value=''>Все языки</option>
			{languages.map(lang => (
				<option key={lang} value={lang}>
					{lang}
				</option>
			))}
		</select>
	)
}

export default Dropdown
