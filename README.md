# docsify-img-caption

A [Docsify](https://docsify.js.org) plugin that automatically adds captions to images using their `alt` text, wrapping them in a semantic `<figure>` / `<figcaption>` structure.

Unlike [docsify-image-caption](https://github.com/h-hg/docsify-image-caption), this plugin uses the standard Markdown `alt` attribute — no custom syntax required, so your Markdown stays portable.

**Demo:** [https://gllmar.github.io/docsify-img-caption/](https://gllmar.github.io/docsify-img-caption/#/)

## Features

- **Automatic captions** from standard Markdown `alt` text
- **Semantic markup** — images are wrapped in `<figure>` / `<figcaption>`
- **Size-aware** — the figure fills its container (works correctly inside grids, tables, and lists)
- **Configurable** — control caption alignment, font style, and image alignment
- **Skip caption** — use a single space as `alt` to render the image without a caption

## Examples

### Single image with a caption

![Sunset over the ocean](./img/sunset.svg)

### Two images in a table

| ![Snow-capped peaks at night](./img/mountain.svg) | ![Aurora over the arctic ice](./img/arctic.svg) |
| - | - |

### Caption in a list

* ![Sunset over the ocean](./img/sunset.svg)
* ![Deep blue ocean](./img/ocean.svg)
* ![Misty forest at dawn](./img/forest.svg)
* ![Desert dunes under the sun](./img/desert.svg)

### Skip caption with a single space

![ ](./img/mountain.svg)

## Installation

1. **Include Docsify** (v5 recommended):
   ```html
   <script src="https://cdn.jsdelivr.net/npm/docsify@^5.0.0-rc/dist/docsify.min.js"></script>
   ```

2. **Include the plugin:**
   ```html
   <script src="https://gllmar.github.io/docsify-img-caption/docsify-img-caption.js"></script>
   ```

3. **Optional configuration** — set `imageCaption` in your `$docsify` config before the plugin loads:
   ```html
   <script>
     window.$docsify = {
       name: 'My Documentation',
       imageCaption: {
         textAlign: 'center',   // Caption alignment: 'left', 'center', 'right' (default: 'center')
         fontStyle: 'italic',   // Caption font style: 'normal', 'italic', etc. (default: 'italic')
         wrapInFigure: true,    // Use <figure>/<figcaption> wrapper (default: true)
         imageAlign: 'center'   // Image alignment: 'left', 'center', 'right' (default: 'center')
       }
     };
   </script>
   ```

## Usage

Write standard Markdown:
```markdown
![Elephant at sunset](images/elephant.jpg)
```

The plugin renders it as:
```html
<figure style="width:100%; margin:0;">
  <img src="images/elephant.jpg" alt="Elephant at sunset" style="width:100%; max-width:100%; display:block; margin:0 auto;">
  <figcaption style="text-align:center; font-style:italic;">Elephant at sunset</figcaption>
</figure>
```

## Configuration Options

| Option        | Default    | Description                                                        |
|---------------|------------|--------------------------------------------------------------------|
| `wrapInFigure`| `true`     | Wrap image and caption in `<figure>`/`<figcaption>`.               |
| `textAlign`   | `'center'` | Caption text alignment: `'left'`, `'center'`, or `'right'`.        |
| `fontStyle`   | `'italic'` | Caption font style: `'normal'`, `'italic'`, etc.                   |
| `imageAlign`  | `'center'` | Image horizontal alignment: `'left'`, `'center'`, or `'right'`.    |

## Custom Styling

Override the default appearance with CSS:
```css
figure {
  margin: 1em 0;
}

figcaption {
  margin-top: 0.5em;
  color: #555;
}
```

## License

[MIT](LICENSE)

