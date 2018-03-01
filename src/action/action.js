

const questionList=
    {
        questionArray:[
            {
                "Id":1,
                "title":"Question No:1",
                "content":"Who founded facebook?",
                "answerArray":[
                    {"answerId":1,"answerValue":'Chris Hughes',"score":1},
                    {"answerId":2,"answerValue":'Eduardo',"score":2},
                    {"answerId":3,"answerValue":'Mark Zuckerberg',"score":3}

                ]

            },
            {
                "Id":2,
                "title":"Question No:2",
                "content":"Who founded google?",
                "answerArray":[
                    {"answerId":1,"answerValue":'Larry Page',"score":8},
                    {"answerId":2,"answerValue":'Sundar Pitchai',"score":5},
                    {"answerId":3,"answerValue":'Summit',"score":6}

                ]

            },

            {
                "Id":3,
                "title":"Question No:3",
                "content":"Who founded Amazon?",
                "answerArray":[
                    {"answerId":1,"answerValue":'Andrew',"score":7},
                    {"answerId":2,"answerValue":'Jeff Bezos',"score":10},
                    {"answerId":3,"answerValue":'James',"score":5}

                ]

            },

            {
                "Id":4,
                "title":"Question No:4",
                "content":"Who founded Microsoft?",
                "answerArray":[
                    {"answerId":1,"answerValue":'Bill Gates',"score":9},
                    {"answerId":2,"answerValue":'Julie',"score":8},
                    {"answerId":3,"answerValue":'Melinda Gates',"score":1}

                ]

            },
            {
                "Id":5,
                "title":"Question No:5",
                "content":"Who founded Uber?",
                "answerArray":[
                    {"answerId":1,"answerValue":'Allen',"score":1},
                    {"answerId":2,"answerValue":'Danny',"score":2},
                    {"answerId":3,"answerValue":'Travis',"score":5}

                ]

            }
        ]
    }

export function retrieveQuestions()
{
    return{
        type:"RETRIEVE_QUESTIONS",
        payload:questionList
    };

}
