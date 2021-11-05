<template>
  <div class="menu1">
    <hr />
    <h1>{{ title }}</h1>
    <hr />
    <div class="dropdown">
      <a
        class="btn btn-secondary btn-lg"
        href="#"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        >Phụ Lục</a
      >
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li>
          <button @click="clicking1()" class="dropdown-item">{{ li_1 }}</button>
          <button @click="clicking2()" class="dropdown-item">{{ li_2 }}</button>
          <button @click="clicking3()" class="dropdown-item">{{ li_3 }}</button>
          <button @click="clicking4()" class="dropdown-item">{{ li_4 }}</button>
        </li>
      </ul>
    </div>
    <li_1 />
  </div>
</template>

<script>
import li_1 from "./List Food/li_1.vue";
import li_2 from "./List Food/li_2.vue";
import li_3 from "./List Food/li_3.vue";
import li_4 from "./List Food/li_4.vue";

export default {
  components: { li_1, li_2, li_3, li_4 },
  data() {
    return {
      title: "COMBO 1 NGƯỜI",
      li_1: "COMBO 1 NGƯỜI",
      li_2: "COMBO NHIỀU NGƯỜI",
      li_3: "ĐANG GIẢM GIÁ",
      li_4: "MÓN LẺ",
    };
  },
  methods: {
    clicking1() {
      this.title = this.li_1;
    },
    clicking2() {
      this.title = this.li_2;
    },
    clicking3() {
      this.title = this.li_3;
    },
    clicking4() {
      this.title = this.li_4;
    },
  },
};
</script>

<style scoped>
.menu1 {
  background-image: url("../../assets/bg_menu.jpg");
  background-repeat: no-repeat;
  margin: 0;
  height: 1200px;
}
hr {
  margin: 0;
  border-top: 0;
}
h1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 48px;
  text-align: center;
  font-style: italic;
  background-color: #145a32;
  margin: 0px;
  color: white;
}
h3 {
  font-weight: 700;
}
.btn {
  background-color: #145a32;
  font-weight: 800;
  margin: 20px;
  width: 175px;
}
.btn:hover {
  background-color: white;
  color: #145a32;
}
.btn:focus {
  background-color: white;
  color: #145a32;
}
.dropdown-item:hover {
  background-color: #145a32;
  color: white;
}
.col-sm-4 {
  text-align: center;
}
img {
  width: 225px;
}
.row {
  margin: 50px;
  padding: 20px;
}
.custom {
  background-color: white;
  font-weight: 600;
  margin: 20px;
  border-radius: 5px;
  height: 40px;
  width: 100px;
}
.buy {
  background-color: #145a32;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  height: 40px;
  width: 100px;
}
</style>