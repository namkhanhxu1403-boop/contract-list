// commented codes are previous attempt(s). these commented lines have been moved to api/src/contracts.ts

import type { Contract, ContractStatus, ContractQuery, ContractPage } from '../types'

export const contracts: Contract[] = []

const types = ['Service', 'Confidentiality', 'Licence', 'Supply']

const statuses: ContractStatus[] = ['DRAFT', 'REVIEWING', 'RETURNED']

/*
for (let i = 0; i < 200; i++) {
  const t = types[i % types.length]
  contracts.push({
    id: `c-${i + 1}`,
    title: `Contract ${i + 1}`,
    type: t,
    language: "English",
    updatedAt: '2027-01-06',
    ver: 1,
    status: statuses[i % statuses.length]
  })
}
*/


export async function fetchContracts(query: ContractQuery): Promise<ContractPage> {
  // await new Promise((resolve) => setTimeout(resolve, 300))

  // const filtered = contracts.filter((c) => !query.status || c.status === query.status)

  const params = new URLSearchParams({ page: String(query.page), pageSize: String(query.pageSize) })
  if (query.status) params.set('status', query.status)
  if (query.type) params.set('type', query.type)
  if (query.search) params.set('search', query.search)

  /*
  const start = (query.page - 1) * query.pageSize
  const end = start + query.pageSize
  const total = filtered.length
  const totalPage = Math.ceil(total / query.pageSize)
  */


  const res = await fetch(`http://localhost:4000/api/contracts?${params}`)
  return res.json()

  /*
  return {
    data: filtered.slice(start, end),
    pagination: {
      page: query.page,
      pageSize: query.pageSize,
      total: total,
      totalPages: totalPage,
    },
  }
  */

}
