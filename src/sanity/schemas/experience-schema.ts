const experience = {
	name: "experience",
	type: "document",
	title: "Experience",
	fields: [
		{
			name: "job_title",
      title: "Job Title",
			type: "string"
		},
		{
			name: "company",
      title: "Company",
			type: "string"
		},
		{
			name: "start_date",
			type: "date",
      title: "Start Date",
			options: {
				dateFormat: "YYYY MMM"
			}
		},
		{
			name: "end_date",
      title: "End Date",
			type: "date",
			options: {
				dateFormat: "YYYY MMM"
			}
		},
		{
			name: "company_link",
      title: "Company Link",
			type: "url"
		},
		{
			name: "job_description",
      title: "Job Description",
			type: "array",
			of: [{ type: 'block' }]
		},
		{
			name: "skills",
      title: "Skills",
			type: "array",
			of:[
				{ 
					type: "reference", 
					to: { type: "skills" }
				}
			],
			options: {
				sortable: "true"
			}
		},
		{
			name: "company_logo",
      title: "Logo",
			type: "image",
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alt Text',
				}
			]
		}
	]
}

export default experience
