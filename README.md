# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

## App Description:
This app allows the user to select upto 4 tools as per the business requirements.

React Version:
18.2.0

## Steps to run the app locally:
Clone the repository: https://github.com/nandap4790/axiamatic-task.git
npm install
npm start

## Libraries used:
React select v5.4.0, this handles the custom dropdown
sass v1.54.3

## Folder Structure:
src/index.js: This is the starter file which calls the App component which is wrapped by the Redux Provider.
src/App.js: This is the parent component and acts as a wrapper to the child components

The folder structure is based on atomic model:
# Atoms:
Header: which consists of components which accept the level and renders any header from h1-h6
TextContent: which is responsible to render any other text which can be customized to a link/action item/span/div

# Icons:
All the tools' icons are in the form of react components and all of them are of svg format.

# Molecules:
ToolUploadStaticContent: Which consists of the static verbiage

# Rows:
Content: Contains static content and the select dropdown
FullLengthHeader: Has the header with logo and exit setup
ItemsContainer: renders the individual items/placeholders, when no items are present



