import moment from "moment"
import { createClient } from "next-sanity"

// initialize client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  useCdn: true,
  apiVersion: moment().format("YYYY-MM-DD"),
})
