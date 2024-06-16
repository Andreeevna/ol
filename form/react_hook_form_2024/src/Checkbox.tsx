import { Control, Controller } from 'react-hook-form'
import { IForm } from './App'

interface Props {
	control: Control<IForm>
	// register: UseFormRegister<IForm>
}

export const Checkbox = ({ control }: Props) => {
	return (
		<Controller
			control={control}
			name='isImportant'
			render={({ field }) => (
				<button
					style={{
						padding: '6px',
						marginBottom: '10px',
						display: 'block',
					}}
					onClick={e => {
						e.preventDefault()
						field.onChange(!field.value)
					}}
				>
					{field.value ? 'Важное сообщение' : 'Сообщение'}
				</button>
			)}
		/>
	)
}
