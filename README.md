starCMD

Overview

starCMD is a real-time system monitoring dashboard designed to fetch and display server statistics. It leverages Laravel, WebSockets, Redis, and Docker for an efficient and scalable monitoring solution.

Features

Real-time server monitoring

Laravel Queues for asynchronous data fetching

WebSockets for live updates (optional)

Redis for caching and performance optimization

React frontend (planned for later)

Tech Stack

Backend: Laravel, PHP, Laravel Queues, Redis, WebSockets (optional)

Frontend: HTML, JavaScript (React planned for later)

Infrastructure: Docker, NGINX, MySQL, SSH

Package Management: Composer, NPM

Project Structure

starCMD/
│── src/                 # Laravel source code (optional)
│   ├── app/             # Laravel application logic
│   ├── config/          # Configuration files
│   ├── database/        # Migrations & seeders
│   ├── public/          # Public assets
│   ├── resources/       # Views & frontend assets
│   ├── routes/          # API & web routes
│   ├── storage/         # Logs & uploads
│   ├── tests/           # Test cases
│── docker/              # Docker-related configurations
│── docker-compose.yml   # Docker Compose file
│── README.md            # Project documentation

Setup & Installation

Prerequisites

Ensure you have the following installed:

Docker & Docker Compose

PHP & Composer

Node.js & NPM

Clone the Repository

git clone https://github.com/yourusername/starCMD.git
cd starCMD

Environment Configuration

Copy the example .env file and configure it:

cp .env.example .env

Install Dependencies

composer install
npm install

Start Docker Containers

docker-compose up -d

Run Migrations

php artisan migrate

Running the Application

To start the Laravel development server:

php artisan serve

If using WebSockets:

php artisan websockets:serve

Future Enhancements

Implement authentication using Laravel Sanctum/Passport

CI/CD pipeline for automated deployments

Advanced monitoring and logging solutions

License

This project is licensed under the MIT License.

MIT License

Copyright (c) [2025] [Heriberto Torres]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.