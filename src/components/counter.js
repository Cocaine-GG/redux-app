import React from 'react'
import {connect} from 'react-redux'
import * as action from '../action'
import Plus from '../img/Plus.svg'
import Minus from '../img/Minus.svg'
import Reset from '../img/Reset.svg'
import Random from '../img/Random.svg'

const Counter = ({counter, inc, dec, res, rnd}) => {
	return (
		<div className="wrap">
			<h1 className="h1">{counter}</h1>
			<div className="buttons">
				<div className="col-4"><img onClick={inc} className="controlBtn plus my-1 p-3" src={Plus}/></div>
				<div className="col-4"><img onClick={dec} className="controlBtn minus my-1 p-3" src={Minus}/></div>
				<div className="col-4"><img onClick={res} className="controlBtn reset my-1 p-3" src={Reset}/></div>
				<div className="col-4"><img onClick={rnd} className="controlBtn random my-1 p-3" src={Random}/></div>
			</div>
	</div>
	)
}

const mapStateToProps = (state) => ({counter: state})

export default connect(mapStateToProps,action)(Counter)
