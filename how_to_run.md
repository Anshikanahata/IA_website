# How to Run the Development Server

This guide will walk you through setting up and running the India Avenue website development server on your local machine, even if you don't have Node.js installed yet.

## Prerequisites

Before you begin, you'll need:
- A computer running Windows, macOS, or Linux
- An internet connection
- A code editor (optional, but recommended - Visual Studio Code is a popular choice)

## Step 1: Install Node.js

Node.js is required to run this React application. Follow these steps:

### For Windows:

1. **Download Node.js:**
   - Visit [https://nodejs.org/](https://nodejs.org/)
   - Download the **LTS (Long Term Support)** version (recommended)
   - Choose the Windows Installer (.msi) for your system (64-bit is most common)

2. **Install Node.js:**
   - Run the downloaded installer
   - Follow the installation wizard:
     - Click "Next" through the setup screens
     - Accept the license agreement
     - Keep the default installation path (usually `C:\Program Files\nodejs\`)
     - **Important:** Make sure "Add to PATH" is checked (this should be checked by default)
     - Click "Install"
     - Wait for the installation to complete
     - Click "Finish"

3. **Verify Installation:**
   - Open PowerShell or Command Prompt
   - Type the following command and press Enter:
     ```
     node --version
     ```
   - You should see a version number (e.g., `v20.x.x` or `v18.x.x`)
   - Also verify npm (Node Package Manager) is installed:
     ```
     npm --version
     ```
   - You should see a version number (e.g., `10.x.x` or `9.x.x`)

### For macOS:

1. **Download Node.js:**
   - Visit [https://nodejs.org/](https://nodejs.org/)
   - Download the **LTS (Long Term Support)** version
   - Choose the macOS Installer (.pkg)

2. **Install Node.js:**
   - Open the downloaded .pkg file
   - Follow the installation wizard
   - Enter your administrator password when prompted
   - Complete the installation

3. **Verify Installation:**
   - Open Terminal (Applications > Utilities > Terminal)
   - Type:
     ```
     node --version
     ```
   - Then:
     ```
     npm --version
     ```

### For Linux:

1. **Install Node.js using your package manager:**

   **For Ubuntu/Debian:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

   **For Fedora/RHEL:**
   ```bash
   curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
   sudo dnf install -y nodejs
   ```

2. **Verify Installation:**
   ```bash
   node --version
   npm --version
   ```

## Step 2: Navigate to the Project Directory

1. **Open a terminal/command prompt:**
   - **Windows:** Press `Win + R`, type `powershell` or `cmd`, and press Enter
   - **macOS:** Open Terminal from Applications > Utilities
   - **Linux:** Open your terminal application

2. **Navigate to the project folder:**
   ```bash
   cd "C:\Users\anshi\OneDrive\Documents\IA\IA_website"
   ```
   
   **Note:** If your project is in a different location, adjust the path accordingly.

## Step 3: Install Project Dependencies

The project uses several npm packages that need to be installed. This step downloads all required dependencies.

1. **Install dependencies:**
   ```bash
   npm install
   ```
   
   This command will:
   - Read the `package.json` file
   - Download all required packages listed in `dependencies` and `devDependencies`
   - Create a `node_modules` folder with all the packages
   - Generate a `package-lock.json` file (if it doesn't exist)

2. **Wait for installation to complete:**
   - This may take a few minutes depending on your internet connection
   - You'll see progress messages in the terminal
   - When complete, you should see a message indicating successful installation

## Step 4: Start the Development Server

Once all dependencies are installed, you can start the development server.

1. **Run the development server:**
   ```bash
   npm run dev
   ```

2. **Wait for the server to start:**
   - You'll see output in the terminal showing:
     - The local development URL (usually `http://localhost:5173`)
     - Network URL (for accessing from other devices on your network)
     - Build information

3. **Open the website:**
   - The terminal will display a URL like: `http://localhost:5173`
   - Open your web browser (Chrome, Firefox, Edge, Safari, etc.)
   - Navigate to the URL shown in the terminal
   - You should see the India Avenue website

## Step 5: Making Changes

- The development server has **hot module replacement** enabled
- Any changes you make to the code will automatically refresh in the browser
- You don't need to restart the server for most changes
- Just save your files and the browser will update automatically

## Step 6: Stopping the Server

When you're done working:

1. **Stop the development server:**
   - Go back to the terminal window
   - Press `Ctrl + C` (Windows/Linux) or `Cmd + C` (macOS)
   - The server will stop

## Troubleshooting

### Problem: "node: command not found" or "npm: command not found"
**Solution:** 
- Node.js is not installed or not in your PATH
- Reinstall Node.js and make sure to check "Add to PATH" during installation
- After installation, close and reopen your terminal

### Problem: "npm install" fails with network errors
**Solution:**
- Check your internet connection
- Try running: `npm install --verbose` to see detailed error messages
- Some corporate networks block npm. Contact your IT department if needed

### Problem: Port 5173 is already in use
**Solution:**
- Another application is using port 5173
- You can specify a different port by modifying `vite.config.js` or using:
  ```bash
  npm run dev -- --port 3000
  ```

### Problem: Dependencies installation is very slow
**Solution:**
- This is normal for the first installation
- npm downloads many packages, which can take time
- Ensure you have a stable internet connection

### Problem: "Permission denied" errors (Linux/macOS)
**Solution:**
- Don't use `sudo` with npm install (it can cause permission issues)
- If you see permission errors, you may need to fix npm permissions:
  ```bash
  mkdir ~/.npm-global
  npm config set prefix '~/.npm-global'
  ```
  Then add to your `~/.bashrc` or `~/.zshrc`:
  ```bash
  export PATH=~/.npm-global/bin:$PATH
  ```

## Additional Commands

### Build for Production
To create a production build:
```bash
npm run build
```
This creates an optimized build in the `dist` folder.

### Preview Production Build
To preview the production build locally:
```bash
npm run preview
```

## Need Help?

If you encounter any issues not covered here:
1. Check that Node.js and npm are correctly installed
2. Ensure you're in the correct project directory
3. Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
4. Check the terminal error messages for specific error details

## Summary

Quick reference for running the dev server:
1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Open terminal in the project directory
3. Run `npm install`
4. Run `npm run dev`
5. Open `http://localhost:5173` in your browser

Happy coding! 🚀

