import { Box, Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { Form } from './molecules/Form/Form'

export const ContactMain = () => {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        h="50px"
        bgColor="lightGray"
      >
        <Text color="secondary">Home </Text>
        <Text> / Contact Us</Text>
      </Flex>
      <Flex w="70%" justifyContent="center" boxShadow="5px 10px lightgray">
        <Flex w="50%" backgroundColor="#3fbffe">
          <Box>
            <Image
              src="/call.png"
              alt="contact"
              position="relative"
              zIndex="3"
              top="20px"
              right="65px"
            />
          </Box>
          <Box
            color="white"
            position="relative"
            w="20%"
            zIndex="2"
            top="80px"
            right="80px"
          >
            <Text fontSize="2xl">
              get in <br /> touch
            </Text>
            <Text fontSize="sm" pt="40px">
              contact@e-comm.ng
            </Text>
            <Text fontSize="sm" pt="40px">
              +00229433443
            </Text>
            <Text fontSize="sm" pt="40px">
              5fth Street Avenue 1933
            </Text>
          </Box>
        </Flex>
        <Box w="50%" p="32px">
          <Form />
        </Box>
      </Flex>
    </Flex>
  )
}
