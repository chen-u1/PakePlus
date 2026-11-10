window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});(function () {
  var PORTAL_URL = 'https://seatmap.365lawhelp.com/'; // 根地址登录后会自动落到门户

  function buildBtn() {
    var btn = document.createElement('button');
    btn.textContent = '🏠';
    btn.title = '返回门户';
    btn.style.cssText = 'position:fixed;right:18px;bottom:18px;z-index:2147483647;' +
      'width:46px;height:46px;border-radius:50%;border:1px solid #f0f0f0;cursor:pointer;' +
      'background:#ffffff;color:#1a73e8;font-size:20px;' +
      'box-shadow:0 2px 12px rgba(0,0,0,.16);';
    btn.onclick = function () { location.href = PORTAL_URL; };
    return btn;
  }

  setInterval(function () {
    // 门户页/登录页本身不显示按钮
    if (location.href.indexOf('/portal') !== -1 || location.href.indexOf('/login') !== -1) return;
    // 按钮被页面重渲染干掉了就补回来（腾讯文档是SPA，body会重绘）
    if (!document.getElementById('pp-back-home')) {
      var b = buildBtn();
      b.id = 'pp-back-home';
      (document.body || document.documentElement).appendChild(b);
    }
  }, 1500);
})();
