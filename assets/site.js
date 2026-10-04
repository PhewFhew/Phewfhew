/* A Cabinet of One — 共享脚本：滚动淡入 */
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 无障碍降级 / 浏览器不支持时，直接全部显示
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  items.forEach(function (el) { io.observe(el); });
})();
