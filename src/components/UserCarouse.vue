<template>
  <!-- 手機板 -->
  <div class="bg-dark w-100 phone-img d-md-none"></div>
  <!-- 輪播檔 -->
  <div
    id="carouselExampleIndicators"
    class="carousel slide d-none d-md-block carousel-fade"
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
      <div class="carousel-item active img-1"></div>
      <div class="carousel-item img-2"></div>
      <div class="carousel-item img-3"></div>
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
<style lang="scss">
@mixin Image-Style($height, $url) {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: $height;
  background-image: url($url);
  animation-name: carousel;
  animation-duration: 4s;
  @keyframes carousel {
    0% {
      opacity: 0;
    }
  }
}
.carousel-inner {
  .img-1 {
    @include Image-Style(
      490px,
      "https://images.pexels.com/photos/1546333/pexels-photo-1546333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    );
  }
  .img-2 {
    @include Image-Style(
      490px,
      "https://images.pexels.com/photos/23475/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    );
  }
  .img-3 {
    @include Image-Style(
      490px,
      "https://images.pexels.com/photos/691640/pexels-photo-691640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    );
  }
}
.phone-img {
  @include Image-Style(
    230px,
    "https://images.pexels.com/photos/691640/pexels-photo-691640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  );
}
</style>
