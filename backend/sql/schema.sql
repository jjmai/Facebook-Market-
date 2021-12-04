-- Dummy table --
DROP TABLE IF EXISTS dummy;
CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);

-- Your database schema goes here --

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS categories;
CREATE TABLE categories (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "filters" json,
  "parent_id" int4
);

-- ----------------------------
-- Table structure for listing_categories
-- ----------------------------
DROP TABLE IF EXISTS listing_categories;
CREATE TABLE listing_categories (
  "categoryId" int4 NOT NULL,
  "listingId" int4 NOT NULL
);

-- ----------------------------
-- Table structure for listings
-- ----------------------------
DROP TABLE IF EXISTS listings;
CREATE TABLE listings (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
),
  "created_by" int4,
  "create_date" date,
  "text" varchar(255) COLLATE "pg_catalog"."default",
  "image_link" varchar(255) COLLATE "pg_catalog"."default"
);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "password" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
);

-- ----------------------------
-- Primary Key structure for table categories
-- ----------------------------
ALTER TABLE categories ADD CONSTRAINT "categories_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table listing_categories
-- ----------------------------
ALTER TABLE listing_categories ADD CONSTRAINT "listing_categories_pkey" PRIMARY KEY ("categoryId", "listingId");

-- ----------------------------
-- Primary Key structure for table listings
-- ----------------------------
ALTER TABLE listings ADD CONSTRAINT "listings_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE users ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table listing_categories
-- ----------------------------
ALTER TABLE listing_categories ADD CONSTRAINT "category" FOREIGN KEY ("categoryId") REFERENCES categories ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE listing_categories ADD CONSTRAINT "listing" FOREIGN KEY ("listingId") REFERENCES listings ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table listings
-- ----------------------------
ALTER TABLE listings ADD CONSTRAINT "create" FOREIGN KEY ("created_by") REFERENCES users ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

