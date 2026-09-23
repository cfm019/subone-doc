# 快速开始

SubOne 提供了一键安装脚本，可以在几分钟内完成 Node.js 环境准备、源码拉取、构建和后台服务注册。

## 一键脚本安装 (推荐)

在 Linux 服务器（如 Ubuntu / Debian / CentOS / Alpine 等）终端执行以下命令：

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/cfm019/subone/main/install.sh)
```

脚本将自动执行以下操作：
1. 检查并安装 Node.js (>= 20) 运行环境；
2. 拉取最新源码至 `/opt/subone`；
3. 安装依赖并编译前端与后端；
4. 配置并启动 Systemd 后台常驻服务。

![一键安装过程](/images/sub1-install.png)

安装脚本执行过程中，会自动提示您输入 Web 服务监听端口（直接回车默认使用 `3456`），并打印完整的服务访问地址与管理指令提示：

![一键安装完成提示](/images/sub1-install2.png)

---

## 访问与登录控制台

安装完成后，打开浏览器访问：

- **控制台地址**：`http://<你的VPS_IP>:3456`
- **安装根目录**：`/opt/subone`
- **默认配置文件**：`/opt/subone/config.json`

::: warning 重要安全提示：请立即设置密码
初次安装时，系统默认是**免密直接登录**的。如果您的服务直接暴露在公网，请在首次进入控制台后，立即前往右上角 **设置 (Settings)** 添加管理员密码！
:::

![设置登录密码](/images/sub1-password.png)

您也可以直接通过编辑 `/opt/subone/config.json` 来设置密码：

```json
{
  "port": 3456,
  "adminPassword": "你的强密码"
}
```

修改后执行重启命令生效：

```bash
systemctl restart subone
```

---

## 常用服务管理命令

SubOne 注册为标准的 `systemd` 服务，可通过以下命令进行日常维护：

```bash
# 查看服务运行状态
systemctl status subone

# 查看实时运行日志
journalctl -u subone -f

# 重启服务
systemctl restart subone

# 停止服务
systemctl stop subone

# 启动服务
systemctl start subone
```

---

## 下一步

安装完成并设置管理密码后，即可开始导入节点：

👉 **[前往录入节点与机场订阅](/manual/sources)**

