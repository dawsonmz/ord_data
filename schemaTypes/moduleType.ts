export const moduleType = {
    name: 'module',
    title: 'Module',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'order',
            type: 'number',
        },
        {
            name: 'minutes',
            type: 'number',
        },
        {
            name: 'text',
            type: 'array',
            of: [{type: 'block'}],
        }
    ],
};