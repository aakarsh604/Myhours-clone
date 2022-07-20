import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function Homepage() {
  return (
    <Box fontFamily={'sans-serif'} mt={{md:'10rem'}}>
       {/* 1st part */}
       <Box w={'80%'} m={'auto'}>
          <Text size={'3xl'} align="center''">
            Organize projects, Track time and Report your work

          </Text>
       </Box>
       
    </Box>
  )
}

export default Homepage