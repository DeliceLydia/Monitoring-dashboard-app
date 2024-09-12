# Architecture and Design Document

## Introduction

- Purpose: This document provides an overview of the architecture and design decisions for the Monitoring Dashboard application. The app allows users to track and manage website performance through an intuitive dashboard.

- Scope: It details the backend implementation using Node.js, Express, and PostgreSQL, and the frontend built with React. The document covers the API design, database schema, technology stack, and key design decisions.

- Audience: This document is for developers, architects, and stakeholders involved in the development and maintenance of the Monitoring Dashboard.

## System Overview

## High-Level Architecture

- Description: The Monitoring Dashboard application is designed with a modular architecture that separates concerns between the frontend, backend, and database. The system follows a client-server model where the frontend communicates with the backend via API calls, and the backend interacts with the database to manage and retrieve data.

- Explanation:

```Frontend (React)```: The frontend is a React-based dashboard that provides an interactive user interface. Users interact with the dashboard to add and view websites, track their status, and manage their monitoring preferences.

```Backend (Node.js, Express)```: The backend is built using Node.js and Express. It handles API requests from the frontend, processes data, and performs operations such as adding websites to the monitoring list, retrieving monitoring data, and more. It acts as an intermediary between the frontend and the database.

```Database (PostgreSQL)```: PostgreSQL is used for data storage. It manages the persistence of monitoring data, user information, and other relevant data. The backend communicates with the database to store and retrieve information as needed.

## API Design

### Endpoints Overview

This section details the API endpoints used by the Monitoring Dashboard. Each endpoint description includes its URL, HTTP method, purpose, request and response formats, and common errors.

1. Add Website
- Endpoint URL:``` /api/websites```
- HTTP Method: ```POST```
- Purpose: This endpoint allows users to add a new website to the monitoring system.
- Request Format:
``` 
{
  "name": "twitter",
  "url": "https://example.com"
}

```
- Response Format:
{
  "id": 1,
  "name": "twitter",
  "url": "https://example.com",
  "created_at": "2024-09-12T12:34:56Z"
}
```

2. 
