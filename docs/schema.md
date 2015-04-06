# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
password_digest | string    | not null
first_name      | string    | not null
last_name       | string    | not null
email           | string    | not null, unique
location        | string    | not null
photo_url       | string    |

## businesses
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
rating      | float     | 
owner_id    | integer   | not null, foreign key (references users)

## review
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
business_id | integer   | not null, foreign key (references businesses)
rating      | integer   | not null
body        | string    | not null

## opening
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
start_time  | timestamp | not null
end_time    | timestamp | not null
location    | string    | not null
business_id | integer   | not null, foreign key (references businesses)
