// temporary duplicated between api/src/types.ts and web/src/types.ts
// Keep in sync with api/src/types.ts   (in the web copy)
// Keep in sync with web/src/types.ts   (in the api copy)

export interface Contract {
  id: string
  title: string
  type: string
  language: string
  updatedAt: string
  ver: number
  status: ContractStatus
}

export interface ContractQuery {
  page: number
  pageSize: number
  search?: string
  status?: ContractStatus
  type?: string
}

export interface ContractPage {
  data: Contract[]
  pagination: {
    page: number
    pageSize: number
    total: number
    totalPages: number
  }
}
export type ContractStatus = "DRAFT" | "REVIEWING" | "RETURNED"
