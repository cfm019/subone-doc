# 模版系统与自定义定制

为了兼容不同客户端的特有字段（例如 Sing-box 的 `dns` / `inbounds` / `experimental`，Mihomo 的 `sniffer` / `tun` 等），Subone 采用了模版注入机制。

![客户端模版管理界面](/images/sub1-template.png)

---

## 内置基础模版清单

所有模版文件均放置在服务运行根目录下的 `templates/` 目录，启动时自动加载并支持热修改：

| 模版文件 | 目标客户端 / 模块 | 主要特征与场景 |
| :--- | :--- | :--- |
| `singbox-client.json` | Sing-box 客户端 | 适用 iOS/macOS 终端，配置 Tun 并排除局域网及 Tailscale 防回环 |
| `singbox-gateway.json` | Sing-box 网关 | 软路由/Linux 旁路由透明网关，`auto_redirect` 自动分流 |
| `mihomo.yaml` | Mihomo / Clash | 标准 YAML 模版，带 Fake-IP DNS 与策略组占位 |
| `loon.conf` | Loon | 标准 CONF 模版，支持订阅源解耦与规则组注入 |
| `quantumultx.conf` | Quantumult X | 标准 QX 模版，含 `[server_local]`、`[policy]`、`[filter_local]` |
| `egern.yaml` | Egern | 标准 YAML 模版，全面支持现代 Reality/Hy2 协议 |
| `shadowrocket.conf` | Shadowrocket | 标准小火箭模版，支持全协议单行配置与规则集 |

---

## 模版自定义与热修改

1. 您可以在 Web 控制台的“模版”选项卡直接在线编辑模版内容；
2. 也可以直接使用文本编辑器修改服务器上的 `/opt/subone/templates/*.json|*.yaml|*.conf` 文件；
3. 修改保存后即时生效，下次客户端刷新订阅时即可拉取到最新模版组合出的配置。
