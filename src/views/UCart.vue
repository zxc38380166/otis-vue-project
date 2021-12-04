<template>
    <div class="dashbord">
        <div class="nav-left">
            <p>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                    data-bs-target="#multiCollapseExample2" aria-expanded="false"
                    aria-controls="multiCollapseExample2" container-fluid >456</button>
            </p>
            <div class="row">
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                        <div class="card card-body">
                            技嘉5455555555555555555555  <button>5</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2>
                顯示卡
            </h2>
            <h2>
                機殼
            </h2>
        </div>
        <div class="products">products
            <div class="search">搜尋 <input type="text"></div>
            <div class="items">
                <div class="item">item</div>
                <div class="item">item</div>
                <div class="item">item</div>
                <div class="item">item</div>
            </div>

        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
    }
</script>
<style lang="scss">
    .dashbord {
        width: 100vw;
        height: 100vh;
        /* background-image: url('../assets/img.jpg'); */
        display: flex;
        align-items: center;
        background-color: cyan;
    }
    .nav-left {
        width: 20%;
        height: 100%;
        background-color: darkgreen;
    }
    .search {
        color: darkred;
    }
    .products {
        width: 80%;
        height: 100%;
        background-color: cadetblue;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
    }
    .items {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
    }
    .item {
        height: 50px;
        width: 25%;
        background-color: blueviolet;

    }
    @media(max-width:1200px) {
        .items>.item {
            width: 50%;
            background-color: darkgreen;
        }
    }

    @media(max-width:500px) {
        .items>.item {
            width: 100%;
            background-color: darkorchid;
        }
    }
</style>