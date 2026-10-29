package com.thehalfplate.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.net.URI;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        applyRenderDatabaseUrl();
        SpringApplication.run(BackendApplication.class, args);
    }

    /**
     * Render injects the database connection as DATABASE_URL in
     * "postgres://user:password@host:port/name" form, which Spring's
     * datasource properties can't parse directly. Convert it into the
     * spring.datasource.* properties (as system properties, so they take
     * precedence over application.yml) before the context starts.
     */
    private static void applyRenderDatabaseUrl() {
        String databaseUrl = System.getenv("DATABASE_URL");
        if (databaseUrl == null || databaseUrl.isBlank()) {
            return;
        }

        URI uri = URI.create(databaseUrl);
        String[] userInfo = uri.getUserInfo().split(":", 2);
        int port = uri.getPort() == -1 ? 5432 : uri.getPort();
        String jdbcUrl = "jdbc:postgresql://" + uri.getHost() + ":" + port + uri.getPath();

        System.setProperty("spring.datasource.url", jdbcUrl);
        System.setProperty("spring.datasource.username", userInfo[0]);
        System.setProperty("spring.datasource.password", userInfo[1]);
    }
}
