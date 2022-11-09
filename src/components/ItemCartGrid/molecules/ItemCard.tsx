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
    <Flex
      position="relative"
      w="30vh"
      h="30vh"
      p="4px"
      bg="gray"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box pb="8px">
        <Image boxSize="200px" src={image} alt="product image" />
      </Box>
      <Box backgroundColor="white" w="100%">
        <Text
          as="b"
          display="Flex"
          justifyContent="center"
          alignItems="center"
          color="primary"
          fontFamily="Sans-serif"
          fontSize="xl"
        >
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
