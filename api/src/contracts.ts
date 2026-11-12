import type { Contract, ContractStatus, ContractQuery, ContractPage } from './types'

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
