-- Create a sample users table (common in web apps)
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,  -- This automatically creates an index
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT true
);

-- 0. The primary key is always indexed
-- It enforces uniqueness and provides a fast lookup mechanism for rows based on the primary key

-- 1. BASIC INDEX
-- ============
-- Use case: Fast user lookup by email (login functionality)
CREATE INDEX idx_users_email ON users(email);

-- Use case: Search users by username (user search feature)
CREATE INDEX idx_users_username ON users(username);

-- 2. COMPOUND (COMPOSITE) INDEX
-- An index built on multiple columns. In this case, is_active and created_at. 
-- It is used to efficiently filter active users and sort or filter them by their creation timestamp.
-- ==============
-- Use case: Filter active users by creation date (user listing with filters)
CREATE INDEX idx_users_active_created ON users(is_active, created_at);

-- 3. PARTIAL INDEX
-- A specialized index that includes only rows meeting a specific condition (here, where is_active = true) and covers the username and email columns. 
-- This reduces the index size and speeds up queries that predominantly target active users.
-- =============
-- Use case: Only index active users (most queries only need active users)
CREATE INDEX idx_active_users 
ON users(username, email) 
WHERE is_active = true;

-- Create a posts table (for a blog or forum feature)
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    title VARCHAR(200) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'draft',
    view_count INTEGER DEFAULT 0
);

-- 4. INDEX FOR FOREIGN KEY
-- Used to optimize lookups and join operations between posts and users
-- Most of the database create it by themselves
-- =====================
-- This is automatically created when you define a foreign key
-- But if it wasn't, you'd create it like this:
CREATE INDEX idx_posts_user_id ON posts(user_id);

-- 5. INDEX FOR SORTING
-- It is designed to efficiently retrieve the most recent posts without requiring an additional sorting operation at query time.
-- =================
-- Use case: Show latest posts first (common in feeds)
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);

-- 6. EXPRESSION INDEX (FUNCTION-BASED INDEX)
-- It supports case-insensitive search queries by storing the lowercase version of the title, eliminating the need to compute the function at query time
-- ================
-- Use case: Case-insensitive search
CREATE INDEX idx_posts_title_lower ON posts(LOWER(title));

-- Now you can efficiently search like this:
-- SELECT * FROM posts WHERE LOWER(title) = LOWER('Search Term');

-- Create a comments table
CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES posts(post_id),
    user_id INTEGER REFERENCES users(user_id),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_approved BOOLEAN DEFAULT false
);

-- 7. MULTI-COLUMN SEARCH INDEX
-- It optimizes queries that need to filter comments by both the associated post and the commenting user, improving lookup speed for these combined conditions.
-- =========================
-- Use case: Find comments by post and user
CREATE INDEX idx_comments_post_user 
ON comments(post_id, user_id);

-- Examples of how these indexes help:

-- 1. Fast user login
-- This will use idx_users_email
SELECT * FROM users WHERE email = 'user@example.com';

-- 2. Latest posts by active users
-- This will use idx_users_active_created
SELECT u.username, p.title, p.created_at
FROM users u
JOIN posts p ON u.user_id = p.user_id
WHERE u.is_active = true
ORDER BY p.created_at DESC;

-- 3. Search posts (case insensitive)
-- This will use idx_posts_title_lower
SELECT * FROM posts 
WHERE LOWER(title) LIKE LOWER('%search%');

-- 4. Get all comments for a post by user
-- This will use idx_comments_post_user
SELECT * FROM comments 
WHERE post_id = 1 AND user_id = 1;

-- IMPORTANT NOTES FOR WEB DEVELOPERS:
-- 1. Indexes make SELECT faster but slow down INSERT/UPDATE
-- 2. Only add indexes for columns you frequently search or sort by
-- 3. Primary keys and foreign keys automatically create indexes
-- 4. Indexes take up disk space, so don't overuse them
-- 5. For small tables (less than 1000 rows), indexes might not be necessary

-- To see if your index is being used:
-- EXPLAIN SELECT * FROM users WHERE email = 'user@example.com';

-- To remove an index if you don't need it:
-- DROP INDEX idx_users_email;

-- Common scenarios where you want indexes:
-- 1. Login/authentication columns (email, username)
-- 2. Foreign keys (for relationships)
-- 3. Columns used in WHERE clauses frequently
-- 4. Columns used in ORDER BY frequently
-- 5. Columns used in GROUP BY frequently 