# 分流规则与远程规则集

SubOne 提供了高度统一的分流规则编排能力，不论最终输出到哪种客户端格式，您都可以在控制台中用同一套直观的界面来定义分流逻辑。

![分流规则配置面板](/images/sub1-rules.png)

---

## 本地规则 (Local Rules)

支持标准的匹配条件与去向策略组绑定：

- **DOMAIN**：完全匹配单个域名，如 `google.com`；
- **DOMAIN-SUFFIX**：匹配域名及其所有子域名，如 `apple.com`；
- **DOMAIN-KEYWORD**：匹配包含特定关键字的域名；
- **IP-CIDR / IP-CIDR6**：IP 段匹配，如 `192.168.0.0/16`、`10.0.0.0/8`；
- **GEOIP**：基于 GeoIP 国家库分流，如 `CN`；
- **MATCH / FINAL**：默认兜底规则。

---

## 远程规则集 (Rule-Set)

为了保持规则的时效性，SubOne 支持无缝对接社区维护的权威规则集：

- **SRS (Sing-box Rule-Set)**：针对 Sing-box 编译的二进制规则集；
- **MRS (Mihomo Rule-Set)**：针对 Mihomo 格式的规则集；
- **GeoSite / GeoIP 规则集**：主流协议通用的规则集合。

您只需在模版或规则库中定义好规则集链接，系统在生成对应客户端配置时，会自动转换为目标客户端原生支持的规则集语法格式。
