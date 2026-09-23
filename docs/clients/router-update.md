# 路由器 / OpenWrt 自动更新脚本

对于部署在 OpenWrt 或 Linux 软路由 / 旁路由上的 Sing-box 透明网关，SubOne 官方仓库在 `tools/update-singbox.sh` 提供了专用的定时拉取更新脚本，配套 `templates/singbox-gateway.json` 模版使用。

## 1. 下载脚本到路由器

在路由器终端中执行：

```bash
# 下载到管理目录（如 /root）并赋予执行权限
curl -4 -sSL -o /root/update-singbox.sh https://raw.githubusercontent.com/cfm019/subone/main/tools/update-singbox.sh
chmod +x /root/update-singbox.sh
```

---

## 2. 执行更新测试

支持以下任一方式传入您的 Sing-box 订阅链接（注意路径后带 `/singbox`）：

```bash
# 方式 1：命令行直接传参（推荐）
/root/update-singbox.sh "https://sub.yourdomain.com/s/YOUR_TOKEN/singbox"

# 方式 2：通过环境变量执行
SUB_URL="https://sub.yourdomain.com/s/YOUR_TOKEN/singbox" /root/update-singbox.sh

# 方式 3：编辑脚本开头的 SUB_URL 变量后直接执行
/root/update-singbox.sh
```

---

## 3. 可配置环境变量

根据路由固件环境，可通过环境变量覆盖默认路径：

| 环境变量 | 默认值 | 说明 |
| :--- | :--- | :--- |
| `SUB_URL` | *(必填)* | SubOne 的 Sing-box 订阅链接 |
| `TARGET_CONF` | `/etc/sing-box/config.json` | 路由器上 sing-box 的配置文件目标路径 |
| `SINGBOX_BIN` | `/usr/bin/sing-box` | sing-box 核心二进制程序路径 |
| `RELOAD_CMD` | `/etc/init.d/sing-box restart` | 重载/重启 sing-box 服务的命令 (systemd 环境可设为 `systemctl restart sing-box`) |

---

## 4. 配置定时自动更新 (Crontab)

在 OpenWrt 终端执行 `crontab -e`，添加定时任务（例如每天凌晨 4:00 自动拉取更新并记录日志）：

```cron
0 4 * * * /root/update-singbox.sh "https://sub.yourdomain.com/s/YOUR_TOKEN/singbox" >> /var/log/update-singbox.log 2>&1
```
