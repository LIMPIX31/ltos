import { defineConfig, type Options } from 'tsup'

const defaults = {
	entry: ['src/index.ts'],
	clean: true,
	format: 'esm',
	platform: 'neutral',
	dts: true,
} as const satisfies Options

export function config(overrides: Options): Options {
	return { ...defaults, ...overrides }
}

export const node = config({ platform: 'node' })
export const browser = config({ platform: 'browser' })

export default defineConfig(defaults)
