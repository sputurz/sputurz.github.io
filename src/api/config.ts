import axios from 'axios';

export const BASE_URL = 'https://cinemaguide.skillbox.cc';

const api = axios.create({
  baseURL: BASE_URL,
  // timeout: 50,
  withCredentials: true,
});

interface PrismaError {
  name: string;
  clientVersion?: string;
  [key: string]: unknown; // Для других возможных полей
}

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: unknown;
  credentials?: 'include' | 'omit' | 'same-origin';
}

const handlePrismaError = (data: unknown): void => {
  const errorData = data as PrismaError;
  if (errorData?.name === 'PrismaClientValidationError') {
    throw new Error(`Prisma Error: ${JSON.stringify(errorData)}`);
  }
};

export const makeRequest = async <T>(
  url: string,
  options: RequestOptions = {}
): Promise<T> => {
  const { method = 'GET', data } = options;

  try {
    const response = await api.request<T>({
      url,
      method,
      data,
    });

    handlePrismaError(response.data);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      handlePrismaError(err.response?.data);
    }
    throw new Error(err instanceof Error ? err.message : 'Unknown error');
  }
};
