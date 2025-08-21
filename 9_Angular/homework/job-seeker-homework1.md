# Create a Job Finding Application

Your task is to build a job finding application named "JOB SEEKER" that will allow users to find available jobs and apply for them

## Part One

1. **A list of all the available jobs with an apply button.**
2. **A list of all the jobs you've applied to with a cancel application button.**
3. **A job posting list item** that will only show the most important things about a job and can be expanded to show more details, e.g., description, location, work type, or requirements.
4. **An info panel** that will contain the total number of available jobs and the total number of applied jobs (use computed for this).
5. **A sort panel** that will sort jobs based on starting salary and work type.

```typescript
{
  // Mandatory to be shown in the posting
  companyName: string;
  companyLogo: string;
  expires: string;
  position: string;
  startingSalary: number;
  workType: "remote" | "onsite" | "hybrid";
  // Show the below in the details expanding element
  location: string;
  country: string;
  qualifications: string;
  description: string;
  isApplied: boolean;
  //Shown in the company details page + companyName and companyLogo
  companyAddress: string;
  companyIndustry: string;
  companyWebsite: string;
}
```

### Requirements

- Use mock data instead of a backend (will be added in later parts).
- The available jobs list needs to allow users to press a button to expand the posting and view the details (use a directive for this).
- By clicking "apply," the job posting is then transferred to the applied jobs list, where it can also be viewed with its details. The application can be canceled, which will return the posting to the available jobs list (use services to handle this functionality).

## Part Two

Add the following to the app from Part One

1. Routing, we are going to add multiple pages to our application
2. Pipes, built-in and custom pipes also need to be added

## Requirements

1. Add the following pages with routing:

   1. Home page - A page containing a heading and some image (remember images are stored in public)
   2. Jobs page - A page containg the available and applied jobs that you built in the first part
   3. Profile page - Page containing information about the user such as: personal information, work experince, current work status ( basically similar to the linkedIn profile page)
   4. Company Page - A page simply containing details about a specfic company , this page is reached when clicking on the company name in the jobs page and it should be dynamic ex: /company/:id (show all the company information from the job object)
   5. Not Found Page - Same as we did in class, this page loads when we enter a url that doesn't exist

2. Add pipes for your data in the application:
   1. The starting salary should have a currency and a decimal point
   2. The end date of the job should be a valid date
   3. Create an input and bind it using "[(ngModel)]" and signal "model()" and create a custom filter pipe that will allow us to search through the jobs.

### Tips

Take your time to make it look good. Even though this is an Angular course you still need to work on your CSS skills.
