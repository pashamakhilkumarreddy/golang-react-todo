import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import makeRequest from 'api/index';

type IGenerateTodoParams = {
  page: number;
  limit?: number;
};

type ITodosData = {
  todos: any[];
};

/**
 * Function to fetch todos based on provided parameters.
 * @param {IGenerateTodoParams} params - Parameters for fetching todos.
 * @returns {UseQueryResult<ITodosData>} - Promise that resolves to todos data.
 */
const fetchTodos = async (params: IGenerateTodoParams): Promise<ITodosData> => {
  const response = await makeRequest.get(`/todos`, {
    params: {
      page: params.page || 1,
      limit: params.limit,
    },
  });
  return response.data;
};

/**
 * Custom hook to fetch todos with React Query.
 * @param {IGenerateTodoParams} params - Parameters for fetching todos.
 * @param {UseQueryOptions<ITodosData>} [options] - Options for the useQuery hook.
 * @returns {UseQueryResult<ITodosData>} The result object from the useQuery hook, which includes properties like data, error, isLoading, etc.
 */
export const useFetchTodos = (
  params: IGenerateTodoParams,
  options?: UseQueryOptions<ITodosData>
): UseQueryResult<ITodosData> => {
  return useQuery<ITodosData>({
    queryKey: ['todos', params],
    queryFn: () => fetchTodos(params),
    ...options,
  });
};
