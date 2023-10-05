<div align="center">
  <a href="https://guidlify.com">
    <img
      src="https://res.cloudinary.com/da6pxdlzr/image/upload/v1696496291/q1kx2npk7kwbzxcydvky.png"
      alt="Guidlify Logo"
      height="86"
    />
  </a>
  <br />
  <p>
    <h3>
      <b>
        Guidlify - Open-source Event Hub
      </b>
    </h3>
  </p>
  <p>
    <b>
      Open-source event hub where developers guild meet.
    </b>
  </p>
  <p>

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen?logo=github)](/) [![Website](https://img.shields.io/website?url=https://guidlify.com&logo=guidlify)](https://guidlify.com)

  </p>
  <p>
    <sub>
      Built with 💜 by
      <a href="https://guidlify.com">
        Guidlify
      </a>
    </sub>
  </p>
</div>


## Installation

> Skip all the steps below by using Gitpod, which automates the setup process

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/WebXDAO/WebXGuild)

### Getting started

1. Fork the repository
   
Fork the repository on the [fork page](https://github.com/WebXGuild/guidlify/fork).

3. Check the node.js version on your local machine
   
Ensure that you have node.js installed. You can check the node.js version by running the following command:
```sh
node --version

# $> v16.14.0
```
If Node.js is not installed, you can download it from [nodejs.org](https://nodejs.org/en).

3. Clone this repository
   
To clone this repository to your local machine, run the following command:
```sh
git clone https://github.com/<your-username>/guidlify
```

4. Navigate to the directory
   
Change your working directory to the cloned repository:
```sh
cd guidlify
```

5. Install dependencies
   
Install the required dependencies by running the following command:
```sh
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

6.  Setup env

- Setting up `.env.local`
- Create a `.env.local` file in root directory and paste the content from `.env.local.example` to `.env.local` file.

> You must create a `.env.local` file similar to [.env.local.example](.env.local.example) file, remember that if you are using your own credentials so data will vary.

7. Run guildify frontend
Start the Next.js development server with the following command:
```sh
npm run dev
```

## Long Term Vision

Create a platform where developers can find all the events happening around the world.
Currently [in discussions](https://github.com/orgs/WebXGuild/discussions/19) 🗣.

### Important Points to Remember

- Make sure your local environment has Node.js installed, with a minimum version of 16 (node >= v16).
- If you need to change the Node.js version for your development environment, you can use a version manager like [nvm](https://github.com/nvm-sh/nvm).
