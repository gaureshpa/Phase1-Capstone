# TypeScript Decisions

## 1. Incremental Migration

**Decision:** Migrate the project from JavaScript to TypeScript one file at a time.

**Why:** This made it easier to find and fix errors without breaking the whole application.

**Alternative:** Convert the entire project at once.

**Why not:** Too many errors would appear at the same time and make debugging harder.

---

## 2. Strict Type Checking

**Decision:** Enable `strict: true` after the initial migration.

**Why:** It catches problems such as `null`, `undefined`, incorrect arguments, and implicit `any`.

**Alternative:** Keep `strict: false`.

**Why not:** It would allow more type errors to remain hidden.

---

## 3. Nullable Routes

**Decision:** Use `Route | null` for the application route.

**Why:** The application may temporarily have no matched route. TypeScript then requires the code to handle that case safely.

**Alternative:** Always use `Route` and assume a route exists.

**Why not:** This could cause runtime errors when no route is available.

---

## 4. Generics

**Decision:** Use generics for reusable utilities such as `Store<State>`, `Queue<T>`, and `ApiClient.get<T>()`.

**Why:** Generics allow these utilities to work with different types while maintaining type safety.

**Alternative:** Use `any`.

**Why not:** `any` removes compile-time type checking and weakens autocomplete and error detection.

---

## 5. Type-Only Imports and Path Aliases

**Decision:** Use `import type` for type-only dependencies and aliases such as `@utils/*` and `@components/*`.

**Why:** Type-only imports avoid unnecessary runtime imports, while aliases make imports shorter and easier to maintain.

**Alternative:** Use regular relative imports everywhere.

**Why not:** Long relative paths are harder to read and maintain.
