Microservices Architecture

technique that breaks down a large application into smaller, manageable and independent services.
Each service is responsibel for a specific functionality.
Adv - Better scalability, maintainability, flexibility

1. API Gateway Pattern
Single entry point for all client requests.
helps in aggregating responses from multiple microservices, reducing the number of round trips between clients and services. This results in improved performance and user experience. Second, it enables you to implement cross-cutting concerns such as authentication, logging, and rate limiting at a single place, promoting consistency and reducing redundancy.

2. Service Discovery Pattern
This pattern allows services to find each other dynamically, ensuring smooth communication and reducing the need for manual configuration.
a. at client side, Client -> registry -> find service to use
b, at server side, Client -> laod balancer -> registry -> find registry to use

3. Circuit Breaker Pattern
