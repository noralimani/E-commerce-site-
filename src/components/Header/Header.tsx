import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import MyProfile from './molecules/MyProfileHeader'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <MyProfile />
      <Flex borderTop="1px solid #eaeaea">
        <Flex w="100%" h="100%" p="1rem 2rem">
          <Box display="flex" alignItems="center">
            <Image src="/logo.png" alt="logo" width={86} height={30} />
          </Box>
          <Spacer />
          <Flex justifyContent="space-around" w="50%">
            <Box>
              <Link href="/">HOME</Link>
            </Box>
            <Box>
              <Link href="/bags">BAGS</Link>
            </Box>
            <Box>
              <Link href="/sneakers">SNEAKERS</Link>
            </Box>
            <Box>
              <Link href="/sneakers">BELT</Link>
            </Box>
            <Box>
              <Link href="/contact">CONTACT</Link>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default Header
