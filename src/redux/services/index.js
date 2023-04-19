/**
 * services
 */
import axios from "axios"
import { ROOT } from "../../constants"

class ApiService {
  constructor() {
    axios.interceptors.request.use(
      config => {
        config.baseURL = ROOT.BACKEND_URL
        return config
      },
      error => Promise.reject(error)
    )
    axios.interceptors.response.use(
      response => response,
      error => {
        return Promise.reject(error)
      }
    )
    axios.interceptors.response.use(
      response => response,
      error => {
        return Promise.reject(error)
      }
    )
  }

  SignIn(...args) {
    return axios.post(ROOT.SignIn, ...args)
  }

  SignUp(...args) {
    return axios.post(ROOT.SignUp, ...args)
  }

  ResetPassword(...args) {
    return axios.post(ROOT.ResetPassword, ...args)
  }

  UpdateUserInfo(args, id) {
    return axios.put(`${ROOT.userInfo}${id}`, args)
  }

  GetUserInfo(args) {
    return axios.get(`${ROOT.userInfo}${args}`)
  }


  /**
   * tron load apis
   */

  LoadMarkets(...args) {
    return axios.post(ROOT.LoadMarkets, ...args)
  }

  LoadExchangeInfo(...args) {
    return axios.get(ROOT.LoadExchangeInfo, ...args)
  }

  LoadOrderListV2(...args) {
    return axios.post(ROOT.LoadOrderListV2, ...args)
  }

  LoadLatestOrders(...args) {
    return axios.post(ROOT.LoadLatestOrders, ...args)
  }

  LoadMyOrders(...args) {
    return axios.post(ROOT.LoadMyOrders, ...args)
  }

  LoadCurrentOrders(...args) {
    return axios.post(ROOT.LoadCurrentOrders, ...args)
  }

  BuyByContract(...args) {
    return axios.post(ROOT.BuyByContract, ...args)
  }

  SellByContract(...args) {
    return axios.post(ROOT.SellByContract, ...args)
  }

  CancelOrder(...args) {
    return axios.post(ROOT.CancelOrder, ...args)
  }

  Withdraw(...args) {
    return axios.post(ROOT.Withdraw, ...args)
  }



  LoadAccountAssets(...args) {
    return axios.post(ROOT.LoadAccountAssets, ...args)
  }

  LoadPrice(...args) {
    return axios.post(ROOT.LoadPrice, ...args)
  }

  /**
   * trading
   */

  LoadChart(...args) {
    return axios.post(ROOT.LoadChart, ...args)
  }

  loadBalances(...args) {
    return axios.get(ROOT.loadBalances, ...args)
  }

  /**
   * exchange
   */
  LoadTokenList(...args) {
    return axios.post(ROOT.LoadTokenList, ...args)
  }

  LoadExchange(...args) {
    return axios.get(ROOT.LoadExchange, ...args)
  }

  Exchange(...args) {
    return axios.post(ROOT.Exchange, ...args)
  }

  /**
   * otc
   */
  LoadOTCList(...args) {
    return axios.get(ROOT.OTCAPI, ...args)
  }

  LoadMyOTCList(...args) {
    return axios.post(ROOT.LoadMyOTCList, ...args)
  }

  CreateQuote(...args) {
    return axios.post(ROOT.OTCAPI, ...args)
  }
  
  DeleteQuote(id) {
    return axios.delete(`${ROOT.OTCAPI}${id}`)
  }
  

  LoadContacts(...args) {
    return axios.post(ROOT.LoadContacts, ...args)
  }
}

export const useApi = () => {
  return new ApiService()
}

export * from './navigator'