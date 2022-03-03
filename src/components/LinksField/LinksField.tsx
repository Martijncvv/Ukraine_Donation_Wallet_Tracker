import './LinksField.css'
import React from 'react'

const BtcIcon = require('../../static/images/BTC_Logo.png')
const EthIcon = require('../../static/images/ethereum-eth-logo.png')
const BlockChairIcon = require('../../static/images/blockchair.chair.onwhite.png')
const TwitterIcon = require('../../static/images/Twitter_Social_Icon_Circle_Color.png')

interface LinksFieldProps {
	btcBlockExplorerLink: string
	ethBlockExplorerLink: string
	twitterLink: string
}

const LinksField: React.FC<LinksFieldProps> = ({
	btcBlockExplorerLink,
	ethBlockExplorerLink,
	twitterLink,
}) => {
	function handleOpenTab(link) {
		chrome.tabs.create({ url: link, selected: false })
	}

	return (
		<div id="links-field">
			{btcBlockExplorerLink && (
				<img
					className="link-icon"
					src={BtcIcon}
					onClick={() => handleOpenTab(btcBlockExplorerLink)}
				/>
			)}
			{ethBlockExplorerLink && (
				<img
					className="link-icon"
					src={EthIcon}
					onClick={() => handleOpenTab(ethBlockExplorerLink)}
				/>
			)}
			{twitterLink && (
				<img
					className="link-icon"
					src={TwitterIcon}
					onClick={() =>
						handleOpenTab(`https://www.twitter.com/${twitterLink}`)
					}
				/>
			)}

			<img
				className="link-icon"
				src={BlockChairIcon}
				onClick={() => handleOpenTab(`https://blockchair.com/`)}
			/>
		</div>
	)
}

export default LinksField
