## ProcessStore.

### Current apps

**_Initially only finder_**

- activeApp: ID-based
- Record<AppId: AppProcessData>

**_AppProcessData_**

- **zIndex**: integer
- **size**: min, max, docked
- **minSize**: {l,b} L and b should be in percentage.
- **position**: {x,y} X and Y should be number.

## App store

- Top app bar to render
  - App ID
  - TopAppBarStatic data
