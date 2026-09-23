# 源码编译运行

如果您希望自行从源码拉取并编译构建 SubOne，请参考以下指南。

## 1. 环境准备

- **Node.js**: `>= 20.0.0`（建议 LTS 版本）
- **npm**: `>= 9.0.0`

通过以下命令确认版本：

```bash
node -v
npm -v
```

---

## 2. 拉取与编译

```bash
# 克隆仓库
git clone https://github.com/cfm019/subone.git /opt/subone
cd /opt/subone

# 安装全部依赖
npm install

# 编译前后端产物
npm run build
```

---

## 3. 配置文件

复制示例配置文件并根据需要修改：

```bash
cp config.example.json config.json
```

`config.json` 示例结构：

```json
{
  "port": 3456,
  "adminPassword": "YOUR_ADMIN_PASSWORD"
}
```

- `port`：服务监听端口，默认 `3456`；
- `adminPassword`：Web 控制台密码，留空则免密登录。

---

## 4. 创建 Systemd 常驻服务

为了让服务在后台常驻并在机器重启后自动恢复，创建 `/etc/systemd/system/subone.service` 文件：

```ini
[Unit]
Description=SubOne Subscription Service
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/opt/subone
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=5
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

::: tip 提示
若您的 `npm` 二进制路径不在 `/usr/bin/npm`，可在终端执行 `which npm` 查询并将 `ExecStart` 替换为实际路径。
:::

### 启动并设置开机自启

```bash
systemctl daemon-reload
systemctl enable --now subone
systemctl status subone
```
