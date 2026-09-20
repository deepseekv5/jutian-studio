# 巨天工作室官网

纯静态站点，GitHub Pages 托管：<https://deepseekv5.github.io/jutian-studio/>

## 设计说明

编辑排版风格：纸感底色、1px 细线分隔、衬线标题、强网格。
不使用渐变、玻璃拟态、粒子动画、悬浮卡等装饰性元素。深浅双主题，默认浅色。

## 目录

```
index.html
assets/css/style.css
assets/js/main.js      # 主题切换、移动端菜单、导航高亮（约 40 行）
```

## 改内容

全部文案直接写在 `index.html` 里，没有模板引擎、没有构建步骤。

| 想改什么 | 改哪儿 |
| --- | --- |
| 站点信息 | `index.html` 顶部 `<head>` 的 title / description |
| 强调色 | `assets/css/style.css` 中 `--accent`（浅色 `#a8361f`，深色 `#e2775a`） |
| 章节 | 每个 `<section class="section" id="...">`，同步改页眉导航与目录块 |
| 项目 | 「项目」章节里的 `<article class="entry">` |

## 风格切换

页眉右侧有「正常 / 猫娘 / 搞笑」三档切换，会替换站点主要文案（标题、章节名、引言、部分 FAQ），选择存在 localStorage。
文案表在 `assets/js/main.js` 的 `MODES`；要加可变文案，给元素加 `data-v="key"` 即可。

## 相关

- 个人主页：<https://deepseekv5.github.io/>
- 巨天 Agent：<https://deepseekv5.github.io/jutian-agent/>
