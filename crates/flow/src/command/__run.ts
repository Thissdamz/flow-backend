import { start } from "jsr:@space-operator/deno-command-rpc@0.2.0";
import UserCommand from "./__cmd.ts";

start(new UserCommand(), { hostname: "127.0.0.1", port: 0 });