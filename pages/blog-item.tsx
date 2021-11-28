import React from 'react';
import { Box, Image } from "@chakra-ui/react";

const BlogItem = ({ item }) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
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
    );
};

export default BlogItem;
