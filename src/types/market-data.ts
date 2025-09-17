export interface SelicData {
  data: string
  valor: string
}

export interface MarketData {
  selicRate: number
  lastUpdate: string
  source: string
}

export interface ApiError {
  message: string
  status?: number
}
