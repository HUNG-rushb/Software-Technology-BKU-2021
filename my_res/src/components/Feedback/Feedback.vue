<template>
  <div class="container">
    <label for="fullname">Họ và Tên</label>
    <input
      type="text"
      id="fname"
      name="fullname"
      placeholder="Nguyen Van A.."
    />

    <label for="email">Địa chỉ Email</label>
    <input
      type="text"
      id="eadress"
      name="email"
      placeholder="name@example.com.."
    />

    <label for="food">Chọn món ăn</label>
    <select id="foodlist" name="foodlist">
      <option value="bun">Bún</option>
      <option value="pho">Phở</option>
      <option value="banh_my">Bánh Mỳ</option>
      <option value="sup">Súp</option>
      <option value="my_tom">Mỳ Tôm</option>
    </select>

    <label for="feedback">Phản hồi của bạn về món ăn</label>
    <textarea
      id="review"
      name="feedback"
      placeholder="Ý kiến của bạn.."
      style="height:200px"
    ></textarea>

    <input type="submit" value="Gửi" />
  </div>
</template>

<script></script>

<style scoped>
input[type="text"],
select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type="submit"] {
  background-color: rgb(224, 57, 57);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type="submit"]:hover {
  background-color: #aa3a3a;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin-top: 7rem;
  margin-bottom: 4rem;
}
</style>
