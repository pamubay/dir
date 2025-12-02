// Forked: https://github.com/justjavac/deno_dirs/blob/e8c001bbef558f08fd486d444af391729b0b8068/home_dir/mod.ts
// MIT License Copyright (c) justjavac
/** Returns the path to the user's home directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 *
 * |Platform | Value                                    | Example                |
 * | ------- | -----------------------------------------| -----------------------|
 * | Linux   | `$HOME`                                  | /home/justjavac        |
 * | macOS   | `$HOME`                                  | /Users/justjavac       |
 * | Windows | `$USERPROFILE`                           | C:\Users\justjavac     |
 */
export function homeDir(): string | null {
  switch (Deno.build.os) {
    case "linux":
    case "darwin":
      return Deno.env.get("HOME") ?? null;
    case "windows":
      return Deno.env.get("USERPROFILE") ?? null;
  }
  return null;
}
