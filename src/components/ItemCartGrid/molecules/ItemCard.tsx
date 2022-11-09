import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
interface ItemCardProps {
  title: string
  price: number
  image: any
}

const ItemCard = ({ title, price, image }: ItemCardProps) => {
  return (
    <Flex bg="gray" flexDirection="column">
      <Box width="100%" height="auto" pb="8px">
        <Image boxSize="200px" src={image} alt="product image" />
      </Box>
      <Box
        display="Flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="white"
        w="100%"
      >
        <Text as="b" color="primary" fontFamily="Sans-serif" fontSize="xl">
          {title}
        </Text>
        <Text>Nora</Text>
        <Box>
          <Text as="b" color="secondary" p="12px">
            {price}
          </Text>
          <Text as="s" fontSize="sm" color="secondary">
            239$
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}

export default ItemCard
