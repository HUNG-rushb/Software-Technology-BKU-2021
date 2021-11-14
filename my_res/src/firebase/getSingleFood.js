import { ref } from "vue";
import { projectFirestore } from "./config";

const getSingleFood = (id) => {
  const singleFood = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const result = await projectFirestore
        .collection("Menu")
        .doc(is)
        .get();

      //   console.log(result.data());

      if (!result.exists) {
        throw Error("Not exist!");
      }

      singleFood.value = { ...result.data(), id: result.id };

      //   console.log(singleFood);
    } catch (err) {
      error.value = err.message;
    }
  };

  return { singleFood, error, load };
};

export default getSingleFood;
