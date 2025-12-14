import { DIGESTIVE_DATA } from './digestive';
import { RESPIRATORY_DATA } from './respiratory';
import { UROGENITAL_DATA } from './urogenital';

export const INTERNAL_DATA = [
  ...(DIGESTIVE_DATA || []),
  ...(RESPIRATORY_DATA || []),
  ...(UROGENITAL_DATA || []),
];

