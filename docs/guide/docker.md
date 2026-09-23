# Docker 容器化部署

如果您更倾向于容器化管理，SubOne 提供了开箱即用的 Docker 镜像。

## 单命令快速运行

使用以下命令直接拉取并运行最新镜像：

```bash
docker run -d \
  --name subone \
  --restart unless-stopped \
  -p 3456:3456 \
  -v $(pwd)/data:/app/data \
  -v $(pwd)/templates:/app/templates \
  -e ADMIN_PASSWORD=your_strong_password \
  cfm019/subone:latest
```

### 挂载卷说明

- `$(pwd)/data:/app/data`：持久化保存订阅配置、节点数据、规则及用户 Profile；
- `$(pwd)/templates:/app/templates`：持久化客户端模版文件，方便自定义与热修改。

---

## 使用 Docker Compose 部署 (推荐)

创建 `docker-compose.yml` 文件：

```yaml
version: '3.8'

services:
  subone:
    image: cfm019/subone:latest
    container_name: subone
    restart: unless-stopped
    ports:
      - "3456:3456"
    volumes:
      - ./data:/app/data
      - ./templates:/app/templates
    environment:
      - PORT=3456
      - ADMIN_PASSWORD=your_strong_password
```

### 启动服务

```bash
docker compose up -d
```

### 查看日志

```bash
docker compose logs -f
```

### 容器更新

```bash
docker compose pull
docker compose up -d
```
