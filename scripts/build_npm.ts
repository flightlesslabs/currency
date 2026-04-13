// ex. scripts/build_npm.ts
import { build, emptyDir } from '@deno/dnt';
const pkg = JSON.parse(await Deno.readTextFile('./deno.json'));

await emptyDir('./dist');

await build({
  entryPoints: ['./src/mod.ts'],
  outDir: './dist',
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: pkg.name,
    version: pkg.version,
    publishConfig: {
      'access': 'public',
    },
    description: pkg.description,
    license: 'MIT',
    repository: {
      type: 'git',
      url: 'git+https://github.com/flightlesslabs/currency.git',
    },
  },
  postBuild() {
    Deno.copyFileSync('README.md', 'dist/README.md');
  },
});
