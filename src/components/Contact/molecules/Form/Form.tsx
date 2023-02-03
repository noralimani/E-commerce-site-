import { Box, Text, Input } from '@chakra-ui/react'
import React from 'react'

export const Form = () => {
  return (
    <Box color="darkGray">
      <Text>Fullname</Text>
      <Input type="name" borderRadius="none" />
      <Text>Email</Text>
      <Input type="email" borderRadius="none" />
      <Text>Message</Text>
      <Input size="lg" borderRadius="none" />
    </Box>
  )
}
