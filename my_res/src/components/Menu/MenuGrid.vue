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

        <br />
        <br />

        <label for="sort" class="left" id="sort_label">Sắp xếp theo: </label>
        <select id="sort" class="form-select" v-model="sort" name="Sort">
          <option value="default" class="option" selected>Mặc định</option>
          <option value="aaa" class="option">Tên: A-Z</option>
          <option value="zzz" class="option">Tên: Z-A</option>
          <option value="high" class="option">Giá: Cao-Thấp</option>
          <option value="low" class="option">Giá: Thấp-Cao</option>
        </select>
      </div>

      <div class="col-md-9">
        <div class="container overflow-hidden">
          <div class="row gy-3">
            <div
              v-for="item in searchMenu"
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
      menu: getMenu,
      searchQuery: "",
      sort: "",
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

    searchMenu() {
      let foodmenu = this.resultQuery;

      if (this.sort == "high") {
        return foodmenu.sort(function(a, b) {
          return b.price - a.price;
        });
      } else if (this.sort == "low") {
        return foodmenu.sort(function(a, b) {
          return a.price - b.price;
        });
      } else if (this.sort == "aaa") {
        return foodmenu.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else if (this.sort == "zzz") {
        return foodmenu.sort((a, b) => (b.name > a.name ? 1 : -1));
      } else {
        return foodmenu;
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
