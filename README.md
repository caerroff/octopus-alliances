# Octopus Alliances
This application has been developped in NextJS. The documentation of the framework can be found on the (nextJS website)[https://nextjs.org/docs]

## Colour, design and styles
The application is using (TailwindCSS)[https://tailwindcss.com/docs/styling-with-utility-classes], a CSS library allowing us to put a `class` attribute on any HTML tag to apply CSS styles.
For example, `<h1 className="text-4xl"></h1>` will apply text-4xl, which translated to `font-size: 2.25rem` in CSS.
The TailwindCSS website contains the entire reference.

Colours are handled by TailwindCSS, and its configuration has been extended with our `primary` and `secondary` colour in the `tailwind.config.ts` file.

The layout of the application ('HTML' code) is available in the `src/app/page.tsx` file.

Modification of the style, colours etc.. should be done in this file.

## Dev environment
Requirements
-   npm 18.8>=
-   node (will be installed with npm)

### On MacOS
With homebrew installed, run
```brew install nvm```

Then follow 'MacOS + Linux'
### Linux

#### Ubuntu
Install nvm following this guide (this guide)[https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating]

#### Other distros
nvm is available for most distros, and in the AUR for Arch.

### MacOS + Linux
Once NVM has been installed, run 
```nvm alias default node```

### Windows
Either install WSL and then follow the Linux instructions, either go on the (Official Website)[https://docs.npmjs.com/downloading-and-installing-node-js-and-npm] 