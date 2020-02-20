<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/kaypacha/next-boilerplate?color=%23ffcc5c&style=for-the-badge)](https://github.com/kaypacha/next-boilerplate/stargazers) 
[![GitHub forks](https://img.shields.io/github/forks/kaypacha/next-boilerplate?color=%2396ceb4&style=for-the-badge)](https://github.com/kaypacha/next-boilerplate/network) 
[![Discord](https://img.shields.io/badge/chat-discord-77aaff?style=for-the-badge)](https://discord.gg/Evh8Dvd) 
[![GitHub license](https://img.shields.io/github/license/kaypacha/next-boilerplate?color=%23ff6f69&style=for-the-badge)](https://github.com/kaypacha/next-boilerplate/blob/master/LICENSE)

</div>

# :notebook: Next Boilerplate
#### by Kay Pacha

Next.js - Styled-Components - Storybook - CircleCI - Eslint - Prettier boilerplate

## :tada: Getting Started

These instructions will get you a copy of the project up and running on your local machine for start your project.

### Prerequisites

You will need to have:

```
npm (Node Package Manager)
```

### Installing

How to start your project:
Download | Pull | Fork this repo.

Then install dependencies.

```bash
npm i
```

Now you have all devDependencies and dependencies the project need.

## :running: Run the project

Put your own account on ```CODEOWNERS``` file inside ```.github``` folder.
You can edit or delete the config of ```.circleci``` in case you want your own configuration or you don't want it one

**For development run** 

```bash
npm run dev
```

Server will run on http://localhost:3000/

**For storybook run** 

```bash
npm run storybook
```

**For other util commands** to development or production check on the ```package.json```

## :nail_care: Deploy Storybook on surge.sh with CircleCI
### And generate comment with a link of the deploy on PRs

For this process you need to set 3 environment variables on CircleCI

```bash
SURGE_LOGIN
SURGE_TOKEN
GITHUB_TOKEN
```
##### SURGE_LOGIN & SURGE_TOKEN
For this you need to have an account on surge.sh and get that 2 variables for there.
The first steps of this [link](https://surge.sh/help/integrating-with-circleci) will help you.

##### GITHUB_TOKEN
This is for the account you want to comment with the link of the storybook deploy.
You can follow this [link](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) for help

##### CUSTOMIZATION
You can modify variables, add more, modify the content of the comment on ```.circleci/config.yml```

## :rat: Kay Pacha team

Joaquin | Cristian | Pablo |
------------ | ----------- | ------------ |
[<img src="https://avatars0.githubusercontent.com/u/19353687?s=400&v=4" width="70" height="70" />](https://github.com/ByeBye-Sama) | [<img src="https://avatars0.githubusercontent.com/u/8507974?s=400&v=4" width="70" height="70" />](https://github.com/cristianbgp) | [<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="70" height="70" />](https://github.com/pablotamariz) |

## :bookmark_tabs: License

[MIT](https://github.com/kaypacha/next-boilerplate/blob/master/LICENSE)
