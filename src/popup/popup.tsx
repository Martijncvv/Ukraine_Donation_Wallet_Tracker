import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import './popup.css'
import FooterField from '../components/FooterField'
import HeaderField from '../components/HeaderField'
import InfoField from '../components/InfoField'
import LinksField from '../components/LinksField'

import {
	fetchBtcWalletInfo,
	fetchEthWalletInfo,
	fetchDaiWalletInfo,
	fetchUsdtWalletInfo,
} from '../utils/api'
import { amountFormatter } from '../utils/amountFormatter'

const App: React.FC<{}> = () => {
	const [btcReceived, setBtcReceived] = useState<any>()
	const [btcTxCount, setBtcTxCount] = useState<any>()
	const [lastReceivingBtcDonation, setLastReceivingBtcDonation] = useState<
		any
	>()

	const [ethReceived, setEthReceived] = useState<any>()
	const [ethTxCount, setEthTxCount] = useState<any>()
	const [lastReceivingEthDonation, setLastReceivingEthDonation] = useState<
		any
	>()
	const [totalReceived, setTotalReceived] = useState<any>(null)
	const [totalDonations, setTotalDonations] = useState<any>(null)
	const [lastReceived, setLastReceived] = useState<any>(null)

	const [usdtReceived, setUsdtReceived] = useState<any>()
	const [daiReceived, setDaiReceived] = useState<any>()

	useEffect(() => {
		getBtcWalletsData()
		getEthWalletsData()
		getDaiWalletsData()
		getUsdtWalletsData()
	}, [])

	useEffect(() => {
		setTotalReceived(ethReceived + btcReceived + usdtReceived + daiReceived)
		setTotalDonations(btcTxCount + ethTxCount)

		setLastReceived(
			Date.parse(lastReceivingBtcDonation) >
				Date.parse(lastReceivingEthDonation)
				? lastReceivingBtcDonation
				: lastReceivingEthDonation
		)
	}, [
		ethReceived,
		btcReceived,
		usdtReceived,
		daiReceived,
		lastReceivingBtcDonation,
		lastReceivingEthDonation,
	])

	async function getBtcWalletsData() {
		let btcInfo = await fetchBtcWalletInfo()
		setBtcReceived(
			btcInfo['data']['357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P'].address.received_usd
		)
		setBtcTxCount(
			btcInfo['data']['357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P'].address
				.transaction_count
		)
		setLastReceivingBtcDonation(
			btcInfo['data']['357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P'].address
				.last_seen_receiving
		)
		console.log(btcInfo)
	}
	async function getEthWalletsData() {
		let ethInfo = await fetchEthWalletInfo()
		setEthReceived(
			ethInfo['data']['0x165cd37b4c644c2921454429e7f9358d18a45e14'].address
				.received_usd
		)
		setEthTxCount(
			ethInfo['data']['0x165cd37b4c644c2921454429e7f9358d18a45e14'].address
				.receiving_call_count
		)
		setLastReceivingEthDonation(
			ethInfo['data']['0x165cd37b4c644c2921454429e7f9358d18a45e14'].address
				.last_seen_receiving
		)
		console.log(ethInfo)
	}
	async function getDaiWalletsData() {
		let daiInfo = await fetchDaiWalletInfo()
		setDaiReceived(
			daiInfo['data']['0x165cd37b4c644c2921454429e7f9358d18a45e14'].address
				.received / 1000000000000000000
		)

		console.log(daiInfo)
	}
	async function getUsdtWalletsData() {
		let usdtInfo = await fetchUsdtWalletInfo()
		setUsdtReceived(
			usdtInfo['data']['0x165cd37b4c644c2921454429e7f9358d18a45e14'].address
				.received_approximate
		)
		console.log(usdtInfo)
	}

	return (
		<>
			<HeaderField />
			<InfoField
				attributeName="Total donated"
				attributeValue={`$${amountFormatter(totalReceived)}`}
			/>
			<InfoField
				attributeName="Donation count"
				attributeValue={`${amountFormatter(totalDonations)}`}
			/>
			<InfoField
				attributeName="Last received (UTC)"
				attributeValue={`${lastReceived}`}
			/>

			<InfoField
				attributeName="BTC "
				attributeValue={`$${amountFormatter(btcReceived)}`}
			/>

			<InfoField
				attributeName="ETH"
				attributeValue={`$${amountFormatter(ethReceived)}`}
			/>
			<InfoField
				attributeName="USDT"
				attributeValue={`$${amountFormatter(usdtReceived)}`}
			/>
			<InfoField
				attributeName="DAI"
				attributeValue={`$${amountFormatter(daiReceived)}`}
			/>

			<LinksField
				twitterLink="Ukraine/status/1497594592438497282"
				btcBlockExplorerLink="https://blockchair.com/bitcoin/address/357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P"
				ethBlockExplorerLink="https://blockchair.com/ethereum/address/0x165cd37b4c644c2921454429e7f9358d18a45e14"
			/>
			<FooterField />
		</>
	)
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
