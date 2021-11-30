import { Box, Table, Button, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import axios from 'axios';
import BlogRow from 'components/blog-row';
import router from 'next/router';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);

    const loadBlogs = () => {
        axios.get('https://localhost:7077/blog')
            .then(response => {
                if (response.data) {
                    setBlogs(response.data);
                }
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        loadBlogs();
    }, [])
    return (
        <Box backgroundColor='#f1f1f1' h='100vh' padding='10'>
            <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'blue.400'}
                mb={2}
                onClick={() => router.push('/blog/create')}
                _hover={{
                    bg: 'blue.300',
                }}>
                + Create a new blog
            </Button>
            <Table variant='simple' borderRadius='10' bgColor='#fff'>
                <Thead>
                    <Tr>
                        <Th textAlign='center'>Title</Th>
                        <Th textAlign='center'>Body</Th>
                        <Th textAlign='center'>Image</Th>
                        <Th textAlign='center'>Date</Th>
                        <Th textAlign='center'></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {blogs && blogs.map(item => <BlogRow key={item.id} item={item} onDeleteCallback={loadBlogs} />)}
                    
                </Tbody>
            </Table>
        </Box>
    );
};

export default Dashboard