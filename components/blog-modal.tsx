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
    Flex
} from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/hooks';

export function VerticallyCenter({ item }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex direction="column">
                            <Heading>{item.title}</Heading>
                            <Box boxSize='sm'>
                                <Image src={item.imageUrl} alt={item.imageAlt} />
                            </Box>
                            <Box>
                                {item.body}
                            </Box>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}