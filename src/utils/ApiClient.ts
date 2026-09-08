export interface ApiResponse<T> {
    data: T;
}

export class ApiClient {
    /**
     * Sends a GET request and returns the response as the specified type.
     *
     * `T` allows each caller to define the expected response shape while
     * keeping the API client reusable and type-safe.
     */

    async get<T> (url: string): Promise<T> {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        return response.json() as Promise<T>;
    }
}
