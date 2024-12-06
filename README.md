# docsify-img-caption


This Docsify plugin enhances images in your documentation by automatically adding captions derived from their `alt` attributes. By default, it wraps the image and its caption in a semantic `<figure>` and `<figcaption>` structure, making your content more accessible and aesthetically pleasing.


## Example

### A single image 

![This is a caption from the alt text ](./image.png)


![This is a caption from the alt text ](./image.png)


### 2 images in a table 

| ![This is a caption from the alt 1 ](./image.png) | ![This is a caption from the alt 2 ](./image.png) |
| - | - | 




## Features

- **Automatic Captions:** The `alt` text of each image is used as a caption.
- **Semantic Markup:** Wraps images in `<figure>` and `<figcaption>` by default.
- **Configurable Styles:** Easily override defaults for text alignment and font style.
- **Flexible Structure:** Opt out of using `<figure>`/`<figcaption>` if you prefer.

## Installation

1. **Include Docsify:**
   ```html
   <script src="https://unpkg.com/docsify/lib/docsify.min.js"></script>
   ```

2. **(Optional) Configure the Plugin:**
   Before including the plugin, you can set `window.$docsify.imageCaption` to override defaults:
   ```html
   <script>
     window.$docsify = {
       name: 'My Documentation',
       imageCaption: {
         textAlign: 'left',    // Override default center alignment
         fontStyle: 'normal',  // Override default italic style
         wrapInFigure: true    // Default is true; set to false if you don't want figure/figcaption
       }
     };
   </script>
   ```

3. **Include the Plugin Script:**
   ```html
   <script src="docsify-image-caption.js"></script>
   ```

## Usage

In your Markdown files, just include images with `alt` text:
```markdown
![Elephant at sunset](images/elephant.jpg)
```

No additional markup is required. After the plugin runs, the rendered HTML by default will look like this:
```html
<figure>
  <img src="images/elephant.jpg" alt="Elephant at sunset">
  <figcaption style="text-align:center; font-style:italic;">Elephant at sunset</figcaption>
</figure>
```

If `wrapInFigure` is set to `false`, it will instead place a styled `div` directly below the image:
```html
<img src="images/elephant.jpg" alt="Elephant at sunset">
<div style="text-align:center; font-style:italic;">Elephant at sunset</div>
```

## Configuration Options

| Option       | Default  | Description                                                           |
|--------------|----------|-----------------------------------------------------------------------|
| `wrapInFigure` | `true`  | Wraps image and caption in `<figure>`/`<figcaption>` when `true`.    |
| `textAlign`   | `center` | Aligns caption text (`left`, `center`, or `right`).                  |
| `fontStyle`   | `italic` | Sets the caption text style (`normal`, `italic`, etc.).              |

Set these options in `window.$docsify.imageCaption` before loading the plugin script to override any defaults.

## Styling

You can further customize the appearance with your own CSS:
```css
figure {
  margin: 1em 0;
}

figcaption {
  margin-top: 0.5em;
  color: #555;
}
```

By adjusting your CSS, you can fine-tune the visual presentation without altering the plugin’s code.

## License

This plugin is provided under the [MIT License](LICENSE). Feel free to modify and adapt it to your needs.

---

With these enhancements, the Docsify Image Caption Plugin provides a more semantic, accessible, and customizable way to present images and their captions in your Docsify-powered site.