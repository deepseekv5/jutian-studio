# 巨天工作室官网 · JUTIAN STUDIO

巨天工作室官方网站源码，纯静态站点，无需构建，直接用 GitHub Pages 托管。

在线地址：<https://deepseekv5.github.io/jutian-studio/>

## 目录结构

```
.
├── index.html              # 单页站点
├── assets/
│   ├── css/style.css       # 全部样式（含深/浅双主题变量）
│   └── js/main.js          # 交互脚本（项目卡片、倒计时、粒子背景等）
└── README.md
```

## 本地预览

```bash
python3 -m http.server 8123
# 打开 http://127.0.0.1:8123
```

## 常见修改

| 想改什么 | 改哪儿 |
| --- | --- |
| 巨天 Agent 发布日期 | `assets/js/main.js` 顶部 `RELEASE_DATE` |
| 项目列表 | `assets/js/main.js` 里的 `PROJECTS` 数组 |
| 配色 / 主题变量 | `assets/css/style.css` 顶部 `:root` 与 `[data-theme]` 块 |
| 联系邮箱 | `index.html` 联系区底部注释掉的 mailto 按钮 |

改完 push 到 `main` 分支，GitHub Pages 会自动重新部署。

---

© 巨天工作室 · JUTIAN STUDIO
