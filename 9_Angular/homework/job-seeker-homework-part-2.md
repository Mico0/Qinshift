# Homework Part 2: Expanding Application Functionality

In this part of the homework, we will enhance our job-seeking application by adding multiple forms and pages, which will increase the application's functionality.

## Pages to be Built

### 1. Add Job Page

This page will contain a reactive form that allows users to post a job offering. The form should include all the necessary inputs to create a complete job object, as defined in the first part of the homework. After the job is submitted, it should be added to the `jobs` array, and the user should be navigated to the jobs page where the newly added job will be displayed in the list.

### 2. Edit Job Page

This page will feature the same form as the Add Job Page but pre-populated with the details of the specific job to be edited. An edit button or link should be added to each job item that navigates the user to this page. After editing the job and saving the changes, the user should be navigated back to the jobs page, where the updated job will be displayed with its new data.

### 3. Contact Us Page

Create a new page with a contact form containing the following inputs:

- `firstName` - text input
- `lastName` - text input
- `email` - text input (validate for a proper email format)
- `phoneNumber` - number input
- `message` - textarea (maximum length of 500 characters)
- `submit`/`sendMsg` button

Additionally, include social media links with icons (use Font Awesome) on the side of the page, and provide information about the Job Seeker company that combines details typically found on a Contact and About Us page.

## Extras

### 1. Scroll to Top Button

Add a "to top" button that, when clicked, scrolls the page to the top.

### 2. Footer

Create a footer containing links to the application pages and social media contacts.

### 3. Conditional Display of Applied Jobs

Ensure that the applied jobs list is hidden when there are no applied jobs.

### 5. Placeholder Image for Profile Page

Add a placeholder image to the profile page.

---

Ensure that all the forms are properly validated and that navigation works as expected after form submissions. glhf!
