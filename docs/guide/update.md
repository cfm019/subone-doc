# 版本更新与维护

当 Subone 发布了新特性或修复漏洞时，您可以通过以下方式便捷地升级到最新版本。

## 一键脚本更新 (推荐)

如果您是通过一键安装脚本部署的 Subone，只需在终端运行：

```bash
bash /opt/subone/install.sh update
```

或者使用在线脚本触发更新：

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/cfm019/subone/main/install.sh) update
```

此操作将自动：
- 拉取 GitHub 仓库最新 Release / Commit；
- 更新依赖并重新编译前端与后端；
- 平滑重启 `subone` 系统服务。

---

## 源码手动升级流程

若是通过源码部署，可以进入安装目录手动拉取并编译：

```bash
cd /opt/subone

# 拉取最新代码
git pull origin main

# 安装可能更新的依赖
npm install

# 重新编译
npm run build

# 重启 systemd 服务
systemctl restart subone
```

---

## 数据备份建议

Subone 的所有数据存放在根目录的 `data/` 目录中：

```text
/opt/subone/
├── data/
│   ├── config.json       # 站点配置
│   ├── profiles.json     # 配置 Profile
│   ├── sources.json      # 订阅源与节点
│   └── ...
└── templates/            # 客户端模版
```

在进行大版本升级前，建议对 `data/` 和 `templates/` 做一次快速备份：

```bash
tar -czvf /root/subone-backup-$(date +%Y%m%d).tar.gz /opt/subone/data /opt/subone/templates
```
