export default {
  title: 'Country',
  name: 'country',
  type: 'document',
  groups: [
    {
      title: 'Description',
      name: 'description',
    },
    {
      title: 'Gallery',
      name: 'gallery',
    },
  ],
  fields: [
    {
      title: 'Country',
      name: 'country',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'country',
      },
    },
    {
      title: 'Capital',
      name: 'capital',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Official language',
      name: 'official_language',
      type: 'reference',
      to: [{type: 'language'}],
    },
    {
      title: 'Population',
      name: 'population',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Currency',
      name: 'currency',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      group: 'description',
      of: [{type: 'block'}],
    },
    {
      title: 'Gallery',
      description: 'Upload a photo',
      name: 'gallery',
      group: 'gallery',
      type: 'image',
    },
  ],
}
