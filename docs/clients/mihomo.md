# Mihomo (Clash) 配置指引

Mihomo（即 Clash.Meta）是目前活跃的主流核心，SubOne 生成标准的 Mihomo YAML 配置文件。

## 订阅导入

在 Mihomo Party、Clash Verge Rev 或原版 Clash 中添加订阅链接：

```text
https://sub.yourdomain.com/s/<TOKEN>/mihomo
```

或者使用通用自识别链接：

```text
https://sub.yourdomain.com/s/<TOKEN>
```

---

## 策略组与规则转换

- SubOne 会将 Web 端配置的策略组转换为 YAML 下的 `proxy-groups` 数组，支持 `select`、`url-test`、`fallback`、`load-balance`；
- 分流规则自动转换为 Mihomo 的 `rules:` 语法，并支持挂载外部 `rule-providers`；
- 自带针对现代协议（如 Hysteria 2、VLESS Reality 等）的语法补齐。
