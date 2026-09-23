# 获取订阅与即刻使用

录入节点或机场订阅后，SubOne 会自动将它们汇聚到默认配置中。您**不需要做任何复杂配置**，现在就可以直接复制订阅链接，在主流客户端中体验聚合效果！

每个 Profile 均拥有唯一的私有 Token，所有订阅生成与格式转换均围绕此 Token 展开。

![订阅链接复制与查看生成配置](/images/sub1-sublink.png)

---

## 订阅端点完整映射表

客户端可通过以下路径获取对应配置：

| 客户端 / 场景 | 专用订阅路径 | 输出说明 |
| :--- | :--- | :--- |
| **自识别分发 (推荐)** | `/s/:token` | 根据请求头 `User-Agent` 自动识别客户端类型并下发对应格式 |
| **Sing-box** | `/s/:token/singbox` | 完整 JSON 配置 (包含 DNS、Tun、入站、出站及路由分流) |
| **Mihomo (Clash)** | `/s/:token/mihomo` | 完整 YAML 配置 (包含 proxies、proxy-groups、rules) |
| **Loon** | `/s/:token/loon` | CONF 配置 (包含 [Proxy]、[Proxy Group]、[Rule]) |
| **Quantumult X** | `/s/:token/qx` 或 `/s/:token/quantumultx` | CONF 配置 (包含 [server_local]、[policy]、[filter_local]) |
| **Egern** | `/s/:token/egern` | 标准 YAML 配置 (包含 proxies、proxy-groups、rules) |
| **Shadowrocket** | `/s/:token/shadowrocket` 或 `/s/:token/rocket` | 标准小火箭 CONF 配置 |
| **纯节点列表** | `/s/:token/shadowrocket?format=base64` | Base64 编码的单行 URI 节点列表 |
| **独立源端点** | `/s/:token/source/:sourceId` | 单独获取指定源节点列表，支持通过 `?target=` 输出特定格式 |

::: tip 显式指定客户端格式
无论访问哪个路径，都可以在 URL 查询参数后加上 `?target=xxx` 显式覆盖客户端格式，例如：
`https://sub.yourdomain.com/s/TOKEN?target=mihomo`
:::

---

## 在线配置预览

在管理界面点击“查看配置”，可以实时查看当前 Profile 编译生成的配置内容，便于调试排查语法或分流问题：

![查看编译后的客户端配置](/images/sub1-viewconf.png)

---

## 下一步：进阶精细定制

当您在客户端中成功拉取配置并跑通代理后，如果希望进一步对流量进行细化控制，可以开始探索进阶功能：

- **[策略组管理与分类正则](/manual/groups)**：创建自动测速组、故障转移组、按国家地区自动正则归类节点；
- **[分流规则与远程规则集](/manual/rules)**：配置广告拦截、国内直连、AI 服务或媒体服务专属分流；
- **[多 Profile 设备隔离管理](/manual/overview)**：为手机、办公电脑、软路由分配独立的配置与 Token；
- **[模版系统与自定义定制](/manual/templates)**：按需修改客户端底层模版与内核特性。
