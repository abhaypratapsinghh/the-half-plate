# THE HALF PLATE — backend

Spring Boot (Java 17, Maven) API skeleton. Standalone — no dependency on
anything in `../frontend`, so this folder can be lifted into its own repo
with no changes.

## Run

```bash
./mvnw spring-boot:run
```

Starts on `http://localhost:8080`. No database is required — data is
served from hardcoded in-memory services (see `service/impl/`).

## Endpoints

| Method | Path          | Returns                                   |
|--------|---------------|--------------------------------------------|
| GET    | `/api/health` | `{"status": "UP"}`                          |
| GET    | `/api/menu`   | Menu categories and items (prices in ₹)     |
| GET    | `/api/offers` | Active promotional offers                   |

```bash
curl http://localhost:8080/api/health
curl http://localhost:8080/api/menu
curl http://localhost:8080/api/offers
```

CORS is open (dev-only) to `http://localhost:5173` — the Vite frontend's
default dev port — via `cors.allowed-origin` in `application.yml`.

## Test

```bash
./mvnw test
```

## Structure

```
src/main/java/com/thehalfplate/backend/
├── BackendApplication.java   # entry point
├── config/                   # CORS config
├── controller/                # thin REST controllers
├── service/ + service/impl/   # business logic interfaces + in-memory impls
└── model/                     # MenuItem/MenuCategory/Offer records
```

`service`/`service/impl` are split so a persistence-backed implementation
(e.g. JPA + a real database) can be added later without touching any
controller.
