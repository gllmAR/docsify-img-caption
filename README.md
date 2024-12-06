# docsify-img-caption


This Docsify plugin automatically generates captions from the `alt` text of images. It inserts a centered, italicized caption (by default) directly below each image found in the rendered documentation.



## Example

### A single image 

![This is a caption from the alt text ](./image.png)


![This is a caption from the alt text ](./image.png)


### 2 images in a table 

| ![This is a caption from the alt 1 ](./image.png) | ![This is a caption from the alt 2 ](./image.png) |
| - | - | 

## Features

- Automatically creates captions from `alt` attributes of images.
- Configurable style parameters, allowing you to override default text alignment and font style.
- Easy to install and integrate with an existing Docsify setup.

## Installation

1. **Include Docsify** (if not already included):

   ```html
   <script src="https://unpkg.com/docsify/lib/docsify.min.js"></script>
   ```

2. **Include the Plugin Script**:

   ```html
   <script src="docsify-image-caption.js"></script>
   ```

3. **Initialize Docsify (if not done already)**:

   ```html
   <script>
     window.$docsify = window.$docsify || {};
     window.$docsify.name = 'My Documentation';
     // ...other Docsify configuration...
   </script>
   ```

Once included, any image with an `alt` attribute will display a caption beneath it.

## Usage Example

In your Markdown file:

```markdown
![My Sample Caption](image.png)
```

This image will display "My Sample Caption" as a centered, italicized caption below it.

## Configuration

You can override the default styles by defining `window.$docsify.imageCaption` before the plugin script is included. For example:

```html
<script>
  window.$docsify = {
    // Other Docsify configuration...
    imageCaption: {
      textAlign: 'left',    // Default: 'center'
      fontStyle: 'normal',  // Default: 'italic'
    }
  };
</script>
```

**Default Configuration:**
- **textAlign**: 'center'
- **fontStyle**: 'italic'

You can add or modify these as needed.

## Example Setup

A simple `index.html` might look like this:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>My Docs</title>
  <!-- Docsify -->
  <script src="https://unpkg.com/docsify/lib/docsify.min.js"></script>
  
  <!-- Optional: Override plugin settings -->
  <script>
    window.$docsify = {
      name: 'My Docs',
      imageCaption: {
        textAlign: 'left',
        fontStyle: 'normal'
      }
    };
  </script>
  
  <!-- Include the image caption plugin -->
  <script src="docsify-image-caption.js"></script>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

## License

This plugin is provided under the [MIT License](LICENSE). Feel free to modify and adapt it to your needs.


