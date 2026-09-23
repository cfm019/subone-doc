# SubOne Documentation (subone-doc)

SubOne 官方使用文档站点，基于 [VitePress](https://vitepress.dev/) 构建。

- **在线文档**：`https://cfm019.github.io/subone-doc/`
- **SubOne 代码仓库**：[cfm019/subone](https://github.com/cfm019/subone)

---

## 本地开发与预览

```bash
# 1. 安装依赖
npm install

# 2. 启动本地开发服务 (带热重载)
npm run docs:dev

# 3. 生产静态构建
npm run docs:build

# 4. 本地预览构建产物
npm run docs:preview
```

启动后在浏览器打开终端提示的地址（通常为 `http://localhost:5173`）即可预览。

---

## GitHub Pages 自动部署

本项目已预置 GitHub Actions 自动化部署工作流（[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)）。

当您将代码推送到 GitHub 的 `subone-doc` 仓库 `main` 分支后：
1. 前往仓库 **Settings** -> **Pages**；
2. 在 **Build and deployment** 下将 **Source** 切换为 **GitHub Actions**；
3. 后续每次 push 即可自动触发编译并发布到 GitHub Pages。
