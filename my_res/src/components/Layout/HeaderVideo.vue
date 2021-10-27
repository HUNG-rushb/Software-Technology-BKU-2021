<template>
  <div>
    <section class="hero" id="hero">
      <div class="heroText">
        <h1
          class="text-white mt-5 mb-lg-4"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          Nhà hàng Món Việt
        </h1>

        <p
          class="text-secondary-white-color"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Đẳng cấp ẩm thực Việt
        </p>
      </div>

      <div class="videoWrapper">
        <video autoplay="" loop="" muted="" class="custom-video">
          <source src="../../assets/food.mp4" type="video/mp4" />

          Your browser does not support the video tag.
        </video>
      </div>

      <div class="overlay"></div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
}

@media screen and (min-width: 992px) {
  .hero {
    height: 100vh;
  }

  .custom-video,
  .news-detail-image {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
  }

  .sticky-wrapper {
    position: relative;
    bottom: 76px;
  }
}

.heroText {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  text-align: center;
}

.text-secondary-white-color {
  color: white;
}

.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  z-index: -100;

  /* height: 70%; */
}

.custom-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.overlay {
  background: linear-gradient(to top, #000, transparent 90%);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
