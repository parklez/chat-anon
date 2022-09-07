# Chat Anon (Angular 14, Socket.io, Heroku)

Quick application to test socket.io funcionality after seeing someone else doing the same using REST.

#### Server
- Express
- NodeJS
- Socket.io

#### Client
- Angular 14

#### Deployment
I decided to try some free solution to deploy this micro app, so far it restarts every now and then:
https://chat-anon-park.herokuapp.com/


#### Improvements
> General improvements
- Add more events such as join, leave
- Improve local development (socketio hardcoded to heroku)

> Client-side
- Add blur to chat background
- Improve "input" CSS (Add edit icon for avatar, improve visuals)
- Improve overall styling

> Server-side
- Refactor socket events into separate file
