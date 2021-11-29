import { blogs } from "constants/data";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

export async function seedDatabase() {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "blogs"));
  if (querySnapshot.empty) {
    blogs.forEach(async (item) => {
      try {
        const docRef = await addDoc(collection(db, "blogs"), item);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    });
  }
}
