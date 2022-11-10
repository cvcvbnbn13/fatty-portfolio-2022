export default {
  name: 'career',
  title: 'Career',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    },
    {
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'string',
    },
    {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'string',
    },
    {
      name: 'isCurrnetlyWorkingHere',
      title: 'IsCurrnetlyWorkingHere',
      type: 'boolean',
    },
    {
      name: 'technologies',
      title: 'technologies',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}
