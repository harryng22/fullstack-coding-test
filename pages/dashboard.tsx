import { Box, Table, Button, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import BlogRow from 'components/blog-row';

const Dashboard = () => {
    return (
        <Box backgroundColor='#f1f1f1' h='100vh' padding='10'>
            <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'blue.400'}
                mb={2}
                // onClick={logout}
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
                    <BlogRow />
                </Tbody>
            </Table>
        </Box>
    );
};

export default Dashboard