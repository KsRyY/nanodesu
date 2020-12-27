import YAML from 'yaml'
import fs from 'fs-extra'

export async function readYAML(file: string, yamlOptions: YAML.Options) {
	const contnent = (await fs.readFile(file)).toString()
	return YAML.parse(contnent, yamlOptions)
}

export async function writeYAML(
	file: string,
	value: any,
	yamlOptions: YAML.Options
) {
	const data = YAML.stringify(value, yamlOptions)
	return fs.writeFile(file, data, {
		mode: 0o644,
	})
}
