# Introduction to PostgreSQL

Welcome to your first steps with PostgreSQL! This guide will help you understand the basics of PostgreSQL and get you started with database management.

## What is PostgreSQL?

PostgreSQL (often called "Postgres") is a powerful, open-source relational database management system (RDBMS). It's been actively developed for over 30 years and is known for its:

- Reliability
- Feature robustness
- Standards compliance
- Extensibility

## Setting Up PostgreSQL and pgAdmin

### Windows Installation

1. Download the PostgreSQL installer from [postgresql.org](https://www.postgresql.org/download/windows/)
2. Run the installer
3. Choose components to install (make sure PostgreSQL Server and pgAdmin 4 are selected)
4. Choose a password for the database superuser (postgres)
5. Keep the default port (5432)
6. Complete the installation

### Mac Installation

1. Method 1 - Using Homebrew:

   ```bash
   brew install postgresql
   brew services start postgresql
   ```

2. Method 2 - Using the Postgres.app

   - Download from [postgresapp.com](https://postgresapp.com)
   - Drag to Applications folder
   - Double click to start

### Linux Installation (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

## Installing pgAdmin

pgAdmin is the most popular administration and management tool for PostgreSQL.

### Windows

- Already included if you installed PostgreSQL using the installer

### Mac

1. Download from [pgadmin.org](https://www.pgadmin.org/download/pgadmin-4-macos/)
2. Move to Applications folder

### Linux

```bash
sudo curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add -
sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list'
sudo apt update
sudo apt install pgadmin4
```

## Getting Started with pgAdmin

1. Launch pgAdmin
2. First time setup:
   - Set a master password for pgAdmin
   - Connect to your server:
     - Right-click 'Servers'
     - Choose 'Create' → 'Server'
     - Give it a name (e.g., "Local PostgreSQL")
     - In the Connection tab:
       - Host: localhost
       - Port: 5432
       - Username: postgres
       - Password: (the one you set during installation)

## Basic pgAdmin Tips

1. **Server Navigation**

   - Servers → Your Server → Databases → Your Database → Schemas → Tables

2. **Creating a Database**

   - Right-click on Databases
   - Select "Create" → "Database"
   - Enter a name and click Save

3. **Query Tool**

   - Click Tools → Query Tool
   - Or press F3
   - This opens a SQL editor where you can write and execute queries

4. **Viewing Data**

   - Right-click any table
   - Select "View/Edit Data" → "All Rows"

5. **Refresh**
   - Always refresh (F5) after making changes to see updates