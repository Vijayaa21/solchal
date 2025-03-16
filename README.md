# TechLearn - Technical Problem Solving Platform

TechLearn is a web application designed to help users easily learn about and solve technical problems with their devices. The platform provides step-by-step solutions, categorized by device type and problem area.

## Features

- 📱 Comprehensive solutions for various devices (computers, mobile devices, printers, etc.)
- 🔍 Easy-to-use search functionality
- 📖 Step-by-step guides with difficulty levels
- ⏱️ Estimated time for each solution
- 💬 Live chat support
- 🤝 Community contributions

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm 9.0.0 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/techlearn.git
   cd techlearn
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
techlearn/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Home page
│   │   ├── category/
│   │   │   └── [id]/
│   │   │       └── page.tsx         # Category page
│   │   └── help/
│   │       └── page.tsx             # Help page
│   └── components/
│       ├── Navigation.tsx           # Navigation component
│       └── SolutionCard.tsx         # Solution card component
├── public/
├── package.json
└── README.md
```

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 