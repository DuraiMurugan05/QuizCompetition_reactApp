
export default function(state=[],action)
{
    switch(action.type)
    {
        case 'RETRIEVE_QUESTIONS':

            return [action.payload.questionArray,...state];
    }

    return state;
}

