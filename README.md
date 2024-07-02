# Just Notes - Node.js

![favicon-32x32](https://github.com/xrochit/Just_Notes/assets/91835342/4b6c6e6b-e765-4271-8497-27fde168c85b)

A simple note-taking application built with Node.js, MongoDB, and Google OAuth for authentication.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Screenshots](#screenshots)

## Installation

To install and run this project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/just_notes.git
    ```
2. Navigate to the project directory:
    ```bash
    cd just_notes
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the server:
    ```bash
    npm start
    ```

## Environment Variables

Create a `.env` file in the root of the project to store your credentials. Example:

```plaintext
MONGODB_URI=mongodb+srv://<username>:<password>@mongodburlhere
GOOGLE_CLIENT_ID=YOUR_GOOGLE_ID_HERE
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET_HERE
GOOGLE_CALLBACK_URL=http://localhost:5000/google/callback
```

## Screenshots

- [Homepage](#homepage)
  
  ![image](https://github.com/xrochit/Just_Notes/assets/91835342/65778663-c3cc-4303-9ec7-e207b82588ba)

- [Dashboard](#dashboard)

  ![image](https://github.com/xrochit/Just_Notes/assets/91835342/ff787ce2-e3d7-4bc8-9562-3621462c5f72)
