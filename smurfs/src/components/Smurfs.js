import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurfs } from '../store/index'
const Smurfs = (props) => {
	useEffect(() => {
		props.fetchSmurfs()
	}, [])
	return (
		<div>
			<h1> Smurfs! </h1>
			{props.isLoading ? <h4>Loading Smurfs...</h4> : null}
			{props.error ? (
				<p style={{ color: 'red' }}> Uh oh... {props.error}</p>
			) : null}
			{props.smurfs.length > 0 ? (
				<div>
					{props.smurfs.map((smurf) => {
						return (
							<div>
								<h1> {smurf.name} </h1>
								<h4> Age: {smurf.age} </h4>
								<h4> Height: {smurf.height} </h4>
							</div>
						)
					})}
				</div>
			) : null}
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
		isLoading: state.isLoading,
		error: state.error,
	}
}

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs)
