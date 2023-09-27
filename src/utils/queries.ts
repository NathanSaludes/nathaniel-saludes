import { FilteredResponseQueryOptions, QueryParams } from "next-sanity"
import { client } from "../sanity"
import { TAchievements, TExperience, TGeneral, TProject, TSkill } from "./types"

interface createFetchOptions {
  params?: QueryParams
  requestOptions: FilteredResponseQueryOptions
}
function createFetch<T>(queryString: string, options?: createFetchOptions): () => Promise<T> {
  if (options?.params) {
    return async () => client.fetch<T>(queryString, options.params, options.requestOptions)
  }

  if (options?.requestOptions) {
    return async () => client.fetch<T>(queryString, options.params, options.requestOptions)
  }

  return async () => client.fetch<T>(queryString)
}

/* Queries
------------------------------------------------------------------------ */

/* General */
export const fetchGeneral = createFetch<TGeneral>(`*[_type == "general"][0]`, {
  params: undefined,
  requestOptions: {
    cache: "no-store",
  },
})

/* Experience */
export const fetchExperience = createFetch<TExperience[]>(
  `*[_type == "experience"]{ 
		...,
		skills[]->,
		company_logo { 
			...,
			asset->{
				url
			}
		} 
	} | order(start_date desc)`,
  {
    params: undefined,
    requestOptions: {
      cache: "no-store",
    },
  },
)

/* Skills */
export const fetchSkills = createFetch<TSkill[]>(`*[_type == "skills"] | order(_createdAt asc)`, {
  params: undefined,
  requestOptions: { cache: "no-store" },
})

/* Featured Projects */
export const fetchFeaturedProjects = createFetch<TProject[]>(
  `*[_type == "projects"][0..8]{
    ...,
    thumbnail {
      asset->{
        url
      }
    }
  } | order(_createdAt desc)`,
  {
    params: undefined,
    requestOptions: {
      cache: "no-store",
    },
  },
)

/* Projects */
export const fetchProjects = createFetch<TProject[]>(
  `*[_type == "projects"]{
    ...,
    thumbnail {
      asset->{
        url
      }
    }
  } | order(_createdAt desc)`,
  {
    params: undefined,
    requestOptions: {
      cache: "no-store",
    },
  },
)

/* Certifications */
export const fetchCertificates = createFetch<TAchievements[]>(
  `*[_type == "achievements"]{
    ...,
    thumbnail_preview {
      asset->{
        url
      }
    }
  }`,
  {
    params: undefined,
    requestOptions: {
      cache: "no-store",
    },
  },
)
