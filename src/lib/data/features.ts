export interface FeatureHighlight {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'core' | 'ai' | 'integration';
}

export const features: FeatureHighlight[] = [
  {
    id: "feature-1",
    title: "AI-Powered Summaries",
    description: "Get instant, accurate summaries of your meetings with key points and insights automatically extracted.",
    icon: "Brain",
    category: "ai"
  },
  {
    id: "feature-2",
    title: "Action Item Extraction",
    description: "Never miss important tasks or decisions. AI identifies and organizes all action items from your discussions.",
    icon: "CheckSquare",
    category: "ai"
  },
  {
    id: "feature-3",
    title: "Multi-Format Export",
    description: "Download your meeting outputs in PDF, Markdown, or text formats for easy sharing and archiving.",
    icon: "Download",
    category: "core"
  },
  {
    id: "feature-4",
    title: "Real-time Processing",
    description: "Process meeting transcripts instantly with our advanced AI models for immediate results.",
    icon: "Zap",
    category: "ai"
  },
  {
    id: "feature-5",
    title: "Team Collaboration",
    description: "Share meeting summaries and action items with your team for better alignment and productivity.",
    icon: "Users",
    category: "core"
  },
  {
    id: "feature-6",
    title: "Custom Templates",
    description: "Tailor output formats to match your organization's specific meeting documentation needs.",
    icon: "FileText",
    category: "core"
  },
  {
    id: "feature-7",
    title: "Integration Ready",
    description: "Connect with popular tools like Slack, Microsoft Teams, and Google Workspace for seamless workflow.",
    icon: "Link",
    category: "integration"
  },
  {
    id: "feature-8",
    title: "Security First",
    description: "Enterprise-grade security with end-to-end encryption and compliance with major privacy standards.",
    icon: "Shield",
    category: "core"
  }
]
