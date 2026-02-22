# Data Model: FlowState AI v3 - Professional AI Meetings Notes Taker Platform

## Overview

The data model for v3 focuses on mock data structures to support the professional UI demonstration. All data is client-side and static, maintaining the static web application architecture.

## Core Entities

### MockTranscript
Represents sample meeting transcripts for demonstration.

**Properties:**
- `id: string` - Unique identifier
- `title: string` - Transcript title (e.g., "Q4 Sales Review Meeting")
- `content: string` - Full transcript text with speakers and dialogue
- `date: Date` - Meeting date
- `participants: string[]` - Array of participant names/roles
- `duration: number` - Meeting duration in minutes
- `category: 'sales' | 'project' | 'client' | 'team'` - Meeting type

**Relationships:**
- One-to-many with GeneratedFile (one transcript generates multiple files)

**Example:**
```typescript
{
  id: "transcript-001",
  title: "Q4 Sales Pipeline Review",
  content: "Jordan: Let's review our Q4 pipeline...",
  date: new Date("2024-10-15"),
  participants: ["Jordan Lee (Sales Manager)", "Maria Rodriguez (Sales Rep)"],
  duration: 45,
  category: "sales"
}
```

### GeneratedFile
Represents mock files generated from transcript processing.

**Properties:**
- `id: string` - Unique identifier
- `transcriptId: string` - Reference to source transcript
- `type: 'summary' | 'report' | 'notes' | 'action-items' | 'transcript'` - File type
- `title: string` - File title
- `content: string` - File content (text/markdown)
- `format: 'txt' | 'md' | 'pdf'` - Export format
- `createdAt: Date` - Generation timestamp
- `size: number` - File size in bytes (mock)

**Relationships:**
- Many-to-one with MockTranscript

**Example:**
```typescript
{
  id: "file-001",
  transcriptId: "transcript-001",
  type: "summary",
  title: "Q4 Sales Pipeline Summary",
  content: "# Meeting Summary\n\nKey points discussed...",
  format: "md",
  createdAt: new Date(),
  size: 2048
}
```

### Testimonial
User testimonials for social proof.

**Properties:**
- `id: string` - Unique identifier
- `name: string` - User name
- `role: string` - Job title
- `company: string` - Company name
- `quote: string` - Testimonial quote
- `avatar: string` - Avatar image URL (mock)
- `rating: number` - Star rating (1-5)

**Relationships:**
- Independent entity for homepage display

**Example:**
```typescript
{
  id: "testimonial-001",
  name: "Sarah Chen",
  role: "Product Manager",
  company: "TechCorp",
  quote: "FlowState AI transformed how we handle meeting notes. The AI summaries are incredibly accurate.",
  avatar: "/avatars/sarah-chen.jpg",
  rating: 5
}
```

### FeatureHighlight
Key features for carousel/highlights section.

**Properties:**
- `id: string` - Unique identifier
- `title: string` - Feature title
- `description: string` - Feature description
- `icon: string` - Icon identifier (Lucide icon name)
- `category: 'core' | 'ai' | 'integration'` - Feature category

**Relationships:**
- Independent entity for feature showcase

**Example:**
```typescript
{
  id: "feature-001",
  title: "AI-Powered Summaries",
  description: "Get instant, accurate summaries of your meetings with key points and action items.",
  icon: "Brain",
  category: "ai"
}
```

## Data Flow

### Homepage Load
1. Load testimonials for carousel
2. Load feature highlights for showcase
3. Load sample transcripts for demo selection

### Transcript Processing (Mock)
1. User selects transcript
2. System loads pre-generated mock files
3. Display files in professional card layout

### File Generation (Mock)
1. Simulate processing delay
2. Return associated mock GeneratedFile objects
3. Update UI with file cards

## Mock Data Volume

- **Transcripts**: 5 sample transcripts (300-800 words each)
- **Generated Files**: 15-20 mock files across different formats
- **Testimonials**: 6 user testimonials
- **Features**: 8 key features

## TypeScript Interfaces

```typescript
export interface MockTranscript {
  id: string;
  title: string;
  content: string;
  date: Date;
  participants: string[];
  duration: number;
  category: 'sales' | 'project' | 'client' | 'team';
}

export interface GeneratedFile {
  id: string;
  transcriptId: string;
  type: 'summary' | 'report' | 'notes' | 'action-items' | 'transcript';
  title: string;
  content: string;
  format: 'txt' | 'md' | 'pdf';
  createdAt: Date;
  size: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface FeatureHighlight {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'core' | 'ai' | 'integration';
}
```

## Data Storage Strategy

- **Static Files**: All mock data in TypeScript files
- **Import Structure**: Organized by domain (transcripts, files, testimonials, features)
- **Type Safety**: Full TypeScript interfaces for all entities
- **Performance**: Lazy loading for large transcript content if needed
