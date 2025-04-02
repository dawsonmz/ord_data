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
            name: 'season',
            title: 'Season',
            type: 'string',
            options: {
                list: [
                    'Spring 2025',
                    'Fall 2025',
                ],
            }
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
    preview: {
        select: {
            season: 'season',
            lesson_number: 'lesson_number',
            date_time: 'date_time',
        },
        prepare(selection: { season: String; lesson_number: Number; date_time: String; }) {
            const { season, lesson_number, date_time } = selection;
            return {
                title: season + ' - lesson ' + lesson_number,
                subtitle: new Date(date_time.valueOf()).toLocaleDateString('no-NO', { dateStyle: 'short' }),
            };
        }
    }
};
