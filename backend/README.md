# THE HALF PLATE — backend

Spring Boot (Java 17, Maven) API skeleton. Standalone — no dependency on
anything in `../frontend`, so this folder can be lifted into its own repo
with no changes.

## Run

```bash
./mvnw spring-boot:run
```

Starts on `http://localhost:8080`. Menu/offers/contact data is still
hardcoded in-memory (see `service/impl/`), but reviews and moments
(celebration/happy-moment photos) are persisted in Postgres — see
[Database](#database) below.

## Endpoints

| Method | Path                      | Returns                                              |
|--------|---------------------------|-------------------------------------------------------|
| GET    | `/api/health`             | `{"status": "UP"}`                                     |
| GET    | `/api/menu`                | Menu categories and items (prices in ₹)                |
| GET    | `/api/offers`               | Active promotional offers                              |
| GET    | `/api/reviews`              | Guest reviews, newest first                            |
| POST   | `/api/reviews`              | Submit a review (JSON: `author`, `rating`, `text`)      |
| GET    | `/api/moments`              | Celebration/happy-moment photos, optional `?category=`  |
| POST   | `/api/moments`              | Upload a photo (multipart: `category`, `caption`, `submittedBy`, `photo`) |
| GET    | `/api/moments/{id}/photo`   | Raw bytes for a moment's photo                          |

```bash
curl http://localhost:8080/api/health
curl http://localhost:8080/api/menu
curl http://localhost:8080/api/offers
curl http://localhost:8080/api/reviews
```

## Database

Reviews and moments (including uploaded photo bytes) are stored in
Postgres via Spring Data JPA (`entity/`, `repository/`,
`service/impl/Jpa*Service.java`). Schema is created/updated automatically
from the entities on boot (`spring.jpa.hibernate.ddl-auto: update`) — no
migrations to run.

**Local dev** defaults to `jdbc:postgresql://localhost:5432/half_plate`
with user/password `postgres`/`postgres` (see `application.yml`). Either
run a local Postgres matching that, or point at a hosted one by setting
`DATABASE_URL` (standard `postgres://user:pass@host:port/dbname` form —
`BackendApplication` parses it into the right properties at startup) or
the individual `SPRING_DATASOURCE_URL` / `SPRING_DATASOURCE_USERNAME` /
`SPRING_DATASOURCE_PASSWORD` env vars.

**Production (Render)** reads the same `DATABASE_URL` env var — set it on
the backend service to the Postgres instance's Internal Database URL from
the Render dashboard.

## API docs (Swagger)

Interactive, browsable docs for every endpoint above, via
[springdoc-openapi](https://springdoc.org/):

- Swagger UI: `http://localhost:8080/swagger-ui/index.html`
- Raw OpenAPI JSON: `http://localhost:8080/v3/api-docs`

CORS is open (dev-only) to `http://localhost:5173` — the Vite frontend's
default dev port — via `cors.allowed-origin` in `application.yml`.

## Test

```bash
./mvnw test
```

## Structure

```
src/main/java/com/thehalfplate/backend/
├── BackendApplication.java   # entry point; also parses Render's DATABASE_URL
├── config/                   # CORS config
├── controller/                # thin REST controllers
├── service/ + service/impl/   # business logic interfaces + impls (in-memory or JPA)
├── entity/ + repository/      # JPA entities and Spring Data repositories
└── model/                     # API response records (Review, Moment, MenuItem, ...)
```

`service`/`service/impl` are split by interface so controllers don't care
whether an implementation is in-memory (menu/offers/contact) or
JPA-backed (reviews/moments).
