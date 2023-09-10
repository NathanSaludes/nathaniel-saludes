import moment from "moment";
import { createClient } from "next-sanity";

// initialize client
export const client = createClient({
	projectId: "1avgl6w2",
	dataset: "production",
	useCdn: true,
	apiVersion: moment().format("YYYY-MM-DD"),
})