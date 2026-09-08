# GTA - github-trending-api

Github trending data for developers and rss subscribers

Get information about popular repositories on the [GitHub Trending Page](https://github.com/trending) via a script written in JavaScript and executed using GitHub Actions Service.

## Use

|   | description | options |
| - | - | - |
| since | Date range | daily |
| language | Language | [Languages list](https://raw.githubusercontent.com/isboyjc/github-trending-api/main/data/languages.json) or [Languages list - cdn](https://cdn.jsdelivr.net/gh/isboyjc/github-trending-api/data/languages.json) Use lowercase for language names and the "-" hyphen for spaces. |

This project only crawls the GitHub Trending daily ranking. To view trend data for all languages, pass in `all` for language.

```bash
# json or rss
https://raw.githubusercontent.com/isboyjc/github-trending-api/main/data/daily/{language}.json
https://raw.githubusercontent.com/isboyjc/github-trending-api/main/data/daily/{language}.xml

# cdn
https://cdn.jsdelivr.net/gh/isboyjc/github-trending-api/data/daily/{language}.json
https://cdn.jsdelivr.net/gh/isboyjc/github-trending-api/data/daily/{language}.xml
```

## Example

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


## Related links

- [Rsstabs](https://rsstabs.com) Build Your Own AI News Assistant in RssTabs,Intelligent, personalized, and effortlessly efficient.


## License

Licensed under the MIT License, Copyright © 2024 [Isboyjc](https://github.com).
