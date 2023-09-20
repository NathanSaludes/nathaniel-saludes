import { schemaTypes } from "@/sanity/schemas"
import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

const singletonActions = new Set(["publish", "discardChanges", "restore"])

const singletonTypes = new Set(["about"])

const config = defineConfig({
  projectId: "1avgl6w2",
  dataset: "production",
  title: "My Personal Website",
  basePath: "/admin",
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("General")
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title("General").id("general").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType("general").documentId("general"),
            ),

            // Regular document types
            ...S.documentTypeListItems().filter((listItem) => !["general"].includes(listItem.getId() || "")),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})

export default config
