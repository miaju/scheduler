# Interview Scheduler

This project was made by me in my learning at Lighthouse Labs.

Interview Scheduler is a SPA that allows users to book interviews between interviewer and interviewee. Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. The interviewer is chosen from a list of available mentors on the given day. The user can save the appointment and view the entire schedule of appointments on any day of the week. Appointments can also be edited or deleted.

## Final Product

!["final product](https://github.com/miaju/scheduler/blob/master/docs/final.png)

### View when editing an interview

!["edit an Appointment](https://github.com/miaju/scheduler/blob/master/docs/edit-app.png)

### Confirmation message when deleting an interview

!["delete an Appointment"](https://github.com/miaju/scheduler/blob/master/docs/delete_app.png)

### Error view when interview cannot be saved or deleted

!["error with network call"](https://github.com/miaju/scheduler/blob/master/docs/error_app.png)

## Setup

Install dependencies with `npm install`.

This project uses an api that is from [this](https://github.com/lighthouse-labs/scheduler-api) repository. Please clone and follow the setup directions for use.

## Running Webpack Development Server

```sh
npm run start
```

## Running Jest Test Framework

```sh
npm run test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
