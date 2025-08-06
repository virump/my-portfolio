document.querySelectorAll('.avatar').forEach(function(avatar) {
  const img = avatar.querySelector('.avatar-image');
  const fallback = avatar.querySelector('.avatar-fallback');
  if (!img) return;

  const originalSrc = img.src;

  img.addEventListener('error', function() {
    avatar.setAttribute('data-fallback', 'true');
  });

  img.addEventListener('load', function() {
    avatar.removeAttribute('data-fallback');
  });

  setTimeout(function() {
    if (!img.complete || img.naturalWidth === 0) {
      avatar.setAttribute('data-fallback', 'true');
    }
  }, 1000);

  avatar.addEventListener('mouseenter', function() {
    img.src = '/imges/viru.jpg';
  });

  avatar.addEventListener('mouseleave', function() {
    img.src = originalSrc;
  });
});