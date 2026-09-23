# Sing-box 客户端指引

SubOne 对 Sing-box 提供了完整原生的全特性支持，输出标准 JSON 格式，包含了入站 (Inbounds)、DNS、出站 (Outbounds) 及规则分流 (Route)。

## 订阅导入方式

1. 打开 Sing-box 客户端（支持 iOS、macOS、Android、Windows）；
2. 添加配置来源为“Remote / 远程订阅”；
3. 填入 SubOne 提供的 Sing-box 订阅链接：
   ```text
   https://sub.yourdomain.com/s/<TOKEN>/singbox
   ```
4. 保存并拉取配置即可。

---

## 模版与特性适配

SubOne 默认提供两套 Sing-box 模版：

### 1. 终端设备模版 (`singbox-client.json`)
- 启用系统级 Tun 虚拟网卡接管；
- 配置本地私有地址与 Tailscale 路由排除，杜绝回环与 IPv6 泄漏；
- 预置 Fake-IP 与原生直连分流。

### 2. 旁路由 / 透明网关模版 (`singbox-gateway.json`)
- 针对 Linux / OpenWrt 软路由环境；
- 启用 `auto_redirect` 自动流量重定向与 DNS 劫持；
- 支持搭配 SubOne 提供的自动更新脚本实现定时刷新。
