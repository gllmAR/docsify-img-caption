(function() {
    // Define default configuration
    var defaultConfig = {
      textAlign: 'center',
      fontStyle: 'italic',
      // You can add more config options as needed
    };
    
    function getConfig() {
      var userConfig = (window.$docsify && window.$docsify.imageCaption) || {};
      return Object.assign({}, defaultConfig, userConfig);
    }
  
    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = (window.$docsify.plugins || []).concat(function(hook) {
      hook.doneEach(function() {
        var config = getConfig();
        var contentEl = document.querySelector('.content');
        if (!contentEl) return;
        
        var images = contentEl.querySelectorAll('img[alt]');
        images.forEach(function(img) {
          var altText = img.getAttribute('alt');
          if (altText) {
            var caption = document.createElement('div');
            caption.style.textAlign = config.textAlign;
            caption.style.fontStyle = config.fontStyle;
            caption.textContent = altText;
            img.insertAdjacentElement('afterend', caption);
          }
        });
      });
    });
  })();
  