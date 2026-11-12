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
