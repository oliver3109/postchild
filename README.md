![postchild](https://socialify.git.ci/OLIVERgZzy/postchild/image?description=1&descriptionEditable=%E6%A8%A1%E4%BB%BF%20Postman%EF%BC%8C%E6%90%AD%E5%BB%BA%E4%BA%86%E4%B8%80%E4%B8%AA%E5%85%8D%E8%B4%B9%E5%A5%BD%E7%9C%8B%E7%9A%84%20API%20%E8%AF%B7%E6%B1%82%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7%EF%BC%8C%E5%B8%AE%E5%8A%A9%E6%82%A8%E6%9B%B4%E9%AB%98%E6%95%88%E7%9A%84%E5%BC%80%E5%8F%91%E5%92%8C%E6%B5%8B%E8%AF%95%E3%80%82&font=Inter&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light)

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
