import type { ContractQuery, ContractPage } from '../types'

export async function fetchContracts(query: ContractQuery): Promise<ContractPage> {

  const params = new URLSearchParams({ page: String(query.page), pageSize: String(query.pageSize) })
  if (query.status) params.set('status', query.status)
  if (query.type) params.set('type', query.type)
  if (query.search) params.set('search', query.search)

  const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000"
  const res = await fetch(`${API_URL}/api/contracts?${params}`)

  return res.json()

}
