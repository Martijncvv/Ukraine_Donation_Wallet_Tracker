import './FooterField.css'
import React from 'react'
const BlockChairIcon = require('../../static/images/blockchair.chair.onwhite.png')

const FooterField: React.FC<{}> = ({}) => {
	return (
		<div id="footer-field">
			<p>
				Powered by BLOCKCHAIR API{' '}
				<img id="coingecko_footer_icon" src={BlockChairIcon} />{' '}
			</p>
		</div>
	)
}

export default FooterField
