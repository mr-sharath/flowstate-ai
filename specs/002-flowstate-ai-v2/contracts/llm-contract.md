# LLM API Contract

## Provider

Groq

## Interface

- **Input**: { transcript: string }

- **Output**: { deadlines: string[], fees: number[], projects: string[] }

## Error Handling

- Network failure: Return error message
- Invalid input: Return empty arrays

## Assumptions

- API key handled client-side (user provides or env)
- Free tier limits respected
