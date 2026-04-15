import { z } from 'zod'

export const QuizSchema = z.object({
    question: z.string().min(10),
    choices: z.array(
        z.object({
            id: z.string(),
            text: z.string(),
            isCorrect: z.boolean()
        })
    ).min(2),
    metaData: z.object({
        pageNumber: z.coerce.number()
    })
})