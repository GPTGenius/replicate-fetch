export interface ModelItem {
  /**
   * @name name of the model. For example: prompthero/openjourney
   */
  name: string;
  /**
   * @key key of the model. For example: 9936c2001faa2194a261c01381f90e65261879985476014a0a37a334593a05eb
   */
  key: string;
}

export interface ModelParams {
  prompt: string;
  /**
   * @width default value: 512
   */
  width?: number;
  /**
   * @height default value: 512
   */
  height?: number;
  /**
   * @num_output default value: 1, allowed values: 1-4
   */
  num_output?: number;
  /**
   * @image_dimensions default value: 512x512, only used in model stable-diffusion
   */
  image_dimensions?: string;
}

export type ModelList =
  | 'openjourney'
  | 'stable-diffusion'
  | 'midjourney'
  | 'gpt';

export interface Predition {
  uuid: string;
  version_id: string;
  created_at: string;
  updated_at: string;
  status: string;
  inputs: ModelParams;
  output?: string[];
  run_logs?: string;
  version: {
    model: {
      absolute_url: string;
      username: string;
      name: string;
      description: string;
    };
  };
}
