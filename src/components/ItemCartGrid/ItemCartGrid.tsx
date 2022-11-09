import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ItemCard from './molecules/ItemCard'

const ItemCardGrid = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log('error', err))
  }, [])

  console.log(products)
  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      {products.map((product: any, i: number) => {
        return (
          <Box key="i" p="16px">
            <ItemCard
              image={product.thumbnail}
              title={product.title}
              price={product.price}
            />
          </Box>
        )
      })}
    </Flex>
  )
}

export default ItemCardGrid
