<template>
  <div>
    <div class="container overflow-hidden">
      <div class="row gy-3">
        <div class="col-4" data-aos="zoom-in-up" data-aos-once="true">
          <FoodCard />
        </div>
        <div class="col-4" data-aos="zoom-in-up" data-aos-once="true">
          <FoodCard />
        </div>
        <div class="col-4" data-aos="zoom-in-up" data-aos-once="true">
          <FoodCard />
        </div>
        <div class="col-4" data-aos="zoom-in-up" data-aos-once="true">
          <FoodCard />
        </div>
        <div class="col-4" data-aos="zoom-in-up" data-aos-once="true">
          <FoodCard />
        </div>
        <div class="col-4" data-aos="zoom-in-up" data-aos-once="true">
          <FoodCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FoodCard from "./FoodCard.vue";

export default {
  components: { FoodCard },
  methods: {},
};
</script>

<style scoped></style>
