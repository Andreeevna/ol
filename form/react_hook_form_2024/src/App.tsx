import { SubmitHandler, useForm } from 'react-hook-form'
import './App.scss'

interface IForm {
	'e-mail': string
	message: string
}

function App() {
	const { register, handleSubmit, formState } = useForm<IForm>({
		mode: 'onChange',
	})

	const errorsEmail = formState.errors['e-mail']?.message
	const errorMessage = formState.errors['message']?.message

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSubmit: SubmitHandler<IForm> = (data: any) => {
		console.log(data)
	}

	return (
		<>
			<h1>Feedback form</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type='text'
					placeholder='Enter e-mail:'
					{...register('e-mail', {
						required: 'This field is required',
						pattern: {
							value:
								/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,
							message: 'Invalid email address',
						},
					})}
				/>
				{errorsEmail && (
					<p
						style={{
							color: 'tomato',
							margin: '2px auto',
							textAlign: 'left',
							fontSize: '14px',
						}}
					>
						{errorsEmail}
					</p>
				)}
				<textarea
					placeholder='Enter message:'
					{...register('message', {
						required: 'This field is required',
					})}
				></textarea>
				{errorMessage && (
					<p
						style={{
							color: 'tomato',
							margin: '2px auto',
							textAlign: 'left',
							fontSize: '14px',
						}}
					>
						{errorMessage}
					</p>
				)}
				<button type='submit'>Send</button>
			</form>
		</>
	)
}

export default App
