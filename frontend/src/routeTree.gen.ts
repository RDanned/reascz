/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ChciNabidkuImport } from './routes/chci-nabidku'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ChciNabidkuRoute = ChciNabidkuImport.update({
  id: '/chci-nabidku',
  path: '/chci-nabidku',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/chci-nabidku': {
      id: '/chci-nabidku'
      path: '/chci-nabidku'
      fullPath: '/chci-nabidku'
      preLoaderRoute: typeof ChciNabidkuImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/chci-nabidku': typeof ChciNabidkuRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/chci-nabidku': typeof ChciNabidkuRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/chci-nabidku': typeof ChciNabidkuRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/chci-nabidku'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/chci-nabidku'
  id: '__root__' | '/' | '/chci-nabidku'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ChciNabidkuRoute: typeof ChciNabidkuRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ChciNabidkuRoute: ChciNabidkuRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/chci-nabidku"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/chci-nabidku": {
      "filePath": "chci-nabidku.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
