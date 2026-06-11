#!/usr/bin/env bash
# SPOK OS boot check — READ-ONLY. Reports germline + vault presence for the activation grid.
# It only runs `test`/`echo` (no writes, no network), so it's pre-authorized in
# .claude/settings.json and the boot runs without a permission prompt.
set -u

test -d "$HOME/SPOK"              && echo "spok:yes"    || echo "spok:no"
test -f "$HOME/SPOK/soul/soul.md" && echo "soul_md:yes" || echo "soul_md:no"
test -d "$HOME/SPOK/skills"       && echo "skills:yes"  || echo "skills:no"

for entry in \
  "onreb:$HOME/projects/ONREB/vault/onreb-vault" \
  "connie:$HOME/projects/connie/vault/connie-vault" \
  "chrisberno:$HOME/projects/chrisberno.x/vault/chrisberno-vault" \
  "devdocs:$HOME/projects/chrisberno.dev/vault/chrisberno-dev-vault"; do
  name="${entry%%:*}"; path="${entry#*:}"
  test -d "$path" && echo "vault:$name:yes" || echo "vault:$name:no"
done
