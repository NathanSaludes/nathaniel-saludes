const projects = {
	name: "projects",
	type: "document",
	title: "Projects",
	fields: [
		{
			name: "title",
			type: "string",
      title: "Title"
		},
		{
			name: "project_url",
			type: "url",
      title: "Project URL"
		},
		{
			name: "thumbnail",
			type: "image",
      title: "Thumbnail"
		}
	]
}

export default projects