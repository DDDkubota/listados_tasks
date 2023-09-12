import { Avatar, AvatarFallbackText, AvatarImage, Box, HStack, Heading, Text, VStack } from '@gluestack-ui/themed'
import React from 'react'
import { User } from '../INTERFACES/USER_INTERFACES'

export const CardUser = ({data}: {data: User}) => {
  return (
    <Box
    borderBottomWidth="$1"
    borderColor="$trueGray800"
    sx={{
      _dark: {
        borderColor: "$trueGray100",
      },
      "@base": {
        pl: 0,
        pr: 0,
      },
      "@sm": {
        pl: "$4",
        pr: "$5",
      },
    }}
    py="$2"
    w="$full"
  >
    <HStack space="md" justifyContent="space-between">
      <Avatar size="md">
        <AvatarImage  source={{ uri: data.avatar }} />
      </Avatar>
      <VStack>
        <Text
          color="$coolGray800"
          fontWeight="$bold"
          sx={{
            _dark: {
              color: "$warmGray100",
            },
          }}
        >
          {data.name}
        </Text>
      </VStack>
    </HStack>
  </Box>
  )
}
