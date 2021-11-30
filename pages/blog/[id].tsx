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
import React, { useState } from 'react'
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from 'next/dynamic'
import { EditorProps } from 'react-draft-wysiwyg'

// install @types/draft-js @types/react-draft-wysiwyg and @types/draft-js @types/react-draft-wysiwyg for types

const Editor = dynamic<EditorProps>(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
)

const Add = () => {
    const [editorState, setEditorState] = useState('');
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
                <FormControl id='body' isRequired h='300px'>
                    <FormLabel>Body: </FormLabel>
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={setEditorState}
                    />
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
                    borderRadius={5}
                    type="submit"
                    variant="solid"
                    colorScheme="blue"
                    width="100px"
                // disabled={isInvalid}
                >
                    Save
                </Button>
            </Stack>
        </Box>
    )
}

export default Add
