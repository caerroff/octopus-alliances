# Octopus Alliances
This application has been developped in NextJS. The documentation of the framework can be found on the [nextJS website](https://nextjs.org/docs)

- [Colour, design and styles](#colour-design-and-styles)
  - [Changing Content](#changing-content)
- [Dev environment](#dev-environment)
  - [On MacOS](#on-macos)
  - [Linux](#linux)
    - [Ubuntu](#ubuntu)
    - [Other distros](#other-distros)
  - [MacOS + Linux](#macos-and-linux)
  - [Windows](#windows)
- [Deployment](#deployment)

## Colour, design and styles

### Styling
The application is using [TailwindCSS](https://tailwindcss.com/docs/styling-with-utility-classes), a CSS library allowing us to put a `class` attribute on any HTML tag to apply CSS styles.
For example, `<h1 className="text-4xl"></h1>` will apply text-4xl, which translated to `font-size: 2.25rem` in CSS.
The TailwindCSS website contains the entire reference.

Colours are handled by TailwindCSS, and its configuration has been extended with our `primary` and `secondary` colour in the `tailwind.config.ts` file.


### Modifying the layout
The layout of the application ('HTML' code) is available in the `src/app/page.tsx` file.

Modification of the style, colours etc.. should be done in this file.

### Changing Content

To change the content, head to the file located at `/src/app/page.tsx`
It contains a function `Home` that returns Enhanced HTML.
The syntax follows basic HTML formatting, but JS functions and variables can be accessed with `{}` blocks.
The full reference and documentation can be found [here](https://www.typescriptlang.org/docs/handbook/jsx.html)

### Changing and adding images

All Images of the website should be stored under the `/public` folder.

The `public` folder works as the root of the Web server, and to find the path of an image you can just omit it from the URL.

For example, the image `/public/octopus.png` can be accessed in the code like this
```html
<img src="/octopus.png" alt="Octopus Image"/>
```
You just remove /public and you are good to go.

## Dev environment
Requirements
-   npm 18.8>=
-   node (will be installed with npm)

### On MacOS
With homebrew installed, run
```
brew install nvm
```

Then follow 'MacOS + Linux'
### Linux

#### Ubuntu
Install nvm following this guide [this guide](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

#### Other distros
nvm is available for most distros, and in the AUR for Arch.

Once installed, make sure you restart your terminal to have the new executable in your PATH

### MacOS and Linux
Once NVM has been installed, run 
```
nvm alias default node
```

### Windows
Either install WSL and then follow the Linux instructions, either go on the [Official Website](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Deployment 

To create a static build of the application, run 
```
npm run build
```
This will create a `.next` folder, containing all the files needed for the application.

To serve it with a NodeJS server, run
```
npm run start
```
The complete documentation is available [here](https://nextjs.org/docs/pages/building-your-application/deploying#nodejs-server) 

Alternatively, you can run the application in a docker and setup a proxy to serve on port 80.  
[Here](https://nextjs.org/docs/pages/building-your-application/deploying#docker-image) is the documentation for the Docker.

*Currently* the application runs on a Docker.
To create a Docker image and then run it, run the following commands

```bash
docker build . -t octopus-alliances
docker run -d -p 3000:3000 octopus-alliances
```

