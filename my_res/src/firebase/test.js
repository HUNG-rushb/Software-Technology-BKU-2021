// import { doc, setDoc } from "firebase/firestore";
// import { ref } from "vue";

// const title = ref("");
// const body = ref("");
// const tags = ref([]);
// const tag = ref("");

// const handleKeydown = () => {
//   if (!tags.value.includes(tag.value)) {
//     tag.value = tag.value.replace(/\s/g, ""); // remove all whitespace
//     tags.value.push(tag.value);
//   }
//   tag.value = "";
// };

// const handleSubmit = async (name, description) => {
//   const info = {
//     id: Math.floor(Math.random() * 10000),
//     name: name,
//     description: description,
//     createdAt: timeStamp(),
//   };

//   const result = await projectFirestore.collection("menu").add(info);
//   console.log(result);

//   router.push({ name: "Home" });
// };

// Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA",
// });
