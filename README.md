# Alma Leads App 
![image](https://github.com/user-attachments/assets/3df893bf-3a31-4f4a-a352-4fad53c32172)

Alma Leads App is a Next.js + TypeScript application built with Tailwind CSS, Styled Components and Formidable for API handling. This guide provides instructions to set up and run the project locally.




## 🚀 Application Overview  

After running the application, you will be greeted by a **Welcome Page** featuring the **Alma** logo and two primary navigation buttons:  

1. **Submit Lead Form** (Public)  
2. **Internal Leads (Admin)**  

Each button redirects to a distinct section of the app with the following functionalities:  

---

### 🌎 Public Lead Form  

This is a publicly accessible form where prospects can submit their information. The form requires users to input the following details:  

- First Name  
- Last Name  
- Email  
- LinkedIn Profile  
- Visas of Interest  
- Resume / CV Upload  
- Open-ended Input (for additional details)  

Upon successful submission, the user will see a confirmation message acknowledging that their lead has been recorded.  

---

### 🔐 Internal Leads List UI (Admin Panel)  

This is a protected, authenticated interface designed for internal users to manage the submitted leads. The key functionalities include:  

- Displaying a list of all leads, with the details provided by the prospects.  
- Each lead starts in a PENDING state.  
- An admin can manually transition a lead's status to REACHED_OUT via a dedicated button.  
- Mock Authentication: The authentication is not persistent, meaning it resets every time the page is refreshed.  
- Logout Option: Users can log out from the internal UI to return to the Welcome Page.  

---

### 🔄 Switching Between Views  

To navigate between the two sections, simply return to the **Welcome Page** using the `/` route (e.g., `localhost:3000/`). From there, you can access either the **Lead Submission Form** or the **Internal Leads List UI** as needed.  

This ensures a seamless flow between public and internal functionalities.

 
## Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Yarn](https://yarnpkg.com/) or npm

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/pj499/alma-app.git
cd alma-leads-app
```

### 2. Install Dependencies

Using Yarn:
```sh
yarn install
```
Or using npm:
```sh
npm install
```

### 3. Run the Development Server

Using Yarn:
```sh
yarn dev
```
Or using npm:
```sh
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).


## Contributing

### 1. Fork and Clone the Repository

```sh
git clone https://github.com/your-username/alma-app.git
cd alma-leads-app
```

### 2. Create a New Branch

```sh
git checkout -b feature-branch-name
```

### 3. Commit Your Changes

```sh
git add .
git commit -m "Your descriptive commit message"
```

### 4. Push and Create a Pull Request

```sh
git push origin feature-branch-name
```
Then, open a Pull Request on GitHub.


