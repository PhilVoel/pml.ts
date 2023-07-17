import {readFileSync} from 'fs';

export function parse_file(file: string): string {
	return readFileSync(file, 'utf8');
}
