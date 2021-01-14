<template>
    <div class="login">
        <div class="login-all"></div>
        <div class="login-cell">
            <p>管理系统</p>
        </div>
        <div class="login-pull">
            <div class="layout">
                <div class="layout-header">
                    用户登录
                </div>
                <div class="layout-item">
                    <div class="layout-userlable">
                        用户名
                    </div>
                    <input type="text" v-model="username" style="border-style: none none solid;">
                </div>
                <div class="layout-item">
                    <div class="layout-userlable">
                        密码
                    </div>
                    <input type="password" v-model="password" style="border-style: none none solid;">
                </div>
                <div class="layout-item">
                    <div class="layout-userlable">
                        验证码
                    </div>
                    <input type="text" style="border-style: none none solid;">
                    <div class="layout-code">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="layout-remember">
                    <div class="layout-remember-box">
                        <el-checkbox v-model="checked">记住我</el-checkbox>
                    </div>
                </div>
                <div class="layout-remember">
                    <el-button class="layout-button" @click="login()" size="medium" type="primary">登录</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
    @import './style.scss';
</style>