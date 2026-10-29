package com.thehalfplate.backend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * API metadata for the Swagger UI / OpenAPI docs exposed by springdoc at
 * /swagger-ui/index.html and /v3/api-docs.
 */
@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI apiInfo() {
        return new OpenAPI()
                .info(new Info()
                        .title("THE HALF PLATE API")
                        .description("REST API for THE HALF PLATE — menu, offers and health endpoints.")
                        .version("v0.1.0"));
    }
}
