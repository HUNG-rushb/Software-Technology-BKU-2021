<template>
  <div>
    <VueGoogleAutocomplete
      id="map"
      classname="form-control"
      placeholder="Nhập địa chỉ"
      v-on:placechanged="getAddressData"
      :country="vn"
    />
  </div>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
  components: { VueGoogleAutocomplete },
};
</script>

<style scoped></style>
