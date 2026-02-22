# UI Contract: FlowState AI v3 - Professional AI Meetings Notes Taker Platform

## Overview

This contract defines the user interface sections, interactions, and data formats for the redesigned FlowState AI v3 platform. The interface follows Apple-inspired design principles with light colors, smooth animations, and professional components.

## Exposed Sections

### Hero Section
**Purpose**: First impression with value proposition and primary CTA

**Visual Elements**:
- Animated text highlighter on key phrases
- Professional hero image/video placeholder
- Primary CTA button: "Try Demo" (beige background, white text)
- Secondary CTA button: "Upload Transcript" (white background, beige border)

**Data Requirements**:
```typescript
interface HeroData {
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    action: 'demo' | 'upload';
  };
  secondaryCTA: {
    text: string;
    action: 'learn-more';
  };
}
```

**Interactions**:
- Text highlight animation on load
- Button hover effects with subtle scaling
- Click handlers for navigation or modal opening

### Feature Carousel
**Purpose**: Showcase key features with smooth transitions

**Visual Elements**:
- Horizontal scrollable cards
- Feature icons (Lucide React)
- Title and description text
- Navigation dots/indicators
- Touch/swipe support for mobile

**Data Requirements**:
```typescript
interface FeatureData {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string; // For accent styling
}
```

**Interactions**:
- Smooth CSS transitions between slides
- Keyboard navigation (arrow keys)
- Touch gestures on mobile devices
- Auto-play with pause on hover

### Testimonials Section
**Purpose**: Build trust with user testimonials

**Visual Elements**:
- Grid layout (3 columns on desktop, 1 on mobile)
- User avatars with circular cropping
- Star ratings display
- Quote text with proper typography
- Company logos/name badges

**Data Requirements**:
```typescript
interface TestimonialData {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}
```

**Interactions**:
- Hover effects on cards
- Smooth entrance animations
- Click to expand quote (optional)

### Transcript Demo Section
**Purpose**: Allow users to try mock transcripts

**Visual Elements**:
- Sample transcript cards in grid
- Title, date, duration display
- Category tags
- "Try This" buttons on each card

**Data Requirements**:
```typescript
interface TranscriptPreview {
  id: string;
  title: string;
  date: Date;
  duration: number;
  category: string;
  participantCount: number;
  preview: string; // First 100 characters
}
```

**Interactions**:
- Card hover with subtle lift effect
- Click to load full transcript in demo mode
- Category filtering (optional future enhancement)

### File Display Section
**Purpose**: Show generated files professionally

**Visual Elements**:
- Card-based layout for each file
- File type icons
- Download buttons with hover effects
- File size and creation date
- Professional shadows and borders

**Data Requirements**:
```typescript
interface FileDisplay {
  id: string;
  title: string;
  type: 'summary' | 'report' | 'notes' | 'action-items';
  format: 'txt' | 'md' | 'pdf';
  size: number;
  createdAt: Date;
  downloadUrl: string;
}
```

**Interactions**:
- Download button clicks
- File preview on hover
- Smooth card animations

### Navigation Header
**Purpose**: Minimal navigation and branding

**Visual Elements**:
- Logo/brand name
- Navigation links (Home, Features, Demo, About)
- Mobile hamburger menu
- Clean typography

**Data Requirements**:
```typescript
interface NavigationData {
  logo: string;
  links: Array<{
    text: string;
    href: string;
  }>;
}
```

**Interactions**:
- Smooth scroll to sections
- Mobile menu toggle with animation
- Active link highlighting

## Data Format

### Input Data Structure
```typescript
interface PageData {
  hero: HeroData;
  features: FeatureData[];
  testimonials: TestimonialData[];
  transcripts: TranscriptPreview[];
  navigation: NavigationData;
}
```

### State Management
- Client-side Zustand store for mock data
- Loading states for async operations
- Selected transcript/file state

## Error Handling

### Network Errors
- Graceful fallback for missing images
- Offline message for demo features
- Retry mechanisms for failed loads

### Data Errors
- Default values for missing mock data
- Fallback UI for empty states
- Console logging for debugging

## Performance Requirements

### Loading States
- Skeleton loaders for testimonials
- Progressive image loading
- Lazy loading for below-fold content

### Animation Performance
- CSS transforms for smooth animations
- Reduced motion support for accessibility
- 60fps target on supported devices

## Accessibility Contract

### Keyboard Navigation
- Tab order through all interactive elements
- Enter/Space for button activation
- Arrow keys for carousel navigation

### Screen Reader Support
- Semantic HTML structure
- ARIA labels for complex components
- Alt text for all images

### Color Contrast
- WCAG AA compliance (4.5:1 minimum)
- Focus indicators with sufficient contrast
- Color-blind friendly design

## Browser Compatibility

### Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Progressive Enhancement
- Core functionality works without JavaScript
- CSS fallbacks for unsupported features
- Graceful degradation on older browsers

## Implementation Notes

### Component Architecture
- Reusable component library
- Consistent prop interfaces
- Theme provider for color management

### Styling Approach
- Tailwind CSS with custom utilities
- CSS custom properties for theme colors
- Responsive design with mobile-first approach

### Testing Requirements
- Visual regression testing
- Accessibility audits
- Cross-browser testing
- Performance monitoring
