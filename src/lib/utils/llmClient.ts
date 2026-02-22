import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, dangerouslyAllowBrowser: true })

export async function processTranscript(transcript: string): Promise<{ deadlines: string[], fees: number[], projects: string[] }> {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: `Analyze this meeting transcript and extract business-relevant information for generating status reports and invoices. Specifically:

- Deadlines: Any dates, timeframes, or commitments mentioned (e.g., "by morning", "two weeks"). If none, infer reasonable ones like "pricing by end of week".
- Fees: Any pricing, costs, or financial amounts explicitly discussed (e.g., 100, 200). Do not infer or make up fees; leave as empty if none mentioned.
- Projects: Names of initiatives, products, or services discussed (e.g., "scheduling system", "Epic integration", "patient portal").

Return ONLY valid JSON without any markdown or extra text: {"deadlines": ["string1", "string2"], "fees": [100, 200], "projects": ["project1", "project2"]}.

Transcript: ${transcript}` }],
    })
    const content = response.choices[0].message.content || '{}'
    console.log('Raw LLM content:', content)
    const cleaned = content.replace(/^```json\s*/, '').replace(/\s*```$/, '')
    console.log('Cleaned content:', cleaned)
    return JSON.parse(cleaned)
  } catch (error) {
    console.error('LLM error:', error)
    return { deadlines: [], fees: [], projects: [] }
  }
}
