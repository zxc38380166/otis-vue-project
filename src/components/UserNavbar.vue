<template>
    <div class="bg-dark">
        <div class="navber d-flex justify-content-center">
            <!-- 導覽列 -->
            <nav class="navbar navbar-expand-lg navbar-dark bg-light w-75 justify-content bg-dark">
                <div class="container-fluid">
                    <router-link class="navbar-brand" to="/ServerBoard/ServerProducts">切換至後台端</router-link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" aria-current="page" href="#">品牌故事</a>
                            <a class="nav-link" href="#">FAQ</a>
                            <a class="nav-link" href="#">合作邀約</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>