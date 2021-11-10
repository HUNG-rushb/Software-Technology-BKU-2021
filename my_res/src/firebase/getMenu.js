import { ref } from "vue";
import { projectFirestore } from "./config";

const getMenu = () => {
  const menu = ref([]);
  // const error = ref(null);

  const load = async () => {
    try {
      const result = await projectFirestore
        .collection("Menu")
        .orderBy("name")
        .get();
      // console.log(result.docs);

      menu.value = result.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      // console.log(menu);
      console.log("We got the data!");
    } catch (err) {
      // error.value = err.message;
      console.log(err);
    }
  };

  return { menu, load };
};

export default getMenu;
