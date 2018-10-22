// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @match        https://*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(() => {
  'use strict';
  
  // loadJQuery
  function loadJQuery(cb) {
    const CDN_URL = 'https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js';
    const script = document.createElement('script');
    script.setAttribute('src', CDN_URL);
    script.addEventListener('load', () => {
      const script = document.createElement('script');
      script.textContent = 'window.jQ = jQuery.noConflict(true); (' + cb.toString() + ')();';
      document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
  }

  loadJQuery(() => {
    $(() => {
      console.log('finish');
    })
  })
})();