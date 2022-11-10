export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of skill',
      type: 'string',
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
}
