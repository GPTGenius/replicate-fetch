import { models, configs, defaultParams } from './config';
import { ModelItem, ModelParams, Predition } from './interface';

export * from './config';

export const get = async (prediction: Predition, model: ModelItem) => {
  const res = await fetch(
    `https://replicate.com/api/models/${model.name}/versions/${model.key}/predictions/${prediction.uuid}`
  );
  const data = await res.json();
  return data.prediction as Predition;
};

export const create = async (
  params: ModelParams,
  model: ModelItem,
  timeout: number = configs.timeout
) => {
  const res = await fetch(
    `https://replicate.com/api/models/${model.name}/versions/${model.key}/predictions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: params,
      }),
    }
  );
  const times = timeout / configs.interval;
  let prediction: Predition = await res.json();
  let count = 0;
  while (
    !['canceled', 'succeeded', 'failed'].includes(prediction.status) &&
    count < times
  ) {
    try {
      await new Promise((resp) => setTimeout(resp, configs.interval));
      const data = await get(prediction, model);
      prediction = data;
      count += 1;
    } catch {
      continue;
    }
  }
  return prediction.output ?? [];
};

/**
 * @createOpenjourney create openjourney style image. Origin: https://replicate.com/prompthero/openjourney
 */
export const createOpenjourney = (params: ModelParams) =>
  create({ ...defaultParams, ...params }, models.openjourney);

/**
 * @createStableDiffusion create stable diffusion style image. Origin: https://replicate.com/stability-ai/stable-diffusion
 * @params
 */
export const createStableDiffusion = (params: ModelParams) => {
  const {
    width = defaultParams.width,
    height = defaultParams.height,
    ...rest
  } = params;
  const imageDimensions = `${width}x${height}`;
  return create(
    {
      num_output: defaultParams.num_output,
      image_dimensions: imageDimensions,
      ...rest,
    },
    models['stable-diffusion']
  );
};

/**
 * @createMidjourney create midjourney style image. Origin: https://replicate.com/tstramer/midjourney-diffusion
 */
export const createMidjourney = (params: ModelParams) =>
  create({ ...defaultParams, ...params }, models.midjourney);
