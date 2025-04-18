import {useState, useEffect } from'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useProducts } from '@/hooks/useProducts';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useState()
  const { loading, products, searchProducts } = useProducts();

  useEffect(() => {
    // update 
    if (query) {
      searchProducts(query)
    }
    // console.log(params);
    // console.log('loading.....')
  }, [searchParams])

  const handleSearch = (newQuery: string) => {
    setSearchParams({
      q: newQuery
    })
  }
  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-2">
        <Input 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      {
        loading ? (
          <div>Loading...</div>
        ): (
          <div className="grid gap-4">
          {
            products.map((product) => (
              <div
                key={product.id}
                className="p-4 border rounded shadow"
              >
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p className="text-gray-600">{product.price}</p>
                <p className="text-sm text-gray-500">
                  Stock: {product.inventory}
                </p>
              </div>
            ))
          }
          </div>
        )
      }
    </div>
  )
}

export default Search