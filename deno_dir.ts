import { join, resolve } from "@std/path";
import { cacheDir, homeDir } from "./mod.ts";

// Decides Deno cache directory from environment
// original implementation: https://github.com/denoland/deno_cache_dir/blob/696ff4fe13bed17e881d52e222dbbafec7e531ec/rs_lib/src/deno_dir.rs#L32
export function denoDir(path?: URL | string): string {
  const root_custom = path &&
    (path instanceof URL ? resolve(path.toString()) : resolve(path));
  if (root_custom) return root_custom;

  const root_env = Deno.env.get("DENO_DIR");
  if (root_env) return root_env;

  const cache_dir = cacheDir();
  if (cache_dir) return join(cache_dir, "deno");

  const home_dir = homeDir();
  if (home_dir) return join(home_dir, ".deno");

  throw new Error("FAILED_SET_DENO_CACHE_DIRECTORY");
}
