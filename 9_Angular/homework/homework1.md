# Homework 1 - Angular Basics & Lifecycle Hooks

## Overview

Create a simple Angular application that demonstrates your understanding of Angular syntax, data binding, lifecycle hooks, and signals. This homework will help you practice the concepts covered in the first two classes.

## Setup Instructions

### 1. Initialize the Angular Application

```bash
# Create a new Angular project with standalone components and no routing (this is a shortcut)
ng new homework-app --standalone --routing=false --style=css

# Navigate to the project directory
cd homework-app

# Start the development server
npm run start
```

## Basic Requirements

### 1. Task Manager Component

Create a standalone component called `TaskManagerComponent` that allows users to manage their daily tasks.

**Requirements:**

- Users should be able to view all their current tasks
- Users should be able to add new tasks to their list
- Users should be able to mark tasks as completed
- The system should prevent adding empty tasks
- The system should track (log) when tasks are modified (added or completed)

## Bonus Requirements

### Enhanced Task Manager

- Allow users to clear all tasks at once
- Provide statistics about task completion status (e.g. how many tasks are completed, how many are pending)

## Submission

Please create a new repository for this homework and push your code to it. Send us a link to the repository so that we can review it. There is no strict deadline for this homework, but please submit it as soon as possible as it is pretty simple and very soon we will move on to more complex topics and you will have to catch up with the new homework.

Good luck! 🚀