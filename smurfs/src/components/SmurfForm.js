import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchSmurfs } from '../store/index'

function SmurfForm() {
	const { register, handleSubmit, errors } = useForm()
	const onSubmit = (data) => {
		console.log(data)
		const newSmurf = {
			name: data.Name,
			age: data.Age,
			height: data.Height,
		}
		axios.post('http://localhost:3333/smurfs', newSmurf).then((res) => {
			fetchSmurfs()
		})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" placeholder="Name" name="Name" ref={register} />
			<input type="undefined" placeholder="Age" name="Age" ref={register} />
			<input
				type="undefined"
				placeholder="Height"
				name="Height"
				ref={register}
			/>

			<input onClick={() => window.location.reload(false)} type="submit" />
		</form>
	)
}

export default SmurfForm
