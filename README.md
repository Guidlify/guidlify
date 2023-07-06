# WebXGuild - Event Hub for Open Source Organizations 💝

WebXGuild, where developers guild meet.


---

## 🚀 Getting Started

### Skip all the steps below by using Gitpod, which automates the setup process

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/WebXDAO/WebXGuild)

### 1. Fork the repository

Fork the repository on the [fork page](https://github.com/WebXDAO/WebXGuild/fork).

### 2. Check the Node.js version on your local machine

Ensure that you have Node.js installed. You can check the Node.js version by running the following command:

```
node --version
```
If Node.js is not installed, you can download it from [nodejs.org](https://nodejs.org/en).

### 3. Clone this Repository

To clone this repository to your local machine, run the following command:

```
git clone https://github.com/<your-username>/WebXGuild
```

### 4. Navigate to the Directory

Change your working directory to the cloned repository:

```
cd WebXGuild
```

### 5. Install Dependencies

Install the required dependencies by running the following command:

```
npm install
```

### 6.  Supabase Setup

## Setting up `.env.local`

Create a `.env.local` file in root directory and paste the content from `.env.local.example` to `.env.local` file.

You must create a `.env.local` file similar to [.env.local.example](.env.local.example) file, remember that if you are using your own credentials so data will vary.


### Setting up `Supabase ` for `.env.local`
- Head on to [Supabase Registration](https://supabase.com/dashboard/sign-in) and Sign Up to Supabase. 
- you will see this interface when finish signing up on Supabase.

<img width="945" alt="image" src="https://github.com/WebXDAO/WebXGuild/assets/68677868/daf40410-0287-4645-83f8-3889143a7e59">

- Then it will navigate to `Dashboard` there you have to click on `New Project`.

- Click on create organziation if not created already then add Name: `WebXDao` and Type of Organization: `Personal`.

- Add `Name`, `Database Password` , `Region` (according to your location) and `Pricing Plan` for creating new project then click on `Create new project`.

<img width="960" alt="image" src="https://github.com/WebXDAO/WebXGuild/assets/68677868/2d982aac-f9b5-41ee-9328-2e02fe14e6aa">

- Navigate to home and copy the `Project URL` and `API Key and paste it to `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local` file that you had created previously and you are done setting up supabase.

<img width="359" alt="image" src="https://github.com/WebXDAO/WebXGuild/assets/68677868/894a6ae4-ca7e-4bee-89c0-33c96fd94721">


### 7. Run Next.js

Start the Next.js development server with the following command:

```
npm run dev
```

### Important Points to Remember

- Make sure your local environment has Node.js installed, with a minimum version of 16 (node >= v16).
- If you need to change the Node.js version for your development environment, you can use a version manager like [nvm](https://github.com/nvm-sh/nvm).


Currently in discussions 👉 https://github.com/orgs/WebXDAO/discussions/421
