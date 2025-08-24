# Use an OpenJDK runtime as base image
FROM openjdk:17-jdk-slim

# Set working directory inside container
WORKDIR /app

# Copy the JAR file built by Spring Boot
COPY target/*.jar app.jar

# Expose the port your Spring Boot app runs on (default: 8080)
EXPOSE 8080

# Command to run the app
ENTRYPOINT ["java","-jar","app.jar"]
