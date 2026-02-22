# UI Contract: Dashboard Interface

## Exposed Sections

- **Pulse Feed**: Displays a list of AI-extracted milestones with deadlines and fees.
- **Financial Hub**: Displays a list of mock Stripe invoices with amounts and statuses.
- **Visual Roadmap**: Displays a visual representation of client projects with statuses.

## Interactions

- **Automation Button**: Triggers generation of status report and invoice from mock meeting data.
- All sections are read-only except for the automation trigger.

## Data Format

- Milestones: {id, description, deadline, fee}
- Invoices: {id, amount, items[], status}
- Projects: {id, name, status, milestones[]}

## Error Handling

- Invalid input: Show message "Please provide valid meeting data."
- Generation failure: Show message "Failed to generate documents. Please try again."
