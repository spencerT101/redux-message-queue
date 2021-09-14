This is a take home assignment to build a message queue feature using javascript, JSX, HTML & CSS. It is built in react-redux.

# MVP

- There should be a text box.
- A user can write a message and submit it where it will be added to the redux store.
- The message will then be retrieved from the redux store and display in a notification space.
- After 5 seconds the message is then removed from the store.

I decided to be creative with the concept and create a novelty featured called "Message Impossible". The idea being that the user has to submit as many messages as possible before they self destruct. The solution delivered on all the MVP requirements, see the screen shot below:

## Home Screen:

<img width="880" alt="Screenshot 2021-09-14 at 18 02 44" src="https://user-images.githubusercontent.com/48687748/133316459-fc76066d-9836-4343-b222-807d6c546053.png">


## Installation

Clone the repository and in the main folder run 'npm install' from the terminal. Once installation has completed and all dependencies have been installed, run 'npm start'. Use the app on 'localhost:3000'.

## Dependencies/Libraries/Packages

 - ReactJS
 - React-Redux
 - Material-UI
 
 ## Ideas for further development:
 
 - Experiment with the layout of the UI E.G.display notifications on the side of the screen.
 - Implement further Material-UI styling to improve the UI/UX. 
 - Add flash messages feature to redux.
 - Add metric features which count the number of messages submitted vs number deleted.
