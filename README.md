# Bartap Progressive web app

## Release

More info soon.

## Tools
- [React](https://reactjs.org/)
- [Storybook](https://storybook.js.org/)
- [Chromatic](https://www.chromatic.com/)
- [Jest](https://jestjs.io/)
- [Scss](https://sass-lang.com/)

## The bartap project
The bartap project is a SaaS solution for the catering branch. It provides an application for stock keeping, customer management and bill administration. This project can be found 
[here](https://github.com/tungstun-ict/bartap-app).
All data is processed and stored in a Spring Boot microservice backend
[here](https://github.com/tungstun-ict/bartap-backend).

We also created a clocking system using nfc tags and an Arduino micro controller programmed in c++. This project can be found 
[here](https://github.com/tungstun-ict/bartap-rfid).

## Progressive web app
This project is an application developed for the customer of the catering company using bartap so they can track their expenses and statistics.
We decided to create a PWA to target as many people as we could. Since a PWA can be used behind a PC, in a mobile web browser and as a standalone application we thought it would be the perfect fit.

## Git Strategy

For our git strategy, we are using a modified version of git flow. In our strategy we use the following branches:

- `Master branch`
- `Development branch`
- `Feature branches`

Whatever is in the master branch, will be running on the latest [build](#Release). The only things that will go in the master branch are releases, accompanied by `git tag` tags (v1, v2, etc.).

All of the development work will be done in the `development` branch. This is to ensure that the deployed version (`master` branch) will always remain stable.

For every story or (sub)task we create a new `feature` branch, each team member can do whatever he wants in this branch (rebasing, force pushing, all of it). These `feature` branches will be used to make Pull Requests in Github. In these PR's there will be regular reviews to ensure high code quality.

### Git

#### Commits

To keep your commits clean, we follow the advice given in this [article](https://chris.beams.io/posts/git-commit/).

#### History

To keep the Git history as clean as possible we do not allow merging between feature brances. Instead we use `git rebase` for this. All merging is to be done from Github.

#### Feature Branches

For every issue on the [project board](https://github.com/JortWillemsen/bar-application/projects/1) you can create a branch. This branch must follow the feature branch naming convention like this:

`feature/{isssue code}-a-small-description`

This makes sure that we can always discern branches from eachother. For example:

`feature/22-topbar-menu-implementation`

#### Pull requests

After you have finished an issue and the feature branch is ready to be merged with development you create a new pull request by going to:

`Github` -> `bartap-app` -> `Pull requests` -> `Compare and create new pull request`

In your last commit you must say to Github that the issue is done and it may close it. You can do this by typing:
`Closes #{feature id}` inside your commit message. Example:

`Closes #22`