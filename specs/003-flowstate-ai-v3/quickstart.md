# Quickstart: FlowState AI v3 - Professional AI Meetings Notes Taker Platform

## Overview

FlowState AI v3 transforms the platform into a professional AI meetings notes taker with Apple-inspired design. This guide covers setup, development, and deployment of the redesigned interface with mock data.

## Prerequisites

- Node.js 18+ and npm
- Git for version control
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+)

## Installation

### Clone and Setup
```bash
git clone https://github.com/mr-sharath/flowstate-ai.git
cd flowstate-ai
git checkout 003-flowstate-ai-v3
npm install
```

### Environment Setup
Create `.env.local` in the root directory:
```bash
# No API keys needed for v3 mock implementation
# All data is client-side mock data
```

## Development

### Start Development Server
```bash
npm run dev
```
- Opens http://localhost:3000
- Hot reload enabled
- Mock data loads automatically

### Development Workflow
1. **Homepage Development**: Modify `src/app/page.tsx` for layout changes
2. **Component Creation**: Add new components in `src/components/`
3. **Styling Updates**: Update `src/app/globals.css` for theme changes
4. **Mock Data**: Modify data files in `src/lib/data/`

### Key Files to Know
- `src/app/page.tsx` - Main homepage layout
- `src/components/` - All UI components
- `src/lib/data/` - Mock data files
- `tailwind.config.js` - Styling configuration
- `src/app/globals.css` - Global styles and color palette

## Mock Data Setup

### Sample Transcripts
Located in `src/lib/data/mockTranscripts.ts`:
- 5 diverse meeting transcripts
- Sales calls, project updates, client meetings
- Professional formatting with speakers

### Generated Files
Located in `src/lib/data/mockFiles.ts`:
- Pre-generated summaries, reports, notes
- Multiple formats (txt, md, pdf mock)
- Realistic business content

### Testimonials & Features
- `src/lib/data/testimonials.ts` - User testimonials
- `src/lib/data/features.ts` - Feature highlights

## Build & Deployment

### Production Build
```bash
npm run build
npm run export  # Generates static files in out/
```

### Vercel Deployment
1. Push branch to GitHub
2. Connect repository to Vercel
3. Set build command: `npm run build`
4. Set output directory: `out`
5. Deploy

### Static Export Verification
- Check `out/` directory for generated files
- Test locally: `npx serve out`
- Verify all routes and assets load correctly

## Testing

### Manual Testing Checklist
- [ ] Homepage loads with hero section
- [ ] Feature carousel scrolls smoothly
- [ ] Testimonials display properly
- [ ] Transcript selection works
- [ ] File display shows mock generated files
- [ ] Responsive design on mobile/tablet
- [ ] All animations perform smoothly

### Performance Testing
```bash
# Lighthouse audit
npm run build
npx lighthouse http://localhost:3000 --output html
```

### Accessibility Testing
- Keyboard navigation through all interactive elements
- Screen reader compatibility
- Color contrast verification

## Component Development

### Creating New Components
1. Create file in `src/components/`
2. Use TypeScript interfaces
3. Follow Apple-inspired design patterns
4. Implement responsive design

### Styling Guidelines
- Use Tailwind utility classes
- Follow established color palette
- Maintain consistent spacing (8px grid)
- Add hover/focus states for interactivity

### Animation Implementation
- Use CSS transitions for smooth effects
- Leverage `transform` and `opacity` for performance
- Respect `prefers-reduced-motion` setting

## Troubleshooting

### Common Issues

**Page not loading**
- Check console for JavaScript errors
- Verify all imports are correct
- Ensure mock data files exist

**Styling not applying**
- Confirm Tailwind classes are correct
- Check global CSS imports
- Verify color variables are defined

**Animations not working**
- Test CSS transform properties
- Check for conflicting styles
- Verify browser support

**Mock data not displaying**
- Check data file imports
- Verify data structure matches interfaces
- Test with console.log statements

### Performance Optimization
- Use Next.js Image component for images
- Implement lazy loading for below-fold content
- Minimize bundle size with dynamic imports

## Contributing

### Code Style
- Use TypeScript for all components
- Follow React best practices
- Maintain consistent naming conventions
- Add JSDoc comments for complex functions

### Git Workflow
```bash
git checkout -b feature/new-component
# Make changes
git add .
git commit -m "Add new component with Apple-inspired styling"
git push origin feature/new-component
```

### Review Process
- Self-review code before PR
- Test on multiple devices/browsers
- Ensure accessibility compliance
- Verify performance metrics

## Support

For issues with v3 development:
- Check browser console for errors
- Verify Node.js and npm versions
- Test on different browsers
- Review mock data structure

The redesigned platform showcases professional AI meeting tools with smooth user experience and comprehensive mock demonstrations.
