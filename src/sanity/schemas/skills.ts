const skills = {
	name: "skills",
	type: "document",
	title: "Skills",
	fields: [
		{
			name: "title",
			type: "string",
      title: "Title"
		},
		{
			name: "category",
			type: "string",
      title: "Category",
			options: {
				list: [
					{ title: "Frontend", value: "frontend" },
					{ title: "Backend", value: "backend" },
					{ title: "Tool", value: "tool" },
					{ title: "Design", value: "design" },
					{ title: "Miscellaneous", value: "misc" }
				]
			}
		}
	]
}

export default skills