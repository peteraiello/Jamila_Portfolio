import {defineField, defineType} from 'sanity'
import {TextIcon} from '@sanity/icons'

export const infoPanel = defineType({
  name: 'infoPanel',
  title: 'Info Panel',
  type: 'object',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'blurb',
      title: 'Blurb',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      type: 'image', 
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: "altText",
          type: "string"
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled Info Panel',
      }
    },
  },
})