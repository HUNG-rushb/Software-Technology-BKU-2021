import { ref } from "vue";
import { projectFirestore } from "./config";

const menu = ref([]);

const load = async () => {
  try {
    const result = await projectFirestore
      .collection("Menu")
      .orderBy("name")
      .get();

    menu.value = result.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    // console.log(menu);
    // console.log("We got the data!");
  } catch (err) {
    console.log(err);
  }
};

load();

export default menu;
