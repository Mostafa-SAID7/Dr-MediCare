# Contributing to Dr. MediCare

Thank you for your interest in contributing to Dr. MediCare! We welcome contributions from the community.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/Dr-MediCare.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes thoroughly
6. Commit your changes: `git commit -m "Add your meaningful commit message"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Open a Pull Request

## Development Setup

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## Code Standards

### TypeScript
- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid using `any` type when possible
- Use type inference where appropriate

### React Components
- Use functional components with hooks
- Follow the component structure in existing files
- Use proper prop typing with TypeScript interfaces
- Implement proper error boundaries

### Styling
- Use Tailwind CSS utility classes
- Follow the existing design system
- Use CSS variables for theme colors
- Ensure responsive design for all screen sizes
- Test in both light and dark modes

### Code Formatting
- Use 2 spaces for indentation
- Use single quotes for strings
- Add semicolons at the end of statements
- Follow ESLint rules

## Commit Message Guidelines

We follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example: `feat: add appointment cancellation feature`

## Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass
4. Update CHANGELOG.md with your changes
5. Request review from maintainers
6. Address review feedback
7. Wait for approval and merge

## Testing Guidelines

- Write unit tests for utility functions
- Test components with different props
- Test responsive behavior
- Test accessibility features
- Test both light and dark themes

## Reporting Bugs

When reporting bugs, please include:

- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Browser and OS information
- Console errors if any

## Feature Requests

We welcome feature requests! Please:

- Check if the feature already exists
- Provide clear use cases
- Explain the expected behavior
- Consider implementation complexity

## Code Review Process

All submissions require review. We use GitHub pull requests for this purpose:

- Maintainers will review your code
- Address feedback promptly
- Be open to suggestions
- Keep discussions professional

## Community Guidelines

- Be respectful and inclusive
- Help others learn and grow
- Follow our Code of Conduct
- Ask questions when unsure
- Share knowledge and best practices

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to open an issue for any questions or concerns.

Thank you for contributing to Dr. MediCare!
