# Student Profile App

A Next.js application showcasing a student profile with personal information, tech interests, and projects.

## Features

- **Student Profile**: Displays name, student ID, tech interests, and portfolio links
- **Next.js Framework**: Built with Next.js 16 for optimal performance
- **TypeScript**: Fully typed with TypeScript
- **Docker Support**: Multi-stage Docker build for efficient containerization
- **CI/CD**: Automated testing and Docker image building via GitHub Actions
- **Testing**: Unit tests with Jest and React Testing Library
- **Linting**: ESLint for code quality

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- Docker (for containerization)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/my-app.git
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Testing

Run the test suite:
```bash
npm test
```

### Building

Build the application:
```bash
npm run build
```

### Docker

Build the Docker image:
```bash
docker build -t my-app .
```

Run the container:
```bash
docker run -p 3000:3000 my-app
```

## Development Workflow

### Feature Branches and Pull Requests

All feature implementations must follow this workflow:

1. Create a feature branch from `main`:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit with descriptive messages:
```bash
git commit -m "feat: add student profile section"
```

3. Push the branch and create a Pull Request on GitHub.

4. The CI will automatically run tests, linting, and build checks.

5. After review and approval, merge the PR.

### Commit Message Conventions

Follow conventional commit format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `style:` for formatting
- `refactor:` for code restructuring
- `test:` for adding tests
- `chore:` for maintenance

## CI/CD

### Pull Request Checks
- Runs on Node.js 18.x and 20.x
- Installs dependencies
- Runs linting (`npm run lint`)
- Runs tests (`npm test`)
- Builds the application (`npm run build`)
- Builds Docker image (without pushing)

### Docker Image Build
- Triggers on push to `main` branch
- Builds and pushes Docker image to Docker Hub
- Tags with branch name, SHA, and `latest`

### Setting up Docker Hub Integration

1. Create a Docker Hub account and repository
2. In your GitHub repository settings, add secrets:
   - `DOCKERHUB_USERNAME`: Your Docker Hub username
   - `DOCKERHUB_TOKEN`: Your Docker Hub access token

## Deployment

The application can be deployed to:
- Vercel (recommended for Next.js)
- Docker containers on any cloud provider
- Static hosting with `npm run export` (if configured)

## Project Structure

```
my-app/
├── src/
│   ├── pages/
│   │   ├── index.tsx          # Homepage with student profile
│   │   ├── _app.tsx           # App component
│   │   └── _document.tsx      # Document component
│   └── styles/
│       ├── globals.css        # Global styles
│       └── Home.module.css    # Homepage styles
├── __tests__/                 # Test files
├── .github/workflows/         # GitHub Actions
├── Dockerfile                 # Multi-stage Docker build
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
└── tsconfig.json             # TypeScript configuration
```

## Technologies Used

- **Next.js 16**: React framework for production
- **React 19**: UI library
- **TypeScript**: Type-safe JavaScript
- **Jest**: Testing framework
- **React Testing Library**: Testing utilities
- **ESLint**: Code linting
- **Docker**: Containerization
- **GitHub Actions**: CI/CD

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Ensure all checks pass
6. Submit a pull request

## License

This project is private and for educational purposes.
