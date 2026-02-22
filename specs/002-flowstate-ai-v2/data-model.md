# Data Model

## Entities

### Meeting

- **id**: string (unique identifier)
- **transcript**: string (mock meeting conversation text)
- **date**: Date (meeting date)

### Milestone

- **id**: string
- **description**: string
- **deadline**: Date
- **fee**: number
- **project_id**: string (reference to Project)

### Invoice

- **id**: string
- **amount**: number (total amount)
- **items**: array of objects {description: string, amount: number}
- **status**: string (e.g., 'draft', 'sent')

### Project

- **id**: string
- **name**: string
- **status**: string (e.g., 'active', 'completed')
- **milestones**: array of strings (Milestone ids)

### ExtractedData

- **deadlines**: string[] (extracted deadline dates)
- **fees**: number[] (extracted fee amounts)
- **projects**: string[] (extracted project names)

### LLMResponse

- **raw**: string (full raw response from LLM)

## Relationships

- Project has many Milestones (one-to-many)
- Invoice has many Milestone items (many-to-many via items referencing Milestone descriptions/fees)
- Meeting is standalone, used for LLM input
- Meeting -> LLMResponse -> ExtractedData -> Reports/Invoices

## Validation Rules

- Milestone.fee > 0
- Invoice.amount = sum of items.amount
- Project.status in ['active', 'completed', 'on-hold']
- ExtractedData arrays can be empty if LLM fails

## State Transitions

- Invoice.status: draft -> sent (upon automation)
- Project.status: active -> completed (when all milestones met)

No storage, all client-side processing.
