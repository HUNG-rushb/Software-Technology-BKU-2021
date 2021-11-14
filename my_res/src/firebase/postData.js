import { projectFirestore } from "./config";

const postData = () => {
  const uploadData = async (array_data) => {
    try {
      var batch = projectFirestore.batch();

      array_data.forEach((doc) => {
        // Automatically generate unique id
        // Collection must be already existed
        var docRef = projectFirestore.collection("Menu").doc();

        batch.set(docRef, doc);
      });

      batch.commit();

      console.log("Data updated successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  return { uploadData };
};

export default postData;
