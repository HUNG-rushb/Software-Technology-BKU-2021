<template>
  <div>
    <div class="row homegrid">
      <div class="col-md-3">
        <div class="input-group rounded">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Tìm kiếm món ăn"
            aria-label="Search"
            aria-describedby="search-addon"
            v-model="searchQuery"
          />
          <span class="input-group-text border-0" id="search-addon">
            <i class="bi bi-search"></i>
          </span>
        </div>
      </div>

      <div class="col-md-9">
        <div class="container overflow-hidden">
          <div class="row gy-3">
            <div
              v-for="item in resultQuery"
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
      searchQuery: null,
      menu: getMenu,
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.menu.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.menu;
      }
    },
  },

  methods: {},
};
</script>

<style scoped>
.homegrid {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
</style>
