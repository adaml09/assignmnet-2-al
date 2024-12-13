import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'animal', // Name of the schema
  title: 'Animal', // Human-readable title for the schema
  type: 'document', // Defines it as a document type
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string', // Field type for first name
    }),
    defineField({
      name: 'animal',
      title: 'Animal',
      type: 'string', // Field type for animal
    }),
  ],
})

  