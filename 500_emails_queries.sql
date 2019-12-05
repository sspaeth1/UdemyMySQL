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
*/

SELECT DATE_FORMAT(time_at, '%M') as month,
        
FROM users;
