<template>
    <div class="d-flex flex-wrap justify-content-center" style="background-color: rgb(32, 30, 30);color: red">
        <div class="w-75">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            class="d-block w-100" alt="..." style="height:800px;">
                    </div>
                    <div class="carousel-item">
                        <img src="https://jedchang.github.io/ClocksStore/img/banner_01.c28d7de8.jpg"
                            class="d-block w-100" alt="..." style="height:auto;">
                    </div>
                    <div class="carousel-item">
                        <img src="https://jedchang.github.io/ClocksStore/img/banner_04.27833224.jpg"
                            class="d-block w-100" alt="..." style="height:auto;">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="w-75 d-flex justify-content-center">
            <form class="d-flex w-50 ">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search ">
                <!-- <button type="button" class="btn btn-outline-secondary">Secondary</button> -->
            </form>
        </div>
        <div class="w-75">123</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
    }
</script>
<style lang="scss">

</style>