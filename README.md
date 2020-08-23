This is a React project that is using Auth0 to authenticate a user. It has a login + logout button and allows you to use Google to sign in to the page.

## Instructuions:

1. Run `git clone https://github.com/JamieDawson/auth0React.git` to download the project.

2. If you don't have an account with Auth0 then go to auth0.com and make an account.

3. In Auth0.com, click "Create an application" after making an account

4. In Auth0.com, select "Single Page Web Application".

5. In Auth0.com, select "React"

6. In Auth0.com, add http://localhost:3000 in Allowed Callback URLs, Allowed Logout URLs, and Allowed Web Origins. Click Save at the bottom. (Note, you'll change these URLS when you make this project public. For now, this is just for local testing)

7. Create a `.env` file in the root of this project and add these two lines of code:
   `REACT_APP_DOMAIN=`
   `REACT_APP_AUTH0_CLIENT_ID=`

8. Then add the Auth0 project's Domain to the end of `REACT_APP_DOMAIN=` and the Auth0 projects Client ID to the end of `REACT_APP_AUTH0_CLIENT_ID=`

9. add the Auth0 package by running `npm i @auth/auth0-react` in your root.

10. Run `npm start` to run the project locally.

Optional: run `npm i react-json-pretty` to make the JSON look nice. Othewise comment out `<JSONPretty data={user}></JSONPretty>` inside `profile.js` and uncomment `{JSON.stringify(user, null, 2)}`

Thanks to [codeSTACKr](https://www.youtube.com/watch?v=MqczHS3Z2bc&t=906s) for creating educational material on Auth0!
