<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/kaypacha/next-boilerplate?color=%23ffcc5c&style=for-the-badge)](https://github.com/kaypacha/next-boilerplate/stargazers) 
[![GitHub forks](https://img.shields.io/github/forks/kaypacha/next-boilerplate?color=%2396ceb4&style=for-the-badge)](https://github.com/kaypacha/next-boilerplate/network) 
[![Discord](https://img.shields.io/badge/chat-discord-77aaff?style=for-the-badge)](https://discord.gg/Evh8Dvd) 
[![GitHub license](https://img.shields.io/github/license/kaypacha/next-boilerplate?color=%23ff6f69&style=for-the-badge)](https://github.com/kaypacha/next-boilerplate/blob/master/LICENSE)

</div>

# :notebook: NextJs SWC Boilerplate
### by Kay Pacha

Nextjs - Styled-Components - SWC - Jest | testing-library - Storybook - Github Actions - Eslint - Prettier

## :tada: Getting Started

These instructions will get you a comfy and solid start for your project.

### Prerequisites

You will need to have:

```
npm (Node Package Manager)
```

### Installing

How to start your project:
**Use as a template (recommended)** | Download | Pull | Fork this repo.

Then install dependencies.

```bash
npm i
```

Now you have all devDependencies and dependencies the project need.

## :running: Run the project

Put your github account on ```CODEOWNERS``` file inside ```.github``` folder.
You can edit or delete the config of ```./.github/workflows``` & ```./scripts``` in case you want your own configuration or you don't want it one.

**For development run** 

```bash
npm run dev
```

**For storybook run** 

```bash
npm run storybook
```

**For tests run** 

```bash
npm run test
```

**For eslint** remember to modify, delete or add your rules on the ```package.json```

**For other util commands** to development or production check on the ```package.json```

## :nail_care: Deploy Storybook on surge.sh with Github Actions
### Make an automatic comment with a link of the deploy on PRs

For this process you need to set 1 environment variable on your repo SECRETS

```bash
SURGE_TOKEN
```
##### SURGE_TOKEN
For this you need to have an account on surge.sh and get the variable for there.
Use the ```surge token``` command and login to your account to get the token, then go to your ```repo > settings > secrets``` and create a new secret with the name ```SURGE_TOKEN``` and add your token as value.

##### CUSTOMIZATION
You can modify variables, add more, modify the content of the comment on ```scripts/comment-in-pr.sh```

## :rat: Kay Pacha team

Joaquin | Cristian | Pablo |
------------ | ----------- | ------------ |
[<img src="https://avatars0.githubusercontent.com/u/19353687?s=400&v=4" width="70" height="70" />](https://github.com/ByeBye-Sama) | [<img src="https://avatars0.githubusercontent.com/u/8507974?s=400&v=4" width="70" height="70" />](https://github.com/cristianbgp) | [<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="70" height="70" />](https://github.com/pablotamariz) |

## :bookmark_tabs: License

[MIT](https://github.com/kaypacha/next-boilerplate/blob/master/LICENSE)
