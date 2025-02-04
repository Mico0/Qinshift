# **Bonus 1: Login System Simulator**

## **Requirement**

Create a **Login System Simulator** using JavaScript, HTML, and CSS.

### **Steps to Implement**

1. **Hardcode User Data**:
   - In your JavaScript file, create an array of users.
   - Each user should be an object with the following properties:  
     `{ id, email, firstname, lastname, password }`.

2. **Create the HTML Structure**:
   - Add two input fields: one for the **email** and one for the **password**.
   - Add a button labeled **"Login"**.

3. **Simulate Login Process**:
   - When the user clicks the "Login" button:
     - Call a function that simulates an API request.
     - The function should return a Promise that resolves or rejects after 2 seconds:
       - If a user with the given email and password exists in the array, resolve the Promise.
       - If no matching user is found, reject the Promise.

4. **Handle Login Result**:
   - If the Promise is rejected:
     - Display an error message on the screen (e.g., `"User not found"` or `"Invalid credentials"`).
   - If the Promise is resolved:
     - Display a welcoming message (e.g., `"Welcome back, [firstname]!"`) on the screen.
     - Hide the login inputs and button (since logged-in users don’t see login forms in real-world apps).
     - Make the welcoming message disappear after 2 seconds.

5. **Add Logout Functionality**:
   - Once logged in, display a **"Logout"** button.
   - When the "Logout" button is clicked:
     - Log out the user by showing the login inputs and button again.
     - Hide any logged-in messages or logout buttons.

---

### **EXTRA BONUS: Register Flow**

Enhance your login system by adding a registration flow for new users.

1. When on the login screen, display a button labeled:  
   **"Don't have an account? Register Here"**.
   
2. When this button is clicked:
   - Hide the login form (inputs and login button).
   - Show a registration form with these fields:
     - First Name
     - Last Name
     - Email
     - Password
   - Add a "Register" button.

3. Simulate Registration Process:
   - When the "Register" button is clicked:
     - Call a function that simulates an API request to register a user.
     - The function should return a Promise that resolves or rejects after 1 second:
       - If any of the fields (First Name, Last Name, Email, or Password) are missing, reject the Promise with an appropriate error message (e.g., `"All fields are required"`).
       - If all fields are valid, resolve the Promise and add the new user to the `users` array.

4. Handle Registration Result:
   - If registration fails (Promise rejected):
     - Display an error message on the screen (e.g., `"All fields are required"`).
   - If registration succeeds (Promise resolved):
     - Show a success message (e.g., `"Registration successful! Please log in."`).
     - Hide the registration form.
     - Show the login inputs and button again.
     - Make the success message disspear after 2 seconds.

---

### **Example Flow**

1. On login screen:
   ```
   Email: [__________]
   Password: [__________]
   [Login Button]
   [Don't have an account? Register Here]
   ```

2. User clicks "Don't have an account? Register Here":
   ```
   First Name: [__________]
   Last Name: [__________]
   Email: [__________]
   Password: [__________]
   [Register Button]
   ```

3. User fills out registration form and clicks "Register":
   - If successful:
     ```
     Registration successful! Please log in.
     ```
     (Login form is displayed again)
     
   - If fields are missing:
     ```
     Error: All fields are required
     ```

4. After successful registration, new users can log in with their credentials.

---

### **Notes**
- This exercise is open-ended; there are many ways to implement it.
- Use what you’ve learned so far in your coding journey to complete this task!
- Focus on practicing Promises for both login and registration flows.

