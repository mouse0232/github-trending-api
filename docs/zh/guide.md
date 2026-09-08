# GTA - github-trending-api

面向开发人员和 RSS 订阅者的 Github 趋势数据

通过 JavaScript 编写并使用 GitHub Actions Service 定时执行脚本，获取 [GitHub Trending Page](https://github.com/trending) 上热门仓库信息。

## 使用

|   | 说明 | 选项 |
| - | - | - |
| since | 时间范围 | daily |
| language | 语言 | [语言列表](https://raw.githubusercontent.com/isboyjc/github-trending-api/main/data/languages.json) or [语言列表 - cdn](https://cdn.jsdelivr.net/gh/isboyjc/github-trending-api/data/languages.json) 语言名请使用小写，空格使用 "-" 连接符 |

本仓库只定时爬取 GitHub Trending 日榜。查看全部语言的趋势数据，语言请传入 `all`。

```bash
# json or rss
https://raw.githubusercontent.com/isboyjc/github-trending-api/main/data/daily/{language}.json
https://raw.githubusercontent.com/isboyjc/github-trending-api/main/data/daily/{language}.xml

# cdn
https://cdn.jsdelivr.net/gh/isboyjc/github-trending-api/data/daily/{language}.json
https://cdn.jsdelivr.net/gh/isboyjc/github-trending-api/data/daily/{language}.xml
```

## 示例

```bash
# language: all
https://raw.githubusercontent.com/isboyjc/github-trending-api/main/data/daily/all.json
https://raw.githubusercontent.com/isboyjc/github-trending-api/main/data/daily/all.xml
https://cdn.jsdelivr.net/gh/isboyjc/github-trending-api/data/daily/all.json
https://cdn.jsdelivr.net/gh/isboyjc/github-trending-api/data/daily/all.xml

# language: javascript
https://raw.githubusercontent.com/isboyjc/github-trending-api/main/data/daily/javascript.json
https://raw.githubusercontent.com/isboyjc/github-trending-api/main/data/daily/javascript.xml
https://cdn.jsdelivr.net/gh/isboyjc/github-trending-api/data/daily/javascript.json
https://cdn.jsdelivr.net/gh/isboyjc/github-trending-api/data/daily/javascript.xml

# language: java
https://raw.githubusercontent.com/isboyjc/github-trending-api/main/data/daily/java.json
https://raw.githubusercontent.com/isboyjc/github-trending-api/main/data/daily/java.xml
https://cdn.jsdelivr.net/gh/isboyjc/github-trending-api/data/daily/java.json
https://cdn.jsdelivr.net/gh/isboyjc/github-trending-api/data/daily/java.xml
```


## 相关链接

- [Rsstabs](https://rsstabs.com) 在 RssTabs 中打造您自己的 AI 新闻助手，智能、个性化、轻松高效。


## 许可证

采用 MIT 许可协议进行许可， © 2024 [Isboyjc](https://github.com) 版权所有