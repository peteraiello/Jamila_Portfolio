# Node version 
v22.21.1

# Build commands 
`npm run dev`

`http://localhost:3000` The dev URL

`http://localhost:3333` Sanity CMS URL 

# Sanity docs
https://www.sanity.io/docs/help/cli-errors

# Creating new components (Flexible Page Layout)
1. Create the new component: `components/infoPanel/infoPanel.tsx`
2. Add the props for the block in sanity.types 
3. Add the schema for the component: `schemaTypes/objects/infoPanel.ts`
4. Import the schema: `schemaTypes/index.ts`
5. Import the component into `BlockRenderer.tsx`.
6. Add as an option in page builder: `schemaTypes/documents/page.ts`
