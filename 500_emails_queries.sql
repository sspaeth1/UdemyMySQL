/*

---------------
SELECT DATE_FORMAT(time_at, '%M %D %Y') AS 'earliest_date'
FROM users
ORDER BY time_at ASC
LIMIT 1;

----------

SELECT email, time_at 
FROM users
WHERE time_at = (SELECT time_at
                FROM users 
                ORDER BY time_at ASC 
                LIMIT 1)

--------
SELECT DATE_FORMAT(time_at, '%M') as month,


SELECT MONTHNAME(time_at) as month,
count(MONTHNAME(time_at)) as count
FROM users
GROUP BY month
ORDER BY month;


--------------


SELECT COUNT(email) AS 'yahoo_users'
FROM users 
WHERE email 
LIKE '%yahoo.com';



--------------------
*/

SELECT 
CASE
 WHEN email LIKE '%gmail.com'  THEN 'gmail'
 WHEN email LIKE '%yahoo.com'  THEN 'yahoo'
 WHEN email LIKE '%hotmail.com'   THEN 'hotmail'
 ELSE  'other'
END as 'provider',
CASE
 WHEN email LIKE '%gmail.com'  THEN COUNT(email  LIKE '%gmail.com')
 WHEN email LIKE '%yahoo.com'  THEN COUNT(email  LIKE '%yahoo.com') 
 WHEN email LIKE '%hotmail.com'  THEN COUNT(email LIKE '%hotmail.com' )
 ELSE COUNT(email)
END as 'total_users'
FROM users
GROUP BY provider
ORDER BY total_users;

