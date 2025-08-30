CREATE TABLE "Products" (
  "id_product" integer PRIMARY KEY,
  "name_product" varchar,
  "slug" text,
  "price_product" decimal,
  "description" longtext,
  "img_main" varchar,
  "status" int,
  "created_at" timestamp
);

CREATE TABLE "spec_title" (
  "id_spec" int,
  "id_product" int,
  "title" varchar
);

CREATE TABLE "spec_name" (
  "id_spec_name" int,
  "id_spec" int,
  "spec_value" varchar,
  "spec_name" varchar
);

CREATE TABLE "attributes" (
  "id_attributes" integer PRIMARY KEY,
  "name" varchar,
  "type" integer
);

CREATE TABLE "attributes_value" (
  "id_attributes_value" integer PRIMARY KEY,
  "id_attribute" int,
  "value" varchar,
  "value_note" text
);

CREATE TABLE "product_attribute" (
  "id_product_attribute" int PRIMARY KEY,
  "id_product" int,
  "id_attribute" int
);

CREATE TABLE "product_variant" (
  "id_product_variant" int PRIMARY KEY,
  "id_product" integer,
  "price" decimal,
  "price_sale" decimal,
  "quantity" int,
  "img" varchar
);

CREATE TABLE "variant_value" (
  "id_variant_value" int PRIMARY KEY,
  "id_product_variant" int,
  "id_attribute_value" int
);

ALTER TABLE "spec_title" ADD FOREIGN KEY ("id_product") REFERENCES "Products" ("id_product");

ALTER TABLE "spec_name" ADD FOREIGN KEY ("id_spec") REFERENCES "spec_title" ("id_spec");

ALTER TABLE "attributes_value" ADD FOREIGN KEY ("id_attribute") REFERENCES "attributes" ("id_attributes");

ALTER TABLE "product_attribute" ADD FOREIGN KEY ("id_product") REFERENCES "Products" ("id_product");

ALTER TABLE "product_attribute" ADD FOREIGN KEY ("id_attribute") REFERENCES "attributes" ("id_attributes");

ALTER TABLE "variant_value" ADD FOREIGN KEY ("id_product_variant") REFERENCES "product_variant" ("id_product_variant");

ALTER TABLE "variant_value" ADD FOREIGN KEY ("id_attribute_value") REFERENCES "attributes_value" ("id_attributes_value");
