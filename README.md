# docsify-img-caption

This Docsify plugin enhances images in your documentation by automatically adding captions derived from their `alt` attributes. By default, it wraps the image and its caption in a semantic `<figure>` and `<figcaption>` structure, making your content more accessible and aesthetically pleasing.

This plugin is different than https://github.com/h-hg/docsify-image-caption since it use the the alt text field already availaible in markdown instead of introducing specific way of writing the caption that would only work with docsify. 


See it online at this URL [https://gllmar.github.io/docsify-img-caption/#/](https://gllmar.github.io/docsify-img-caption/#/)

## Examples

### A single image with a caption

![This is a caption from the alt text ](./image.png)

### Another single image with a caption

![This is a caption from the alt text ](./image.png)


### 2 images in a table 

| ![This is a caption from the alt 1 ](./image.png) | ![This is a caption from the alt 2 ](./image.png) |
| - | - | 


This Docsify plugin enhances images by automatically adding captions derived from their `alt` attributes and formatting them within a semantic `<figure>` and `<figcaption>` structure. It also provides configurable alignment for both images and captions.

## Features

- **Automatic Captions:** Uses the `alt` text of each image as a caption.
- **Semantic Markup:** Wraps images in `<figure>`/`<figcaption>` by default.
- **Flexible Styling:** Override the text alignment, font style of captions, and image alignment independently.
- **Fallback Mode:** Disable the figure/figcaption wrapper if needed.

## Installation

1. **Include Docsify:**
   ```html
   <script src="https://unpkg.com/docsify/lib/docsify.min.js"></script>
   ```

2. **Optional Configuration:**
   Before including the plugin, you can set `window.$docsify.imageCaption` to override defaults:
   ```html
   <script>
     window.$docsify = {
       name: 'My Documentation',
       imageCaption: {
         textAlign: 'left',     // Caption alignment (default: 'center')
         fontStyle: 'normal',   // Caption font style (default: 'italic')
         wrapInFigure: true,    // Use figure/figcaption (default: true)
         imageAlign: 'right'    // Image alignment: 'left', 'center', or 'right' (default: 'center')
       }
     };
   </script>
   ```

3. **Include the Plugin Script:**
   ```html
       <script src="https://gllmar.github.io/docsify-img-caption/docsify-img-caption.js"></script>
   ```

## Usage

In your Markdown, simply write:
```markdown
![Elephant at sunset](images/elephant.jpg)
```

The plugin will convert this to:
```html
<figure>
  <img src="images/elephant.jpg" alt="Elephant at sunset" style="display:block; margin:0 auto;">
  <figcaption style="text-align:center; font-style:italic;">Elephant at sunset</figcaption>
</figure>
```

## Configuration Options

| Option        | Default   | Description                                                                 |
|---------------|-----------|-----------------------------------------------------------------------------|
| `wrapInFigure`| `true`    | Wraps image and caption in `<figure>`/`<figcaption>` if `true`.              |
| `textAlign`   | `center`  | Aligns caption text (`left`, `center`, `right`).                            |
| `fontStyle`   | `italic`  | Sets the caption text style (`normal`, `italic`, etc.).                     |
| `imageAlign`  | `center`  | Aligns the image horizontally (`left`, `center`, `right`).                  |

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

Adjust these styles as needed to fit your branding and layout requirements.

## License

This plugin is provided under the [MIT License](LICENSE). Modify and adapt it to your needs.

