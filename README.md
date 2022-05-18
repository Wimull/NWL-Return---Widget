# NWL-Return---Widget
## Description
This is an example of an implementation of a feedback widget. In it users can select the type of feedback sent, is this project they are `BUG`, `IDEA` and `OTHER`, type their feedback and attach a screenshot that is taken natively by the app. <br> <br>
After sending a feedback, it then is logged to the user local storage, that could be adapted if there was an implementation of user login, it is saved to a server side database and then an email is send to the ones reponsible for dealing with the feedbacks, the email cotains all the details in the feedback. <br> <br>
Also the user can see all previous sent feedbacks through a **feedback dashboard** in which they can select a sent feedback, edit it and resend to that email. <br>
The also has support for dark and light mode and has a mobile version that has all functionalities except for the **feedback dashboard**.
## Technologies
- [ ] Web
  - [ ]  React
  - [ ]  Typescript
  - [ ]  Tailwind
- [ ]  Server
  - [ ]  Typescript
  - [ ]  TS-Node
  - [ ]  Jest
  - [ ]  Express
  - [ ]  PostgreSQL
  - [ ]  Prisma
- [ ]  Mobile
  - [ ]  React Native
  - [ ]  Expo
## Usage
### Server
For any of the apps to work properly you need to have the server running in parallel with the application <br><br>
To do that, first open `./server` and add a `.env` file with the varibles `DATABASE_URL=postgresql://[user[:password]@][netloc][:port][/dbname]`, this is your postgresql URI so make sure to have that setup in your machine or on a server, you can see more about that here: https://www.postgresql.org/docs/current/tutorial-install.html <br> <br>
Then you can add a `PORT=` variable with your chosen port for the server to be run at, if let at blank, it will default to port `3333`. <br><br>
Then type in the terminal `npm install` followed by `npm run dev` to run the developing version or `npm run start` to run the production version. You should then see in your terminal `HTTP server running` if everything went right
### Web
Open `./web` and add a `.env.local` with the variable `VITE_API_URL=http://localhost:<port>` where `port` is the port where the server is running at. <br><br>
Type in the terminal `npm install` folowed by `npm run dev` to run the web application in your local machine, you can then access it by going to `http://localhost:3000` in your browser. Alternatively you can access https://feedback-widget-o1jxdbkc2-wimull.vercel.app/ to see a deployed version of the app but **note** it is not linked to a server, so you cannot submit feedbacks to the database, they are all mocked.
### Mobile
For mobile you need to have `expo` installed, install it with the command `npm install --global expo-cli` and install the app `expo go` in your smartphone <br><br>
After that open the `mobile` directory and create a `.env` file with the variable `API_URL=http://<your_ip>:<port>` where `your_ip` is your IP address and `port` is the port that the server is being run at. <br><br>
Then Run `expo add` followed by `expo start` to start the mobile app, after that connect your phone to the app using the `expo go` by reading the QR code, if that doesn't work go to the expo devtools (link should appear in the terminal) and change the connection from LAN to tunnel and try again.


