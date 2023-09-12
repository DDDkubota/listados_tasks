import { Avatar, Box, HStack, Heading, Text, VStack } from 'native-base'
import React from 'react'
import { User } from '../INTERFACES/USER_INTERFACES'

export const CardUser = ({data}: {data: User}) => {
  return (
    <Box
    borderBottomWidth="1"
    borderColor="gray.300"
    py="1"
    w="full"
  >
    <HStack space="md" justifyContent="space-between">
      <Avatar size="md"
      source={{ uri: data.avatar }}
      />
      <VStack>
        <Text
          color="gray.500"
          fontWeight="bold"
        >
          {data.name}
        </Text>
      </VStack>
    </HStack>
  </Box>
  )
}
