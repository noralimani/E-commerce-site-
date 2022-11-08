import { Box, Flex, Spacer } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MyProfile = () => {
  return (
    <Flex padding="1rem 2rem">
      <Box p="4">
        <select
          style={{
            color: 'black',
            backgroundColor: 'white',
            borderStyle: 'none',
          }}
          name="language"
          id="language"
        >
          <option value="" selected disabled hidden>
            EN
          </option>
          <option value="portugal">PT</option>
          <option value="german">DE</option>
          <option value="italian">IT</option>
        </select>
      </Box>
      <Spacer />
      <Box p="4">
        <div>
          <select
            style={{
              color: 'black',
              backgroundColor: 'white',
              borderStyle: 'none',
            }}
            name="language"
            id="language"
          >
            <option value="" selected disabled hidden>
              My Profile
            </option>
            <option value="email">email</option>
            <option value="logout">Log Out</option>
          </select>
          {/* <FontAwesomeIcon icon="fa-regular fa-cart-shopping" />{' '} */}
        </div>
      </Box>
    </Flex>
  )
}

export default MyProfile
