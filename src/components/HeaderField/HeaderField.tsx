import './HeaderField.css'
import React from 'react'
const UkrainFlagIcon = require('../../static/images/Flag_of_Ukraine_360x240.png')

const HeaderField: React.FC<{}> = ({}) => {
	return (
		<div id="header">
			<div id="img-box">
				<img src={UkrainFlagIcon} />
			</div>

			<div>
				<h1>Donation Wallet</h1>
			</div>
		</div>
	)
}

export default HeaderField
