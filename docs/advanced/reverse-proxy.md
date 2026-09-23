# Caddy 反向代理与 HTTPS

在生产或公网环境中部署 Subone 时，强烈建议配置域名与反向代理，配合自动申请的 TLS/SSL 证书，以保障订阅链接分发时的传输安全。

---

## 推荐使用 Caddy

[Caddy](https://caddyserver.com/) 是一款配置极其精炼、全自动签发与续期 Let's Encrypt 证书的现代 Web 服务器。

### 1. 安装 Caddy

- **Debian / Ubuntu**：
  ```bash
  sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
  sudo apt update
  sudo apt install caddy
  ```

---

### 2. 配置 Caddyfile

编辑 `/etc/caddy/Caddyfile`：

```caddy
sub.yourdomain.com {
    reverse_proxy 127.0.0.1:3456
    encode gzip zstd
}
```

将 `sub.yourdomain.com` 替换为您已经解析到该服务器 IP 的真实域名。

---

### 3. 重载 Caddy 生效

```bash
caddy reload
```

稍等片刻，Caddy 会自动为您的域名申请 HTTPS 证书。随后您便可以直接通过 `https://sub.yourdomain.com` 安全访问 Subone 控制台与订阅接口。
