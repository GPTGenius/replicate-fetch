import { ModelItem, ModelList, ModelParams } from './interface';

export const models: Record<ModelList, ModelItem> = {
  // https://replicate.com/prompthero/openjourney
  openjourney: {
    name: 'prompthero/openjourney',
    key: '9936c2001faa2194a261c01381f90e65261879985476014a0a37a334593a05eb',
  },
  // https://replicate.com/stability-ai/stable-diffusion
  'stable-diffusion': {
    name: 'stability-ai/stable-diffusion',
    key: 'db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf',
  },
  // https://replicate.com/tstramer/midjourney-diffusion
  midjourney: {
    name: 'tstramer/midjourney-diffusion',
    key: '436b051ebd8f68d23e83d22de5e198e0995357afef113768c20f0b6fcef23c8b',
  },
  // https://replicate.com/fofr/midjourney-gpt
  gpt: {
    name: 'fofr/midjourney-gpt',
    key: '693b5b97e77b15cfdc5908f308d9d14371c33198905a324f46f6811dbae3c2bf',
  },
};

export const defaultParams: Omit<ModelParams, 'prompt'> = {
  width: 512,
  height: 512,
  num_output: 1,
};

export const configs = {
  /**
   * @timeout 3 min
   * */
  timeout: 3 * 60 * 1000,
  /**
   * @interval 1 s
   * */
  interval: 1000,
};
