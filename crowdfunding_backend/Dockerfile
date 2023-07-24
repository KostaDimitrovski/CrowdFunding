# Use a base Java 17 image from OpenJDK
FROM openjdk:latest
# Set the working directory inside the container
WORKDIR /backend

# Copy the packaged Spring Boot JAR into the container
COPY target/crowdfunding-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your Spring Boot app is running on (8081 in this case)
EXPOSE 8081

# Command to run your Spring Boot application
CMD ["java", "-jar", "app.jar"]
