'use client'
import { useParams, usePathname, useSearchParams } from "next/navigation";

export default function Page(){

    const params = useParams<{ account: string }>()
    const pathname = usePathname()
    const searchParam = useSearchParams()
      const id = searchParam.get('id')
 

    return (
        <div className="text-center">
            <h1>Overview : {params.account}</h1>
            <h1>Path Name : {pathname}</h1>
            <h1>Search Param : {id}</h1>
        </div>
    )
}