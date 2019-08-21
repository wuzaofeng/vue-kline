import axios from '@/utils/axios'

interface IMarketIndex {
  level: string,
  position: string
}

export function getMarketIndex (data: IMarketIndex) {
  return axios({
    method: 'POST',
    url: 'api/getMarketIndex/v1',
    data
  })
}

interface IAllStocks {
  level: string,
  count: number,
  market: string
}
export function allStocks (data: IAllStocks) {
  return axios({
    method: 'POST',
    url: 'api/allStocks/v1',
    data
  })
}

interface ITimeSharing {
  assetId: string,
  level: string
}
export function getTimeSharing (data: ITimeSharing) {
  return axios({
    method: 'POST',
    url: 'api/quotation/getTimeSharing/v1',
    data
  })
}
