## Using Aider to create a React.JS login interface

This project is a React.js login form built with TypeScript and the Bootstrap library.

#### Background

Built a React.js login page with Aider, using a local Ollama instance running Spark-X2.5-4B (Q8_0) as the backend model.

#### Setup

##### Aider Configuration

Here is the configuration used for Aider(.aider.conf.yml)

```bash
model: ollama_chat/spark
edit-format: whole
no-show-model-warnings: true
auto-commits: true
map-tokens: 8192 
max-chat-history-tokens: 40960
```

#### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

#### Installation

1. Clone the repository or download the files.
2. Navigate to the project directory.
3. Install the dependencies:

   ```bash
   npm install
   ```

#### Running the Development Server

1. Start the development server using Vite:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

#### Building for Production

1. Build the project to generate static files in the `dist` directory:

   ```bash
   npm run build
   ```

2. Preview the production build locally:

   ```bash
   npm run preview
   ```

#### Deployment

To deploy the UI, you can use any static file hosting service that supports HTML and JavaScript.