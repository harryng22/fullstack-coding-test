import { SimpleGrid } from "@chakra-ui/react";
import FirebaseContext from "contexts/firebase";
import { useContext, useEffect, useState } from "react";
import BlogItem from "../components/blog-item";
import { collection, getDocs } from "firebase/firestore";

const Blog = () => {
    const { db } = useContext(FirebaseContext);
    const [blogItems, setBlogItems] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            debugger;
            const querySnapshot = await getDocs(collection(db, "blogs"));
            debugger;
            const data = querySnapshot.docs.map(item => item.data());
            setBlogItems(data);
        };

        fetchBlogs();
    }, []);

    return (
        <SimpleGrid columns={[2, null, 3]} minChildWidth="300px" spacing="10" padding="10">
            {blogItems && blogItems.map(item => <BlogItem item={item} />)}
        </SimpleGrid>
    );
};
export default Blog;