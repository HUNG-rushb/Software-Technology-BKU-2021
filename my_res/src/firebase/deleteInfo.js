import { projectFirestore } from "./config";

const deleteItem = async (id) => {
  const result = await projectFirestore
    .collection("menu")
    .doc(id)
    .delete();

  console.log(result);

  //   router.push({ name: "Menu" });
};
