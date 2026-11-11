import type { Contract, ContractStatus, ContractQuerry, ContractPage } from '../types'

export const contracts: Contract[] = []

const types = ['Service', 'Confidentiality', 'Licence', 'Supply']

const statuses: ContractStatus[] = ['DRAFT', 'REVIEWING', 'RETURNED']

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

export async function fetchContracts(query: ContractQuerry): Promise<ContractPage> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const filtered = contracts.filter((c) => !query.status || c.status === query.status)

  const start = (query.page - 1) * query.pageSize
  const end = start + query.pageSize
  const total = filtered.length
  const totalPage = Math.ceil(total / query.pageSize)

  return {
    data: filtered.slice(start, end),
    pagination: {
      page: query.page,
      pageSize: query.pageSize,
      total: total,
      totalPages: totalPage,
    },
  }
}
