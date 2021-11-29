import { SimpleGrid } from "@chakra-ui/react";
import FirebaseContext from "contexts/firebase";
import { useContext, useEffect, useState } from "react";
import BlogItem from "../components/blog-item";
import { collection, getDocs, query, where, onSnapshot } from "firebase/firestore";

const Blog = () => {
    const { db } = useContext(FirebaseContext);
    const [blogItems, setBlogItems] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "blogs"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = querySnapshot.docs.map(item => item.data());
            setBlogItems(data);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <SimpleGrid columns={[2, null, 3]} minChildWidth="300px" spacing="10" padding="10">
            {blogItems && blogItems.map(item => <BlogItem key={item.id} item={item} />)}
        </SimpleGrid>
    );
};
export default Blog;