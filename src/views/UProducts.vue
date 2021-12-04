<template>
    <div class="d-flex flex-wrap justify-content-center h-100 bg-dark">
        <!-- 輪播 -->
        <div class="w-100 py-2">
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
                        <img src="https://jedchang.github.io/ClocksStore/img/banner_02.8b09666c.jpg"
                            class="d-block w-100" alt="..." style="height:auto;">
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
        <!-- search and cart -->
        <div class="container py-2">
            <div class="row">
                <div class="col-12 col-xl-8 py-2  text-warning" >
                        結帳時輸入 
                        <span class="text-decoration-underline">watch</span> 
                        即享88折優惠
                </div>
                <div class="col-12 col-xl-4 d-flex ">
                    <input class="form-control w-75" type="search" placeholder="Search" aria-label="Search ">
                    <i class="bi bi-cart4 ps-4" style="font-size: 2rem;color: cornflowerblue"></i>
                </div>
            </div>
        </div>
        <!-- products -->
        <div class="container py-2">
            <div class="row">
                <div class="col-12 col-sm-4">
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1468421201266-ec88b2809284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80    "
                            class="card-img-top " alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-primary w-75">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-4">
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1468421201266-ec88b2809284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80    "
                            class="card-img-top " alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-primary w-75">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-4">
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1468421201266-ec88b2809284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80    "
                            class="card-img-top " alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-primary w-75">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- foot -->
        <div class="container py-2">
            <div class="row">
                <div class="col-12">
                    <div class="card text-center">
                        <div class="card-header">
                            <i class="bi bi-truck" style="font-size: 2rem;color: cornflowerblue"></i>
                            全館消費滿3000即享免運費
                        </div>
                        <div class="card-body">
                            <div class="container">
                                <div class="row ">
                                    <div class="col-12 col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">聯絡資訊</h5>
                                                <p class="text-muted">
                                                    <i class="bi bi-shop"
                                                        style=" font-size: 1.5rem;color:cornflowerblue"></i>
                                                    嘉義縣中埔鄉富收村富和路51號
                                                </p>
                                                <p class="text-muted">
                                                    <i class="bi bi-telephone"
                                                        style=" font-size: 1.5rem;color:cornflowerblue"></i>
                                                    0986074168
                                                </p>
                                                <p class="text-muted">
                                                    <i class="bi bi-envelope"
                                                        style=" font-size: 1.5rem;color:cornflowerblue"></i>
                                                    zxc38380166@yahoo.com.tw
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">社群</h5>
                                                <p class="card-text">
                                                    <i class="bi bi-facebook"
                                                        style=" font-size: 1.5rem;color:cornflowerblue"></i>
                                                    xxxxx
                                                </p>
                                                <p class="card-text">
                                                    <i class="bi bi-instagram"
                                                        style=" font-size: 1.5rem;color:cornflowerblue"></i>
                                                    xxxxx
                                                </p>
                                                <p class="card-text">
                                                    <i class="bi bi-github"
                                                        style=" font-size: 1.5rem;color:cornflowerblue"></i>
                                                    xxxxx
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-muted">
                            <i class="bi bi-watch"></i>
                            此網頁僅供面試使用,無商業用途,圖片取自於網路
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
        },
    }
</script>
<style lang="scss"> 

</style>