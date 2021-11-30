import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Stack, Button
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const Add = () => {
    const router = useRouter();
    const { id } = router.query;
    if (id === 'create') {

    }
    return (
        <Box backgroundColor='#f1f1f1' h='100vh' padding='10'>
            <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
                borderRadius='5'
                alignItems='center'
            >
                <FormControl id='title' isRequired>
                    <FormLabel>Title: </FormLabel>
                    <Input type='text' placeholder='Please enter title' />
                </FormControl>
                <FormControl id='body' isRequired>
                    <FormLabel>Body: </FormLabel>
                    <Input type='text' placeholder='Please enter body' />
                </FormControl>
                <FormControl id='imageUrl' isRequired>
                    <FormLabel>Image URL: </FormLabel>
                    <Input type='text' placeholder='Please enter image Url' />
                </FormControl>
                <FormControl id='imageAlt' isRequired>
                    <FormLabel>Image Alt: </FormLabel>
                    <Input type='text' placeholder='Please enter image Alt' />
                </FormControl>
                <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme="teal"
                    width="200px"
                    // disabled={isInvalid}
                >
                    Save
                </Button>
            </Stack>
        </Box>
    )
}

export default Add
