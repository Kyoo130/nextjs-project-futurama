import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import { CHARACTERS_API_ENDPOINT } from '../constants';

export const useCharactersSData = (path: string) => {
  return useSWR(`${CHARACTERS_API_ENDPOINT}${path}`, fetcher);
}