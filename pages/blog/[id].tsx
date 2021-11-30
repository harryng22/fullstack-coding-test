import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Stack, Button
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from 'next/dynamic'
import { EditorProps } from 'react-draft-wysiwyg'
import axios from 'axios';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import { convertFromHTML, ContentState, convertFromRaw, EditorState } from 'draft-js';

let htmlToDraft = null;
if (typeof window === 'object') {
    htmlToDraft = require('html-to-draftjs').default;
}

// install @types/draft-js @types/react-draft-wysiwyg and @types/draft-js @types/react-draft-wysiwyg for types

const Editor = dynamic<EditorProps>(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
)

const Add = () => {
    // const [editorState, setEditorState] = useState('');
    const [model, setModel] = useState({
        title: '',
        body: '',
        imageUrl: '',
        imageAlt: ''
    });

    const [contentState, setContentState] = useState(null);
    const [editorState, setEditorState] = useState(null)

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id === 'create') {
            setModel({
                title: '',
                body: '',
                imageUrl: '',
                imageAlt: ''
            })
        } else {
            axios.get('https://localhost:7077/blog/' + id)
                .then(response => {
                    if (response.data) {
                        setModel(response.data);
                        const blocksFromHTML = convertFromHTML(response.data.body)
                        const content = ContentState.createFromBlockArray(blocksFromHTML)
                        const editorValue = EditorState.createWithContent(content);
                        setEditorState(editorValue);
                    }
                })
                .catch(error => console.log(error));
        }
    }, [id])

    const onEditorStateChange = (editorState) => {
        setModel({ ...model, body: draftToHtml(editorState) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://localhost:7077/blog', { ...model })
            .then(response => {
                if (response.data) {
                    console.log(response.data);
                }
            })
            .catch(error => console.log(error));
    }


    return (
        <Box backgroundColor='#f1f1f1' h='100vh' padding='10'>
            <form onSubmit={handleSubmit}>
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
                        <Input
                            type='text'
                            placeholder='Please enter title'
                            value={model.title}
                            onChange={({ target }) => setModel({ ...model, title: target.value })} />
                    </FormControl>
                    <FormControl id='body' isRequired h='300px'>
                        <FormLabel>Body: </FormLabel>
                        {console.log(contentState)}
                        <Editor
                            // editorState={editorState}
                            editorContent={contentState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onContentStateChange={onEditorStateChange}
                        />
                    </FormControl>
                    <FormControl id='imageUrl' isRequired>
                        <FormLabel>Image URL: </FormLabel>
                        <Input
                            type='text'
                            placeholder='Please enter image Url'
                            value={model.imageUrl}
                            onChange={({ target }) => setModel({ ...model, imageUrl: target.value })} />
                    </FormControl>
                    <FormControl id='imageAlt' isRequired>
                        <FormLabel>Image Alt: </FormLabel>
                        <Input
                            type='text'
                            placeholder='Please enter image Alt'
                            value={model.imageAlt}
                            onChange={({ target }) => setModel({ ...model, imageAlt: target.value })} />
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
            </form>
        </Box>
    )
}

export default Add
