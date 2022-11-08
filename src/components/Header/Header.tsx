import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import MyProfile from './molecules/MyProfileHeader'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
      <MyProfile />
      <Flex borderTop="1px solid #eaeaea">
        <Flex width="100%" height="100%" padding="1rem 2rem">
          <Box display="flex" alignItems="center">
            <Image src="/logo.png" alt="logo" width={86} height={30} />
          </Box>
          <Spacer />
          <Flex>
            <Box paddingRight="40px">
              <p>HOME</p>
            </Box>
            <Box paddingRight="40px">
              <p>BAGS</p>
            </Box>
            <Box paddingRight="40px">
              <p>SNEAKERS</p>
            </Box>
            <Box paddingRight="40px">
              <p>BELT</p>
            </Box>
            <Box paddingRight="40px">
              <p>CONTACT</p>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default Header
