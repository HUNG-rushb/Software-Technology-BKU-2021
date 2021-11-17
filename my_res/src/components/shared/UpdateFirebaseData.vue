<template>
  <div>
    <h1>Update data</h1>
    <h4>
      https://stackoverflow.com/questions/54322153/how-to-add-multiple-docs-to-a-collection-in-firebase
    </h4>
  </div>
</template>

<script>
import postData from "../../firebase/postData";
import food_array from "../../data/food_array";

export default {
  setup() {
    const { uploadData } = postData();

    uploadData(food_array);
  },
};
</script>
