import * as path from 'path';
import { runTests } from 'vscode-test';

async function main() {
  try {
    // The folder containing the Extension Manifest package.json
    const extensionDevelopmentPath = path.resolve(__dirname, '../../');

    // The path to test runner
    const extensionTestsPath = path.resolve(__dirname, './runner');

    // Download VS code, unzip it and run the integration test
    await runTests({ extensionDevelopmentPath, extensionTestsPath });
  } catch (err) {
    console.log(err);
    console.error('Failed to run tests');
    process.exit(1);
  }
}

main();
