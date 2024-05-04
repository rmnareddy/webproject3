# NASA APOD API Interface

This project is a simple server application designed to interface with the NASA Astronomy Picture of the Day (APOD) API. It allows users to retrieve the APOD through a RESTful API endpoint. This document provides a comprehensive guide on the application's structure and how to use it.

## Table of Contents

1. [Introduction](#introduction)
2. [Controller](#controller)
3. [Application](#application)
4. [Domain](#domain)
5. [Service](#service)
6. [Using Postman to Access the API](#using-postman-to-access-the-api)
7. [License](#license)

## Introduction

The NASA APOD API provides a new image or photograph of our universe every day, along with a brief explanation written by a professional astronomer. This application serves as a gateway to fetch those images and details, making it accessible on a local server running on port 9090.

## Controller

The controller is responsible for handling incoming HTTP GET requests, processing them through the service layer, and returning the response to the client.

### Endpoint

- **GET** `/nasa/apod` - Retrieves the Astronomy Picture of the Day.

## Application

This layer is where the application's configuration and setup occur. It includes configuring the server port, setting up routing, and initializing any middleware necessary for the application to run properly.

## Domain

The domain layer holds the core logic and data models of the application. For the purpose of this application, it might include models for the response data structure received from the NASA APOD API.

## Service

The service layer interacts with the NASA APOD API to fetch the daily image data. It handles the logic of making HTTP requests to the external API, processing the data received, and preparing it for the controller to send to the client.

## Using Postman to Access the API

To access the API using Postman:

1. Open Postman.
2. Create a new request by clicking the "New" button and selecting "Request".
3. Enter the request URL `http://localhost:9090/nasa/apod`.
4. Set the method to GET.
5. Click the "Send" button to make the request.
6. The response will include details of the Astronomy Picture of the Day, including the URL to the image or video, title, and explanation.
   
##Output
   ![Screenshot of Application](/images/screenshot.png "Output Screenshot")

