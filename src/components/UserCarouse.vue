<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide w-100"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <!-- <div class="d-block bg-dark" :style="backImgage1"></div> -->
        <img
          src="https://jedchang.github.io/ClocksStore/img/banner_02.8b09666c.jpg"
          class="d-block w-100"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://jedchang.github.io/ClocksStore/img/banner_01.c28d7de8.jpg"
          class="d-block w-100 h-auto"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://jedchang.github.io/ClocksStore/img/banner_04.27833224.jpg"
          class="d-block w-100 h-auto"
        />
        <span style="position: absolute; top: 10%; left: 10% " class="row">
          <span class="col-6">123</span>
          <span class="col-6">123</span>
        </span
        >
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // backImgage1: {
      //   height:`500px`,
      //   backgroundImage:`url(https://jedchang.github.io/ClocksStore/img/banner_01.c28d7de8.jpg)`,
      //   backgroundSize:`cover`,
      //   backgroundRepeat:`no-repeat`,
      //   backgroundPosition:`center`,
      // },
      // backImgage1: {},
      // backImgage1: {},
    };
  },
};
</script>
