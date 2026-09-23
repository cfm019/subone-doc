# Loon / Quantumult X / Egern / Shadowrocket

SubOne 全面支持 Apple 生态下的各类主流网络工具。

## Loon

- **专属端点**：`/s/:token/loon`
- **生成内容**：标准 CONF 配置，包含 `[Proxy]`、`[Proxy Group]`、`[Rule]` 等区块。
- **解耦特性**：自动将外部机场与自建节点转换为独立的节点订阅源，策略组直接绑定订阅源标签。

---

## Quantumult X

- **专属端点**：`/s/:token/qx` 或 `/s/:token/quantumultx`
- **生成内容**：标准 QX CONF 配置，包含 `[server_local]`、`[policy]`、`[filter_local]` 以及远程资源引用。

---

## Egern

- **专属端点**：`/s/:token/egern`
- **生成内容**：符合 Egern 规范的 YAML 格式，完整支持 VLESS Reality 与 Hysteria 2 等新一代协议。

---

## Shadowrocket (小火箭)

- **专属端点**：`/s/:token/shadowrocket` 或 `/s/:token/rocket`
- **纯节点 Base64**：`/s/:token/shadowrocket?format=base64`
- **特征**：既可以导入完整配置托管，也可以作为纯节点订阅一键拉取。
