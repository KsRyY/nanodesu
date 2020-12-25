import { task, desc } from 'foy'
import dts from 'rollup-plugin-dts'
import { rollup } from 'rollup'
import * as esbuild from 'esbuild'

desc('Build the project with Rollup + ESBuild')
task('build', async () => {
	const bundleDts = await rollup({
		input: 'src/index.ts',
		plugins: [dts()],
	})

	try {
		await Promise.all([
			esbuild.build({
				entryPoints: ['src/index.ts'],
				minify: true,
				platform: 'node',
				format: 'cjs',
				outfile: 'dist/libpekora.js',
			}),
			bundleDts.write({
				file: 'dist/libpekora.d.ts',
				format: 'es',
			}),
		])
	} catch (error: unknown) {
		console.log(error)
		throw error
	}
})
