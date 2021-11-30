import { Tr, Td, Text, Image, Button, Stack } from '@chakra-ui/react'
import axios from 'axios';
import { API_URL } from 'constants/constants';
import router from 'next/router';
const BlogRow = ({ item, onDeleteCallback }) => {
    const onDelete = () => {
        axios
            .delete(`${API_URL}/blog/` + item.id)
            .then((response) => {
                if (response.data) {
                    onDeleteCallback();
                }
            })
            .catch((err) => console.log(err.message));
    }
    return (
        <Tr>
            <Td>
                <Text noOfLines={3}>
                    {item.title}
                </Text>
            </Td>
            <Td>
                <Text noOfLines={3}>
                    {item.body}
                </Text>
            </Td>
            <Td>
                <Image src={item.imageUrl} alt={item.imageAlt} w='200px' />
            </Td>
            <Td>{new Date(item.createdDate).toLocaleDateString()}</Td>
            <Td>
                <Stack direction='row'>
                    <Button bgColor='green.500' color='white' onClick={() => router.push('/blog/' + item.id)}>Edit</Button>
                    <Button bgColor='red.500' color='white' onClick={onDelete}>Delete</Button>
                </Stack>
            </Td>
        </Tr>
    )
}
export default BlogRow;