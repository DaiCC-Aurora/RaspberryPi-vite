import {defineConfig} from "vite";

export default defineConfig({
    server:{
        host:'0.0.0.0' ,//ip地址
        port: 8080, // 设置服务启动端口号
        open: false, // 设置服务启动时是否自动打开浏览器
    }
})