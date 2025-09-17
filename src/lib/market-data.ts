import { MarketData, SelicData } from '@/types/market-data'
import 'server-only'

const SELIC_API_URL =
  'https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/1?formato=json'

export async function fetchSelicData(): Promise<MarketData> {
  try {
    const response = await fetch(SELIC_API_URL, {
      // Cache por 1 hora para evitar muitas requisições
      next: { revalidate: 3600 },
      // Timeout de 10 segundos
      signal: AbortSignal.timeout(10000),
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    const data: SelicData[] = await response.json()

    if (!data || data.length === 0) {
      throw new Error('Nenhum dado encontrado na API')
    }

    const selicData = data[0]
    const selicRate = parseFloat(selicData.valor)

    // Validação dos dados
    if (isNaN(selicRate) || selicRate < 0 || selicRate > 100) {
      throw new Error('Dados inválidos recebidos da API')
    }

    return {
      selicRate,
      lastUpdate: selicData.data,
      source: 'Banco Central do Brasil',
    }
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error)

    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Timeout: A API demorou muito para responder')
      }
      if (error.message.includes('fetch')) {
        throw new Error('Erro de conexão: Verifique sua internet')
      }
    }

    throw new Error('Falha ao carregar dados de mercado')
  }
}
