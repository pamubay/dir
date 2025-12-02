// Forked: https://github.com/justjavac/deno_dirs/blob/e8c001bbef558f08fd486d444af391729b0b8068/cache_dir/mod.ts
// MIT License Copyright (c) justjavac
/** Returns the path to the user's cache directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 *
 * |Platform | Value                               | Example                          |
 * | ------- | ----------------------------------- | -------------------------------- |
 * | Linux   | `$XDG_CACHE_HOME` or `$HOME`/.cache | /home/justjavac/.cache           |
 * | macOS   | `$HOME`/Library/Caches              | /Users/justjavac/Library/Caches  |
 * | Windows | `$LOCALAPPDATA`                    | C:\Users\justjavac\AppData\Local |
 */
export function cacheDir(): string | null {
  switch (Deno.build.os) {
    case "linux": {
      const xdg = Deno.env.get("XDG_CACHE_HOME");
      if (xdg) return xdg;

      const home = Deno.env.get("HOME");
      if (home) return `${home}/.cache`;
      break;
    }

    case "darwin": {
      const home = Deno.env.get("HOME");
      if (home) return `${home}/Library/Caches`;
      break;
    }

    case "windows":
      return Deno.env.get("LOCALAPPDATA") ?? null;
  }

  return null;
}
