import { QuizSchema } from './index';

describe('Quiz Logic', () => {
    it('should fail if the quiz has only 1 choice', ()=>{
        const badQuiz = {
            question : "what is 2 + 2",
            choices: [{id:"1", text: "4", isCorrect: true}],
            metaData: {pageNumber : "5"}
        }

        // this should throw an error because we want atleast two choices.
        expect(() => QuizSchema.parse(badQuiz)).toThrow()
    })
})