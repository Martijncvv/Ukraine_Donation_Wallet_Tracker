const BLOCKCHAIR_BTC_BALANCE_API =
	'https://api.blockchair.com/bitcoin/dashboards/address/357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P'
const BLOCKCHAIR_ETH_BALANCE_API =
	'https://api.blockchair.com/ethereum/dashboards/address/0x165CD37b4C644C2921454429E7F9358d18A45e14'
const BLOCKCHAIR_DAI_BALANCE_API =
	'https://api.blockchair.com/ethereum/erc-20/0x6b175474e89094c44da98b954eedeac495271d0f/dashboards/address/0x165CD37b4C644C2921454429E7F9358d18A45e14'
const BLOCKCHAIR_USDT_BALANCE_API =
	'https://api.blockchair.com/ethereum/erc-20/0xdAC17F958D2ee523a2206206994597C13D831ec7/dashboards/address/0x165CD37b4C644C2921454429E7F9358d18A45e14'

export async function fetchBtcWalletInfo(): Promise<{}> {
	const res = await fetch(BLOCKCHAIR_BTC_BALANCE_API)
	if (!res.ok) {
		throw new Error(`Fetch error, Bitcoin balance info}`)
	}

	const data = await res.json()
	return data
}
export async function fetchEthWalletInfo(): Promise<{}> {
	const res = await fetch(BLOCKCHAIR_ETH_BALANCE_API)
	if (!res.ok) {
		throw new Error(`Fetch error, Ethereum balance info}`)
	}

	const data = await res.json()
	return data
}
export async function fetchDaiWalletInfo(): Promise<{}> {
	const res = await fetch(BLOCKCHAIR_DAI_BALANCE_API)
	if (!res.ok) {
		throw new Error(`Fetch error, DAI balance info}`)
	}

	const data = await res.json()
	return data
}
export async function fetchUsdtWalletInfo(): Promise<{}> {
	const res = await fetch(BLOCKCHAIR_USDT_BALANCE_API)
	if (!res.ok) {
		throw new Error(`Fetch error, USDT balance info}`)
	}

	const data = await res.json()
	return data
}
