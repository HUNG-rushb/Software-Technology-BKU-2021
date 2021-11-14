<template>
  <div>
    <div class="container overflow-hidden">
      <div class="row gy-3">
        <div
          v-for="item in menu"
          :key="item.id"
          class="col-4"
          data-aos="zoom-in-up"
          data-aos-once="true"
        >
          <MenuCard :food="item" :id="item.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuCard from "./MenuCard.vue";
import getMenu from "../../firebase/getMenu";

export default {
  components: { MenuCard },
  data() {
    return {
      menu: getMenu,
    };
  },

  methods: {},
};
</script>

<style scoped></style>
