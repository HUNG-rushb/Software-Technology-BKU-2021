<template>
  <section class="google-map" data-aos="zoom-in-up">
    <!-- https://developers.google.com/maps/documentation/embed/map-generator -->
    <iframe
      id="MapAPI"
      loading="lazy"
      allowfullscreen
      src="https://www.google.com/maps/embed/v1/search?q=Tr%C6%B0%E1%BB%9Dng%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20B%C3%A1ch%20khoa%20-%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20Qu%E1%BB%91c%20gia%20TP.HCM%20&key=AIzaSyCLmkMvRT42aeaFqentZfmn09iJtDLa7es"
    ></iframe>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.google-map {
  margin-top: 3rem;
  scale: 1.2;
  background-color: #666363;
}

#MapAPI {
  width: 100%;
  height: 100%;
  padding: 0.8rem;
  margin: 0;
}
</style>
