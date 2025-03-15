import fs from 'fs';
import path from 'path';

export async function copyProjectStructure(sourcePath: string, destinationPath: string) {
  const entries = await fs.promises.readdir(sourcePath, { withFileTypes: true });

  for (const entry of entries) {
    const sourceFile = path.join(sourcePath, entry.name);
    const destinationFile = path.join(destinationPath, entry.name);

    if (entry.isDirectory()) {
      await fs.promises.mkdir(destinationFile);
      await copyProjectStructure(sourceFile, destinationFile);
    } else {
      await fs.promises.copyFile(sourceFile, destinationFile);
    }
  }
}