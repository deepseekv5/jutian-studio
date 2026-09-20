(function () {
  'use strict';

  /* ===================== 风格切换（正常 / 猫娘 / 搞笑） ===================== */
  var MODES = {
    neko: {
      title: '巨天工作室喵',
      subtitle: 'Jutian Studio — 小小的，但是很认真喵',
      lede1: '这里是巨天工作室喵。咱不做大平台，就安安静静做点顺手的小工具，希望客人用得开心喵。',
      lede2: '桌面工具、网页里的 3D 世界、还有会干活的智能体，三条线一起慢慢做喵。代码都放在 GitHub 上，随便看喵。',
      aside: '咱成立于 2026 年 8 月，只有一个人，也没有什么宏大的计划喵。判断要不要做就一条：做完会不会真的有人每天用喵。',
      pull: '「能做出来就先做出来喵。做完开源，比想半年有用多了喵。」',
      cite: '—— 咱一直念叨的一句话',
      s1: '关于咱这家工作室', s2: '做过的东西喵', s3: '用什么做的喵',
      s4: '咱怎么做事情', s5: '都干了些啥', s6: '客人常问的', s7: '来找咱玩',
      n1: '咱是谁、为什么做这些、还有咱不做什么喵。',
      n2: '三个已经做好啦，还有一个在慢慢做喵。',
      n3: '挑技术的规矩是：少依赖、能离线、自己能搭喵。',
      n4: '从一个念头到发布，中间都发生了什么喵。',
      n5: '从最近往前排，只写真的发生过的喵。',
      n6: '被问过的，还有迟早会被问到的喵。',
      e1: '把 KittenN 编辑器整套换成深色玻璃质感，晚上看眼睛会舒服一点喵。',
      e2: '不用装东西，在浏览器里打开地图就能走进去喵。',
      e3: '在 Mac 上跑 Windows 程序，不用装虚拟机，也不用敲命令喵。',
      e4: '一个住在你电脑里的智能体，不是又一个聊天框喵。',
      q1: '工作室是公司吗喵？', q2: '为什么都开源喵？', q3: '巨天 Agent 什么时候能下载喵？',
      contact1: '想聊天、报 Bug、或者只是路过打招呼，都可以来 GitHub 找咱喵。咱每条 Issue 都会看，只是回复可能会慢一点喵。',
      foot: '本站纯静态 · 没有统计 · 安心浏览喵'
    },
    funny: {
      title: '巨天工作室（不是巨头）',
      subtitle: '一个人，一台电脑，一堆没写完的 README',
      lede1: '我们主要做三件事：把麻烦事变简单、把简单事变自动化、以及假装自己知道在干什么。',
      lede2: '三条产品线并行，意思是三条线同时在缺文档。代码是开源的，所以你也能看到我们是怎么把事情搞复杂的。',
      aside: '成立于 2026 年 8 月，员工一人，工位是书桌一角。没有融资，没有团建，也没有人审批我的代码。',
      pull: '「能跑就行。能开源就开源。文档嘛……会写的，真的。」',
      cite: '—— 贴在我显示器边框上的便利贴',
      s1: '关于我们（以及为什么只有一个人）', s2: '做过的东西（按 Bug 数量排序）',
      s3: '技术选型（也就是我只会这些）', s4: '工作方式（不保证每次都遵守）',
      s5: '更新记录（记下来免得自己忘）', s6: '你可能想问但没好意思问的', s7: '联系（回不回看缘分）',
      n1: '我们是谁，为什么不扩张，以及为什么不接单。',
      n2: '三个能用，一个还在和编译器吵架。',
      n3: '选型原则：依赖越少，半夜被叫起来修的概率越低。',
      n4: '从「有个想法」到「发出去」，中间发生了什么。',
      n5: '倒序排列。只记发生过的事，不记宏伟计划。',
      n6: '被问过的问题，以及我提前替你问的问题。',
      e1: '给积木编辑器换皮肤。白天看不出变化，晚上你会感谢我。',
      e2: '打开网页就能走进地图里——前提是你的显卡同意。',
      e3: '在 Mac 上跑 .exe，不装虚拟机，能不能跑看 Wine 今天的心情。',
      e4: '一个会干活的智能体。和聊天框的区别是：它真的会动手。',
      q1: '你们是家公司吗？（不是）', q2: '为什么不收费？（因为也没人买）', q3: 'Agent 到底什么时候能下载？',
      contact1: '想法、Bug、合作邀约都发 GitHub。我看每一条 Issue，回复速度取决于作业多不多。',
      foot: '本站纯静态 · 没有追踪 · 连我自己都不知道有多少人看过'
    }
  };

  var MODE_KEY = 'jt-mode';
  var vEls = [].slice.call(document.querySelectorAll('[data-v]'));
  vEls.forEach(function (el) { el.setAttribute('data-orig', el.textContent); });

  function applyMode(m) {
    if (!m || m === 'normal') m = 'normal';
    document.documentElement.dataset.mode = m;
    vEls.forEach(function (el) {
      var k = el.getAttribute('data-v');
      var pack = MODES[m] || {};
      el.textContent = pack[k] || el.getAttribute('data-orig');
    });
    var btns = document.querySelectorAll('.mode-switch button');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('on', btns[i].getAttribute('data-mode') === m);
    }
    try { localStorage.setItem(MODE_KEY, m); } catch (e) {}
  }

  var sw = document.getElementById('modeSwitch');
  if (sw) {
    sw.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('button') : null;
      if (b) applyMode(b.getAttribute('data-mode'));
    });
  }
  var savedMode = null;
  try { savedMode = localStorage.getItem(MODE_KEY); } catch (e) {}
  if (savedMode && MODES[savedMode]) applyMode(savedMode);

  var root = document.documentElement;
  var key = 'jt-paper-theme';

  var saved = null;
  try { saved = localStorage.getItem(key); } catch (e) { saved = null; }
  if (saved) root.dataset.theme = saved;

  var btn = document.getElementById('themeBtn');
  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem(key, next); } catch (e) {}
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', next === 'dark' ? '#1b1916' : '#f7f4ee');
    });
  }

  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () { nav.classList.toggle('open'); });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') nav.classList.remove('open');
    });
  }

  var links = [].slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });

  function onScroll() {
    var pos = window.scrollY + 120;
    var current = -1;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i] && sections[i].offsetTop <= pos) current = i;
    }
    links.forEach(function (a, i) { a.classList.toggle('on', i === current); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
