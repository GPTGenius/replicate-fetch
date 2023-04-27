import { describe, expect, test } from 'vitest';
import { createOpenjourney, createMidjourney, createStableDiffusion } from '../src';

describe('unit-test', () => {
  test('createOpenjourney', async () => {
    const output = await createOpenjourney({
      prompt: 'a cat'
    })
    expect(output[0]).toBeDefined();
  });

  test('createMidjourney', async () => {
    const output = await createMidjourney({
      prompt: 'a cat'
    })
    expect(output[0]).toBeDefined();
  });

  test('createStableDiffusion', async () => {
    const output = await createStableDiffusion({
      prompt: 'a cat'
    })
    expect(output[0]).toBeDefined();
  });
});
