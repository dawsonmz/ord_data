export const trainingPlanType = {
    name: 'training_plan',
    title: 'Training Plan',
    type: 'document',
    fields: [
        {
            name: 'lesson_number',
            title: 'Lesson Number',
            type: 'number',
        },
        {
            name: 'date_time',
            title: 'Date and Time',
            type: 'datetime',
        },
        {
            name: 'modules',
            title: 'Modules',
            type: 'array',
            of: [
                {
                    type: 'string',
                    options: {
                        list: [
                            { title: 'offskates', value: 'offskates' },
                            { title: 'free_skate_wrap_up', value: 'free_skate_wrap_up' },
                        ],
                    }
                }
            ],
        }
    ],
};
