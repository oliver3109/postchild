![postchild](https://socialify.git.ci/OLIVERgZzy/postchild/image?description=1&descriptionEditable=Imitated%20Postman%20and%20built%20a%20free%20and%20beautiful%20API%20request%20building%20tool%20to%20help%20you%20develop%20and%20test%20more%20efficiently.&font=Inter&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light)

# postchild

# 前言

想必大家平日里开发接口，或多或少都用过 postman 这款接口测试工具，应该都对他不陌生。近日偶然发现一款 web 版接口测试工具并且免费开源。对，它就是 [postwoman](https://postwoman.io/)，清爽帅气的 UI 界面，强大的功能，相对 postman 丝毫不逊色，令我啧啧称赞。

# 动机

出于学习的目的，我也模仿开发了一个精简版接口测试工具并起名为 [postchild](http://postchild.io)。
既然是学习的目的，在此次项目中我会尽可能的减少第三方库的使用，尽量靠自己写代码去实现。在过程，也是一种对知识的查漏补缺，尤其是我对 web 通讯、http 协议这方面的不足。下面将会简单介绍一下运用到的技术栈和对未来打算实现的功能。

# 技术栈

1. Vue
2. Nuxt
3. Axios
4. Travis CI

# 功能清单

- [x] 基本请求 GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH
- [x] 历史记录(vuex 实现)
- [ ] WebSocket
- [ ] SocketIO
- [ ] GraphQL
- [ ] 界面主题色切换
- [ ] 授权登录(为了储存历史记录和收藏夹)
- [ ] 收藏夹功能

# 体验地址

最后再发一下体验地址: [http://postchild.io](http://postchild.io)