const fs = require('fs');

export function parse_file(file: string): string {
	return fs.readFileSync(file, 'utf8');
}
