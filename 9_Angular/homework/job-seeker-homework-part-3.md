# Job Seeker Final Homework

The final step in building our Job Seeker application is to add a backend and implement proper authorization and authentication.

## Requirements

[GitHub Repository](https://github.com/aa-codecademy/mkwd13-js-09-angular/tree/main/G1/homework-api/job-seeker-api)

Given the following API, add the following functionality:

1. The API has full authentication and authorization features. Build a login and register page in your application that will allow the user to log in and register. After that, add a logout functionality that will log the user off from the app (use the code from class as a reference).
2. After the authentication flow has been implemented, use the `/jobs` endpoints to connect your pre-existing pages with the new backend, including:

   1. Jobs page
   2. Profile details page
   3. Company details page
   4. Add job page
   5. Edit job page

3. Remember to add an interceptor for the JWT tokens; otherwise, you will not have access to any of the endpoints related to jobs.

4. If you need to update some of your interfaces and refactor some of the templates, that's okay. It's a normal process in development to have data that changes.

**IMPORTANT:** DO NOT ATTEMPT THIS WITHOUT COMPLETING HOMEWORK PARTS 1 & 2. Doing so will only add confusion and problems. Take your time and finish the previous homework first before attempting this one.

**Tips:**

- To get an easier and faster start working with the API, there is an `api.rest` file in the source code that will help you create a user quickly and add mock data for the jobs. Just call the defined endpoint in that file.
- Read the backend API code first before attempting to create or work with it. It's very important to know what the backend expects from you before you start sending data.
- If you have any confusion or problems getting it up and running, you can always contact us.
