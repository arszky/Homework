# [Berlin's - Spotify 🎶](#)

# Generasi Gigih 2.0 Final Project - Frontend Engineering 💻

## About This Project

This is an Frontend Web App to search your own favorite songs and create your own playlists with Spotify! The project uses the [Spotify Web API](https://developer.spotify.com/documentation/web-api/) to interact with Spotify.

[Live preview.](https://homework-orcin.vercel.app/)

## Features

- Built-in web player that only works for premium spotify user
- Responsive UI
- Darkmode Feature
- Log Out Feature
- Etc.

### Built With

The major framework that was used to create this project is [React.js](https://reactjs.org/docs/getting-started.html) and used different libraries such as:

- [Create React App](https://create-react-app.dev/) to initialize the project.
- [axios](https://github.com/axios/axios) for networking with the Spotify Web API.
- [React Router](https://reactrouter.com/) for navigational components in a single page application.
- [Redux](https://redux.js.org/) for state management.
- [Material-UI](https://material-ui.com/) for declaring some components.
- [Typescript](https://www.typescriptlang.org/).
- [Hosted on Vercel](https://vercel.com/) for deployment.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_BASE_URL` used for grant flow callback.

`REACT_APP_SPOTIFY_CLIENT_SECRET` your spotify developer client secret.

`REACT_APP_SPOTIFY_CLIENT_ID` your spotify developer client id.

see [.env.example](/.env.example)

## Run Locally

Clone the project

```bash
  git clone https://github.com/arszky/Homework/
```

Go to the project directory

```bash
  cd Homework
```

Install dependencies

```bash
  npm
```

Start the server (but you need to [setup .env](#environment-variables) first)

```bash
  npm start
```

Open http://localhost:3000 with your browser to see the result.

## Feedback

Any feedback is welcome, you can sumbit issues/feedback [here](https://github.com/arszky/Homework/).
