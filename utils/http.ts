import { useSession } from "next-auth/react";
import useSWR from "swr";

export function jsonToFormData(json: any): FormData {
  const form = new FormData();
  Object.keys(json)?.map(key => {
    form.append(key, json[key])
  })
  return form
}


export function fetchWithXAPIKey(input: RequestInfo | URL, init: RequestInit): Promise<Response> {
  const headers = new Headers()
  headers.set('x-api-key', process?.env.NEXT_PUBLIC_X_API_KEY)
  return fetch(`${process?.env?.NEXT_PUBLIC_API_URL}${input}`, {
    ...init,
    headers
  })
}

export const useRequestAuthenticated = () => {
  const accessToken = useSession()?.data?.user?.["accessToken"] as string;


  const fetchWithAuthentication = async (url, options: RequestInit) => {

    try {
      const response = await fetch(
        `${process?.env?.NEXT_PUBLIC_API_URL}${url}`,
        {
          ...options,
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            ...options.headers,
          },
        }
      );

      if (!response.ok) {
        let error = await response?.json()
        throw new Error(error?.message);
      }

      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
    fetch: fetchWithAuthentication,
  };
};



export function useGetResource(requestUrl) {

  const { data, error, isLoading } = useSWR(requestUrl, async (url) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    return response.json()
  })

  return {
    data,
    isLoading,
    error
  }

}
