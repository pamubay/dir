# dir

[![JSR @ddd/dir](https://jsr.io/badges/@ddd/dir)](https://jsr.io/@ddd/dir)

Utilities related to operating system default directory.

### Utilities

**`home_dir`**

- Get user home directory
- Fork:
  [justjavac/deno_dirs/home_dir](https://github.com/justjavac/deno_dirs/blob/e8c001bbef558f08fd486d444af391729b0b8068/home_dir/mod.ts).
- MIT License Copyright (c) justjavac

**`cache_dir`**

- Get user cache directory
- Fork:
  [justjavac/deno_dirs/cache_dir](https://github.com/justjavac/deno_dirs/blob/e8c001bbef558f08fd486d444af391729b0b8068/cache_dir/mod.ts).
- MIT License Copyright (c) justjavac

**`deno_dir`**

- Set Deno cache directory

### Examples

```js
import { homeDir, cacheDir, denoDir } from "jsr:@ddd/dir";

const user_home_dir = homeDir()

const user_cache_dir = cacheDir()

const deno_cache_dir = denoDir() // From environment variables

const deno_custom_cache_dir = denoDir("./my_deno_cache")

```

### NOTES

- Currently has no test
- Republish for JSR
