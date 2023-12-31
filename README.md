# LeetCode Clone

![LeetCode Clone Logo](https://github.com/ankitrout2903/leetclone-AI/blob/master/public/logo.png?raw=true)

This is a LeetCode clone project created with Next.js, TypeScript, Tailwind CSS, OpenAI API, Firebase, Firestore, and Authentication. It allows users to practice coding problems, translate code between different programming languages, and save their solutions for reference.

<div>
    <a href="https://www.loom.com/share/2e635c1d1bc5414e94c705def3e4301e">
      <p>Loom Message - 1 November 2023 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/2e635c1d1bc5414e94c705def3e4301e">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/2e635c1d1bc5414e94c705def3e4301e-with-play.gif">
    </a>
  </div>

## Features

- User authentication using Firebase.
- Code translation feature using the OpenAI API.
- Firestore integration to save and retrieve user solutions.
- A clean and responsive user interface designed with Tailwind CSS.

## Tech Stack

The LeetCode Clone project you described uses the following technologies in its tech stack:

1. **Next.js**: A popular React framework for building web applications, offering server-side rendering, static site generation, and other features.

2. **Tailwind CSS**: A utility-first CSS framework that helps in creating responsive and stylish user interfaces.

3. **OpenAI API**: Used for the code translation feature, allowing users to translate code between different programming languages.

4. **Firebase**: Used for user authentication, providing a secure and easy-to-integrate solution for user management.

5. **Firestore**: Integrated for data storage and retrieval, typically used to save and manage user solutions for coding problems.

6. **Docker**: You mentioned Docker, which is likely used for containerization and deployment of the application, making it easier to manage and scale the application in various environments.

## Getting Started

To get started with this project, follow the steps below:

1. Clone this repository to your local machine.

```bash
git clone https://github.com/your-username/leetcode-clone.git
```

2. Navigate to the project directory.

```bash
cd leetcode-clone
```

3. Install the required dependencies.

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

4. Set up Firebase for authentication and Firestore for data storage. Update the Firebase configuration in the project to connect to your Firebase project.

5. Set up the OpenAI API for code translation. Update the API key in the project to use your OpenAI account.

6. Run the development server.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your web browser to access the application.

8. You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

API routes can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). You can customize this endpoint in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*` and is used for creating API routes.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can also check out the [Next.js GitHub repository](https://github.com/vercel/next.js/) for feedback and contributions.

## Deploy on Vercel

The easiest way to deploy your LeetCode Clone app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For more details on deploying Next.js apps, you can refer to our [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Translation Feature

One of the unique features of this LeetCode Clone is its ability to translate code between different programming languages. To use this feature, simply provide the code you want to translate, select the source and target programming languages, and click the "Translate" button.

## Feedback and Contributions

We welcome your feedback and contributions to improve this LeetCode Clone project. Feel free to open issues, submit pull requests, or provide suggestions to help make this project even better.

Happy coding! 👨‍💻👩‍💻

