# _reveal-common - A shared repository for a consistent reveal.js teaching setup 🏫
## Getting Started
- 1. Clone the project in your root project where you want to have slides
- 2. Put the whole folder `_reveal-common` on `.gitignore`
- 3. Create your own slides (convention is to put them into `slides/`)
- 4. Move the `reveal-md.json` file to the parent folder (the root folder of your project). The relative paths are already adapted
- 5. Start the local reveal-md server (specific configurations will be automatically loaded from `reveal-md.json`)
```bash
reveal-md . -w
```
## Documentation
### We should follow certain conventions
- Put your slides always in a `slide` folder (for each submodule), there you should also keep `img` folder containing images only for that set of slides
- Each slide needs to have a `md` extension and must contain the words slide. Example `css-1-slides.md`. Otherwise the files won't be shown in the index view (enforced [here](templates/listing-template.html))

### Stylesheets explained
The general idea of `style/style.css` is to have a consistent style and visual language across all slide decks. Some of the classes and ideas are explained here:
- TODO: flex and columns
- TODO: Annotate slide with exercise background

### Available Plugins explained
- **Chalkboard Plugin**
    - Press `b` to toggle between chalkboard and normal view
    - Press `c` to annotate current slides
    - Press `<del>` to delete chalkboard and annotation for current slide
    - Notes
      - Each annotation and chalkboard will be persisted per slide
      - You can also download all drawings with `<?>` (TODO), output is a JSON with some paths). Used for replaying.

## How to refresh the contents and use it?
1. git pull -r
2. Move reveal-md.json to root folder

## Why is the repo prepended with a `_`?
- Up to know reveal-md lists all files in a subdirectory. The underscore in the directory listing will keep all markdown files from the repository contained at the very beginning ;-)

## Development - Getting started
1. The paths in `reveal-md.json` are configured for executing it from the parent folder of root. In order to keep working with the file in root, use the following toggle scripts. Be aware this changes the file in-place.

- *Convert to development version*
```bash
sed -i '' 's/_reveal-common\///' reveal-md.json
```
- *Convert back to prod version*
```bash
sed -i '' 's/"\.\//"\.\/_reveal-common\//' reveal-md.json
```
2. Start the local server in dev version only
```bash
reveal-md . -w
```
## Fixes
- Currently, a listing template does not work when provided via `reveal-md.json`. Workaround is to provide it manually via flag
```bash
reveal-md . -w --listing-template _reveal-common/templates/listing-template.html
```

## Ideas/Todos
- Think of a mechanism where you can exclude whole markdown pages (e.g. pre-processing script on print)
- Think of a way to exclude markdown files from the initial listing when executing `reveal-md .`
- Check out the other plugins by [rajgoel](https://github.com/rajgoel/reveal.js-plugins)
