# 1. ############################################################
# 基于 NODE 镜像，构建前端项目
FROM node:14.15.1-alpine3.12 as build-stage
# 切换工作文件夹
RUN mkdir -p /app
WORKDIR /app
# 复制文件到镜像
COPY ./ .

EXPOSE 3000

# 执行构建命令
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install -g cnpm
RUN cnpm install

# 启动
CMD ["yarn", "dev"]
