# How to onboard a new plugin
1. Download `plugin.js` into `plugins/<NAME>/` 
2. Add path `plugins/<NAME>/plugin.js` into `reveal-md.json` in the `scrips` list
3. Initialize the Plugin at runtime in `plugins/plugin.js`
4. Do the same procedure for CSS files, if the plugin needs some (No need for Step 3)
5. Some plugins also need a `img` folder, add this to the `plugins/<NAME>` folder