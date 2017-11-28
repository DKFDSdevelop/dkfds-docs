--- 
permalink: /preview-components/dkwds-header.html
layout: iframed 
title: Dkwds-header.html
---

<!doctype html>
<html lang="en-US">
  <head>
    <title>Dkwds Header: Default</title>
    <link rel="stylesheet" href="../../dist/css/dkwds-virkdk.min.css">
  </head>
  <body>
    
<header class="header header-extended" role="banner">
  <div class="navbar">
  <div class="logo" id="logo">
    <em class="logo-text">
      <a href="/"
        title="Home"
        aria-label="Home">
        Department of Web Design
      </a>
    </em>
  </div>
  <button class="menu-btn">Menu</button>
</div>

  <nav role="navigation" class="nav">
    <div class="header-mask"></div>
    <div class="nav-inner">
      
    </div>
  </nav>
</header>
<div class="overlay"></div>

<style scoped>
  .header-mask {
    background-color: rgba(0, 0, 0, .2);
    position: fixed;
    top: -1000px;
    left: -1000px;
    right: -1000px;
    bottom: -1000px;
    z-index: 999;
  }

  .nav-inner,
  .nav-secondary {
    background-color: white;
    z-index: 1000;
  }
</style>

    <script src="../../dist/js/dkwds.js"></script>
    <script>
    window.addEventListener('load', function() {
      document.body.addEventListener('submit', function(e) {
        // https://github.com/18F/web-design-standards/issues/2101
        e.preventDefault();
      }, true);
    }, false);
    </script>
  </body>
</html>

