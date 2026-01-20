# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Roomietive is a full-stack monorepo built with the Better-T-Stack template. It provides cross-platform applications (web + mobile) with a shared Convex backend.

## Commands

```bash
# Development
pnpm run dev           # Start all apps (web + native + backend)
pnpm run dev:web       # Web only (localhost:3001)
pnpm run dev:native    # React Native/Expo only
pnpm run dev:server    # Convex backend only

# Initial setup
pnpm install
pnpm run dev:setup     # Configure Convex project

# Quality
pnpm run check         # Oxlint + Oxfmt (lint & format)
pnpm run check-types   # TypeScript type checking across all packages

# Build & Deploy
pnpm run build         # Build all applications
pnpm run deploy        # Deploy to Cloudflare via Alchemy
pnpm run destroy       # Destroy Cloudflare deployment
```

## Architecture

```
apps/
├── web/               # React + Vite + TanStack Router
│                      # File-based routing in src/routes/
└── native/            # React Native + Expo Router
                       # File-based routing in app/

packages/
├── backend/           # Convex functions and schema
│   └── convex/        # Schema, queries, mutations, HTTP handlers
├── config/            # Shared TypeScript configuration
├── env/               # Environment validation (T3 Env + Zod)
└── infra/             # Cloudflare deployment via Alchemy
```

## Tech Stack

- **Web**: React 19, Vite, TanStack Router, TailwindCSS v4, shadcn/ui
- **Native**: React Native 0.81, Expo 54, Expo Router, TailwindCSS (NativeWind)
- **Backend**: Convex (BaaS with real-time sync)
- **Auth**: Better-Auth (cross-platform)
- **Tooling**: pnpm workspaces, Turborepo, Oxlint/Oxfmt, TypeScript strict mode

## Key Patterns

- Routing is file-based in both apps (`apps/web/src/routes/`, `apps/native/app/`)
- Environment variables are validated via `@roomietive/env` package
- Convex schema lives in `packages/backend/convex/schema.ts`
- Web uses TanStack Router DevTools in development
- Native has React Compiler and typed routes enabled

## Environment Setup

After `pnpm run dev:setup`, copy variables from `packages/backend/.env.local` to `apps/*/.env`:
- `VITE_CONVEX_URL` (web)
- `VITE_CONVEX_SITE_URL` (web)

---

This codebase will outlive you. Every shortcut you take becomes someone else's burden. Every hack compounds into technical debt that slows the whole team down.

You are not just writing code. You are shaping the future of this project. The patterns you establish will be copied. The corners you cut will be cut again.

Fight entropy. Leave the codebase better than you found it.
