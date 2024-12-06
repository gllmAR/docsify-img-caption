(function() {
    // Define default configuration
    var defaultConfig = {
      wrapInFigure: true,
      textAlign: 'center',
      fontStyle: 'italic'
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
            if (config.wrapInFigure) {
              // Create a figure and figcaption for semantic markup
              var figure = document.createElement('figure');
              var figcaption = document.createElement('figcaption');
              
              // Apply user-configurable styling to the figcaption
              figcaption.style.textAlign = config.textAlign;
              figcaption.style.fontStyle = config.fontStyle;
              figcaption.textContent = altText;
  
              // Insert the figure before the image, then move the image and add the caption
              img.insertAdjacentElement('beforebegin', figure);
              figure.appendChild(img);
              figure.appendChild(figcaption);
            } else {
              // Fallback: just place a caption below the image without figure/figcaption
              var caption = document.createElement('div');
              caption.style.textAlign = config.textAlign;
              caption.style.fontStyle = config.fontStyle;
              caption.textContent = altText;
              img.insertAdjacentElement('afterend', caption);
            }
          }
        });
      });
    });
  })();
  