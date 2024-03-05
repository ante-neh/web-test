"use client"
import { ReactNode } from "react"
import ReduxProvider from "./ReduxProvider"

interface Props {
  children?: ReactNode
}

const AllProviders = ({ children }: Props) => {
  return <ReduxProvider>
  {children}
  </ReduxProvider>
}

export default AllProviders