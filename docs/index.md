---
layout: home

hero:
  name: "Subone"
  text: "多源多节点聚合与配置生成"
  tagline: "汇聚机场订阅与自建独立节点，分 Profile 定制策略组与分流规则，生成组合后的聚合订阅配置。"
  image:
    src: /logo.svg
    alt: Subone Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quick-start
    - theme: alt
      text: 使用手册
      link: /manual/sources
    - theme: alt
      text: GitHub 仓库
      link: https://github.com/cfm019/subone

features:
  - icon: 🧩
    title: 多 Profile 分机应用
    details: 支持为手机、电脑、软路由等不同终端配置专属 Profile，各自拥有独立 Token 链接与定制规则。
  - icon: 🔄
    title: 多订阅与多自建聚合
    details: 汇聚多个上游机场订阅与自建独立节点，支持单条/批量 URI、Clash YAML、Sing-box JSON 格式解析。
  - icon: 🌐
    title: 多协议配置解析
    details: 支持 VLESS、VMess、Shadowsocks、Trojan、Hysteria 2、TUIC v5、AnyTLS、WireGuard、Snell 等协议解析。
  - icon: 🎯
    title: 可视化策略组
    details: 可视化的策略组编辑，支持订阅源与自建节点组合编排，支持成组套用和展开挂载。
  - icon: 📱
    title: 规则集编制
    details: 支持远程规则集和本地自定义规则集，一套规则多机复用。
  - icon: ⚡
    title: 特色规则组
    details: 外部订阅保持原链接，自建节点组、规则组转为独立端点。节点变动仅刷新对应订阅源。
  - icon: 📝
    title: 模版热修改
    details: 内置各客户端标准规范模版，支持自定义模版扩展与热修改。
  - icon: 🛡️
    title: 轻依赖
    details: Node.js 原生开发，支持一键安装脚本与 Docker / Compose 容器化部署，几秒即可拉起完整控制台。
---

<div style="margin-top: 2.5rem; text-align: center; color: var(--vp-c-text-2);">
  <p>一键安装：</p>
  <div class="language-bash" style="max-width: 680px; margin: 0 auto; text-align: left;">
    <pre><code>bash &lt;(curl -fsSL https://raw.githubusercontent.com/cfm019/subone/main/install.sh)</code></pre>
  </div>
</div>
