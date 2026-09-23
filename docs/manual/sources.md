# 订阅源与自建节点录入

Subone 可以聚合**多个外部机场订阅**与**自建独立节点**，并将它们统一归纳分类。

![订阅源与节点列表](/images/sub1-src.png)

---

## 外部订阅源导入

1. 点击 **添加订阅源**，选择类型为“外部订阅”；
2. 输入上游机场提供的订阅 URL；
3. 支持设置更新频率、节点重命名规则以及过滤正则（如排除到期提示、剩余流量等干扰节点）；
4. Subone 会在后台自动拉取并解析该订阅下的全部节点。

---

## 自建独立节点录入

对于自建的 VPS 节点，Subone 提供了非常便捷的批量添加与格式自动解析功能。

![添加独立节点面板](/images/sub1-addnode.png)

### 支持的输入格式

- **单条 / 批量 URI 链接**：直接粘贴以 `vless://`、`vmess://`、`ss://`、`trojan://`、`hy2://` 等开头的分享链接；
- **Clash / Mihomo YAML**：直接粘贴包含 `proxies:` 字段的 YAML 片段；
- **Sing-box JSON**：直接粘贴完整的 `outbounds` 节点配置。

![批量节点解析与预览](/images/sub1-addnode2.png)

### 支持的协议矩阵

| 协议分类 | 支持的协议与传输特性 |
| :--- | :--- |
| **VLESS** | Reality、Vision、gRPC、WebSocket、HTTPUpgrade、TCP |
| **VMess** | WebSocket、TCP、HTTP/2、gRPC、TLS |
| **Shadowsocks** | SS-2022、AEAD (AES-128-GCM, AES-256-GCM, ChaCha20-Poly1305) |
| **Trojan** | TLS、gRPC、WebSocket |
| **新一代协议** | Hysteria 2 (hy2)、TUIC v5、AnyTLS |
| **网络层 / 其他** | WireGuard、Snell (v1 ~ v4)、SOCKS5、HTTP |

---

## 节点按源分组与标签

录入的节点可指定分组标签（Tag），在后续的策略组中，您可以直接按标签（例如 `自建-搬瓦工`、`机场A-专线`）进行批量匹配与正则筛选。

---

## 录入完成：立即获取可用配置！

添加完机场订阅或自建节点后，Subone 会自动拉取并聚合所有可用节点。

系统自带的 **默认配置 (Default Profile)** 已经预置好了开箱即用的分流与策略规则，您无需手动编写复杂规则，即可立即生成订阅并投入使用！

::: tip 下一步
前往 **[获取订阅与即刻使用](/manual/endpoints)** 复制订阅链接或导出客户端配置文件。
:::
