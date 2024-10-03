# Monorepo

https://hackernoon.com/how-to-set-up-a-monorepo-with-vite-typescript-and-pnpm-workspaces

# How to install local pkg?

cd main
pnpm add @pnpm-monorepo/shared

According to pnpm docs, if we do pnpm add within a workspace, it first tries to find that package within the workspace, and only if it is unable to find the package within the workspace it goes to the npm registry to install it.