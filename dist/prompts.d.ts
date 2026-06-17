export interface Template {
    id: string;
    label: string;
    hint: string;
}
export declare const TEMPLATES: Template[];
export declare function getProjectName(): Promise<string>;
export declare function getTemplateChoice(): Promise<string>;
/**
 * Resolve the installed PHP version, or null if PHP is missing.
 * `shell: true` so the bare name `php` resolves via PATH/PATHEXT on Windows,
 * matching how the interactive shell finds php.exe. Never rejects/throws:
 * a missing binary emits 'error', which we catch and report as null.
 */
export declare function detectPhp(): Promise<string | null>;
//# sourceMappingURL=prompts.d.ts.map