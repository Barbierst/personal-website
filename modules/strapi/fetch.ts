interface StrapiObject<T> {
    id: number
    attributes: T
}

interface StrapiResponse<T> {
    data: StrapiObject<T>[]
    meta: {
        pagination: {
            page: number
            pageSize: number
            pageCount: number
            total: number
        }
    }
}

export async function getData<T>(endpoint: string): Promise<StrapiResponse<T>> {
    const res = await fetch(`${process.env.STRAPI_URL}/${endpoint}`, {
      headers: {
        Authorization: `bearer ${process.env.STRAPI_BEARER}`
      },
      next: {revalidate: process.env.NODE_ENV === "development" ? 1 : 3600}
    })
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return await res.json()
  }