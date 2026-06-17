import fs from 'fs';
import path from 'path';
import { text, select, isCancel, cancel } from '@clack/prompts';
const { spawn } = require('child_process');

export interface Template {
  id: string;
  label: string;
  hint: string;
}

// Single source of truth for the boilerplates. Folder ids map to ./lib/<id>.
export const TEMPLATES: Template[] = [
  { id: '158', label: 'Vue2-Laravel8', hint: 'php 7.4' },
  { id: '159', label: 'Vue3-Laravel8', hint: 'php 7.4' },
  { id: '160', label: 'Vue3-Laravel9', hint: 'php 8.0' },
  { id: '161', label: 'Vue3-Laravel10', hint: 'php 8.1' },
  { id: '162', label: 'Vue3-Laravel11', hint: 'php 8.2 - 8.3' },
];

const DEFAULT_NAME = 'v-kit-app';
// Characters that are illegal in Windows paths (and a good ban list elsewhere too).
const INVALID_NAME = /[<>:"/\\|?*\x00-\x1f]/;

function bail(value: unknown): void {
  if (isCancel(value)) {
    cancel('Cancelled.');
    process.exit(0);
  }
}

export async function getProjectName(): Promise<string> {
  const answer = await text({
    message: 'Project name',
    placeholder: DEFAULT_NAME,
    defaultValue: DEFAULT_NAME,
    validate(value) {
      const v = (value ?? '').trim();
      if (!v) return; // empty -> default name is used
      if (INVALID_NAME.test(v)) return 'Name contains invalid path characters.';
      if (fs.existsSync(path.join(process.cwd(), v))) return `Directory "${v}" already exists.`;
    },
  });
  bail(answer);
  return (answer as string).trim() || DEFAULT_NAME;
}

export async function getTemplateChoice(): Promise<string> {
  const choice = await select({
    message: 'Select your preferred boilerplate',
    options: TEMPLATES.map((t) => ({ value: t.id, label: t.label, hint: t.hint })),
  });
  bail(choice);
  return choice as string;
}

/**
 * Resolve the installed PHP version, or null if PHP is missing.
 * `shell: true` so the bare name `php` resolves via PATH/PATHEXT on Windows,
 * matching how the interactive shell finds php.exe. Never rejects/throws:
 * a missing binary emits 'error', which we catch and report as null.
 */
export async function detectPhp(): Promise<string | null> {
  return new Promise((resolve) => {
    let output = '';
    let settled = false;
    const finish = (version: string | null) => {
      if (settled) return;
      settled = true;
      resolve(version);
    };

    const phpProcess = spawn('php', ['-v'], { shell: true });

    phpProcess.stdout.on('data', (data: { toString: () => string }) => {
      output += data.toString();
    });

    phpProcess.on('error', () => finish(null));
    phpProcess.on('close', () => {
      const match = output.match(/PHP (\d+\.\d+\.\d+)/);
      finish(match ? `v${match[1]}` : null);
    });
  });
}
