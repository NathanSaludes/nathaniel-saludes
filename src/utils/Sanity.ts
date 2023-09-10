import moment from "moment";
import { createClient } from "next-sanity";

// initialize client
export const client = createClient({
	projectId: process.env.PROJECT_ID,
	dataset: process.env.DATASET,
	useCdn: true,
	apiVersion: moment().format("YYYY-MM-DD"),
})