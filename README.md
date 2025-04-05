# eindopdracht-webdevelopment-2-backend

## Project Description

This project is a backend application built with TypeScript, SQL, and JavaScript. It uses Docker for containerization
and includes a MySQL database and Adminer for database management.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

### Clone the Repository

```sh
git clone https://github.com/yourusername/eindopdracht-webdevelopment-2-backend.git

cd eindopdracht-webdevelopment-2-backend
```

### Set the Environment Variables

Create a `.env` file based on the `.env.example` file in the root of the project and add the following environment
variables:

```sh
DB_HOST=db
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_PORT=3306
```

### Build and Run the Application

```sh
docker-compose up --build
```

### Build and Run the Application in Detached Mode

```sh
docker-compose up --build -d
```

### Stop the Application

```sh
docker-compose down
```
