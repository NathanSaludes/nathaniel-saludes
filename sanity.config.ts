import { schemaTypes } from "@/sanity/schemas"
import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

const config = defineConfig({
	projectId: "1avgl6w2",
	dataset: "production",
	title: "My Personal Website",
	basePath: "/admin",
	plugins: [deskTool(), visionTool()],
	schema: {
		types: schemaTypes
	}
})

export default config