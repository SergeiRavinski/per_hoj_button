import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemas from './schemas/schemas'

export default defineConfig({
  name: 'default',
  title: 'per_hoj_button',

  projectId: 'cajs11h7',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
