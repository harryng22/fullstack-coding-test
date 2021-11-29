import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Heading,
    Box,
    Image,
    Flex,
    Center
} from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/hooks';

const BlogItem = ({ item }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" onClick={onOpen}>
                <Image src={item.imageUrl} alt={item.imageAlt} />

                <Box p="6">
                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        noOfLines={2}
                    >
                        {item.title}
                    </Box>
                </Box>
            </Box>

            <Modal onClose={onClose} isOpen={isOpen} isCentered scrollBehavior='inside' size='4xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Center>
                            <Flex direction="column" alignItems='center'>
                                <Heading mb='5'>{item.title}</Heading>
                                <Box mb='5'>
                                    <Image src={item.imageUrl} alt={item.imageAlt} />
                                </Box>
                                <Box>
                                    {item.body}
                                </Box>
                            </Flex>
                        </Center>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default BlogItem;
