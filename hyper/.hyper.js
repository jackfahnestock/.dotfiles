module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 14,

    // font family with optional fallbacks
    fontFamily: 'input mono, Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: '#d29eff',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BEAM',

    // color of the text
    foregroundColor: '#fff',
    // foregroundColor: '#d29eff',

    // terminal background color
    backgroundColor: '#000',

    // border color (window, tabs)
    borderColor: '#333',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 13px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      // black:       '#000000',
      // red:         '#ff0000',
      // green:       '#33ff00',
      // green:       '#a7df3a',
      // yellow:      '#ffff00',
      // blue:        '#0066ff',
      // magenta:     '#cc00ff',
      // cyan:        '#00ffff',
      // white:       '#d0d0d0',
      // lightBlack:  '#808080',
      // lightRed:    '#ff0000',
      // lightGreen:  '#33ff00',
      // lightYellow: '#ffff00',
      // lightBlue:   '#0066ff',
      // lightMagenta:'#cc00ff',
      // lightCyan:   '#00ffff',
      // lightWhite:  '#ffffff'
      //
      black:       '#333',
      red:         '#fb7e65',
      green:       '#a7df3a',
      yellow:      '#ffcc53',
      blue:        '#ffffff',
      magenta:     '#ffaf66',
      cyan:        '#7ce0ff',
      white:       '#0094ff',
      lightBlack:  '#808080',
      lightRed:    '#fb7e65',
      lightGreen:  '#a7df3a',
      lightYellow: '#ffcc53',
      lightBlue:   '#ffffff',
      lightMagenta:'#ffaf66',
      lightCyan:   '#7ce0ff',
      lightWhite:  '#0094ff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: ''

    // for advanced config flags please refer to https://hyperterm.org/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};