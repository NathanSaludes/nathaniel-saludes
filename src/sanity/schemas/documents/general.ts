export const generalSchema = {
  name: "general",
  type: "document",
  title: "General",
  fields: [
    {
      name: "first_name",
      type: "string",
      title: "First Name",
    },
    {
      name: "last_name",
      type: "string",
      title: "Last Name",
    },
    {
      name: "job_title",
      type: "string",
      title: "Job Title",
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "mobile_number",
      type: "string",
      title: "Mobile Number",
    },
    {
      name: "intro",
      type: "string",
      title: "Intro",
    },
    {
      name: "about_me",
      type: "array",
      title: "About Me",
      of: [{ type: "block" }],
    },
    {
      name: "social_links",
      type: "array",
      title: "Social Links",
      of: [{ type: "social_link" }],
    },
  ],
}
