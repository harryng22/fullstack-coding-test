import { SimpleGrid } from "@chakra-ui/react";
import BlogItem from "./blog-item";

const Blog = () => {
    const item = {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        title: "Modern home in city center in the heart of historic Los Angeles ",
    };
    return (
        <SimpleGrid columns={[3]} spacing="10" padding="10">
            <BlogItem item={item} />
            <BlogItem item={item} />
            <BlogItem item={item} />
            <BlogItem item={item} />
            <BlogItem item={item} />
            <BlogItem item={item} />
            <BlogItem item={item} />
        </SimpleGrid>
    );
};
export default Blog;