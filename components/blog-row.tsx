import { Tr, Td, Text, Image, Button, Stack } from '@chakra-ui/react'
const BlogRow = () => {
    return (
        <Tr>
            <Td>
                <Text noOfLines={3}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi assumenda pariatur aliquam sapiente, laboriosam ipsam doloremque tempore sunt eaque nam nemo
                </Text>
            </Td>
            <Td>
                <Text noOfLines={3}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi assumenda pariatur aliquam sapiente, laboriosam ipsam doloremque tempore sunt eaque nam nemo, inventore quos enim maxime magni. Quidem, ad. Eaque, non.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus excepturi illum ducimus quidem quo, cupiditate voluptate neque doloremque alias velit error possimus ab nemo, inventore unde molestias? Perferendis, necessitatibus recusandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus porro distinctio quidem error ullam dolores velit veritatis, voluptates harum nam eum minus ipsa odit facere voluptatum ipsam pariatur! Aliquid, tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim molestias ad nihil. Quas, vitae necessitatibus? Nobis dolores dignissimos in libero numquam ipsa quo commodi dicta dolorem reiciendis, quam odit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi assumenda pariatur aliquam sapiente, laboriosam ipsam doloremque tempore sunt eaque nam nemo, inventore quos enim maxime magni. Quidem, ad. Eaque, non.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus excepturi illum ducimus quidem quo, cupiditate voluptate neque doloremque alias velit error possimus ab nemo, inventore unde molestias? Perferendis, necessitatibus recusandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus porro distinctio quidem error ullam dolores velit veritatis, voluptates harum nam eum minus ipsa odit facere voluptatum ipsam pariatur! Aliquid, tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim molestias ad nihil. Quas, vitae necessitatibus? Nobis dolores dignissimos in libero numquam ipsa quo commodi dicta dolorem reiciendis, quam odit.
                </Text>
            </Td>
            <Td>
                <Image src='/images/image1.jpg' />
            </Td>
            <Td>{ new Date().toLocaleDateString()}</Td>
            <Td>
                <Stack direction='row'>
                    <Button bgColor='green.500' color='white'>Edit</Button>
                    <Button bgColor='red.500' color='white'>Delete</Button>
                </Stack>
            </Td>
        </Tr>
    )
}
export default BlogRow;