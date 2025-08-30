-- Products
CREATE TABLE products (
    id_product INT AUTO_INCREMENT PRIMARY KEY,
    slug TEXT,
    name_product VARCHAR(255) NOT NULL,
    price_product DECIMAL(15,2) NOT NULL,
    description LONGTEXT,
    img_main VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Spec Title
CREATE TABLE spec_title (
    id_spec INT AUTO_INCREMENT PRIMARY KEY,
    id_product INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_product) REFERENCES products(id_product) ON DELETE CASCADE
);

-- Spec Name
CREATE TABLE spec_name (
    id_spec_name INT AUTO_INCREMENT PRIMARY KEY,
    id_spec INT NOT NULL,
    spec_value VARCHAR(255),
    spec_name VARCHAR(255),
    FOREIGN KEY (id_spec) REFERENCES spec_title(id_spec) ON DELETE CASCADE
);

-- Attributes
CREATE TABLE attributes (
    id_attributes INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type INT NOT NULL
);

-- Attributes Value
CREATE TABLE attributes_value (
    id_attributes_value INT AUTO_INCREMENT PRIMARY KEY,
    id_attribute INT NOT NULL,
    value VARCHAR(255) NOT NULL,
    value_note TEXT,
    FOREIGN KEY (id_attribute) REFERENCES attributes(id_attributes) ON DELETE CASCADE
);

-- Product Attribute (relation product <-> attribute)
CREATE TABLE product_attribute (
    id_product_attribute INT AUTO_INCREMENT PRIMARY KEY,
    id_product INT NOT NULL,
    id_attribute INT NOT NULL,
    FOREIGN KEY (id_product) REFERENCES products(id_product) ON DELETE CASCADE,
    FOREIGN KEY (id_attribute) REFERENCES attributes(id_attributes) ON DELETE CASCADE
);

-- Product Variant (SKU)
CREATE TABLE product_variant (
    id_product_variant INT AUTO_INCREMENT PRIMARY KEY,
    id_product INT NOT NULL,
    price DECIMAL(15,2) NOT NULL,
    price_sale DECIMAL(15,2),
    quantity INT NOT NULL,
    img VARCHAR(255),
    FOREIGN KEY (id_product) REFERENCES products(id_product) ON DELETE CASCADE
);

-- Variant Value (SKU <-> attribute_value)
CREATE TABLE variant_value (
    id_variant_value INT AUTO_INCREMENT PRIMARY KEY,
    id_product_variant INT NOT NULL,
    id_attribute_value INT NOT NULL,
    FOREIGN KEY (id_product_variant) REFERENCES product_variant(id_product_variant) ON DELETE CASCADE,
    FOREIGN KEY (id_attribute_value) REFERENCES attributes_value(id_attributes_value) ON DELETE CASCADE
);
-- Products
CREATE TABLE products (
    id_product INT AUTO_INCREMENT PRIMARY KEY,
    slug TEXT,
    name_product VARCHAR(255) NOT NULL,
    price_product DECIMAL(15,2) NOT NULL,
    description LONGTEXT,
    img_main VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Spec Title
CREATE TABLE spec_title (
    id_spec INT AUTO_INCREMENT PRIMARY KEY,
    id_product INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_product) REFERENCES products(id_product) ON DELETE CASCADE
);

-- Spec Name
CREATE TABLE spec_name (
    id_spec_name INT AUTO_INCREMENT PRIMARY KEY,
    id_spec INT NOT NULL,
    spec_value VARCHAR(255),
    spec_name VARCHAR(255),
    FOREIGN KEY (id_spec) REFERENCES spec_title(id_spec) ON DELETE CASCADE
);

-- Attributes
CREATE TABLE attributes (
    id_attributes INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type INT NOT NULL
);

-- Attributes Value
CREATE TABLE attributes_value (
    id_attributes_value INT AUTO_INCREMENT PRIMARY KEY,
    id_attribute INT NOT NULL,
    value VARCHAR(255) NOT NULL,
    value_note TEXT,
    FOREIGN KEY (id_attribute) REFERENCES attributes(id_attributes) ON DELETE CASCADE
);

-- Product Attribute (relation product <-> attribute)
CREATE TABLE product_attribute (
    id_product_attribute INT AUTO_INCREMENT PRIMARY KEY,
    id_product INT NOT NULL,
    id_attribute INT NOT NULL,
    FOREIGN KEY (id_product) REFERENCES products(id_product) ON DELETE CASCADE,
    FOREIGN KEY (id_attribute) REFERENCES attributes(id_attributes) ON DELETE CASCADE
);

-- Product Variant (SKU)
CREATE TABLE product_variant (
    id_product_variant INT AUTO_INCREMENT PRIMARY KEY,
    id_product INT NOT NULL,
    price DECIMAL(15,2) NOT NULL,
    price_sale DECIMAL(15,2),
    quantity INT NOT NULL,
    img VARCHAR(255),
    FOREIGN KEY (id_product) REFERENCES products(id_product) ON DELETE CASCADE
);

-- Variant Value (SKU <-> attribute_value)
CREATE TABLE variant_value (
    id_variant_value INT AUTO_INCREMENT PRIMARY KEY,
    id_product_variant INT NOT NULL,
    id_attribute_value INT NOT NULL,
    FOREIGN KEY (id_product_variant) REFERENCES product_variant(id_product_variant) ON DELETE CASCADE,
    FOREIGN KEY (id_attribute_value) REFERENCES attributes_value(id_attributes_value) ON DELETE CASCADE
);
-- Products
CREATE TABLE products (
    id_product INT AUTO_INCREMENT PRIMARY KEY,
    slug TEXT,
    name_product VARCHAR(255) NOT NULL,
    price_product DECIMAL(15,2) NOT NULL,
    description LONGTEXT,
    img_main VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Spec Title
CREATE TABLE spec_title (
    id_spec INT AUTO_INCREMENT PRIMARY KEY,
    id_product INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_product) REFERENCES products(id_product) ON DELETE CASCADE
);

-- Spec Name
CREATE TABLE spec_name (
    id_spec_name INT AUTO_INCREMENT PRIMARY KEY,
    id_spec INT NOT NULL,
    spec_value VARCHAR(255),
    spec_name VARCHAR(255),
    FOREIGN KEY (id_spec) REFERENCES spec_title(id_spec) ON DELETE CASCADE
);

-- Attributes
CREATE TABLE attributes (
    id_attributes INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type INT NOT NULL
);

-- Attributes Value
CREATE TABLE attributes_value (
    id_attributes_value INT AUTO_INCREMENT PRIMARY KEY,
    id_attribute INT NOT NULL,
    value VARCHAR(255) NOT NULL,
    value_note TEXT,
    FOREIGN KEY (id_attribute) REFERENCES attributes(id_attributes) ON DELETE CASCADE
);

-- Product Attribute (relation product <-> attribute)
CREATE TABLE product_attribute (
    id_product_attribute INT AUTO_INCREMENT PRIMARY KEY,
    id_product INT NOT NULL,
    id_attribute INT NOT NULL,
    FOREIGN KEY (id_product) REFERENCES products(id_product) ON DELETE CASCADE,
    FOREIGN KEY (id_attribute) REFERENCES attributes(id_attributes) ON DELETE CASCADE
);

-- Product Variant (SKU)
CREATE TABLE product_variant (
    id_product_variant INT AUTO_INCREMENT PRIMARY KEY,
    id_product INT NOT NULL,
    price DECIMAL(15,2) NOT NULL,
    price_sale DECIMAL(15,2),
    quantity INT NOT NULL,
    img VARCHAR(255),
    FOREIGN KEY (id_product) REFERENCES products(id_product) ON DELETE CASCADE
);

-- Variant Value (SKU <-> attribute_value)
CREATE TABLE variant_value (
    id_variant_value INT AUTO_INCREMENT PRIMARY KEY,
    id_product_variant INT NOT NULL,
    id_attribute_value INT NOT NULL,
    FOREIGN KEY (id_product_variant) REFERENCES product_variant(id_product_variant) ON DELETE CASCADE,
    FOREIGN KEY (id_attribute_value) REFERENCES attributes_value(id_attributes_value) ON DELETE CASCADE
);
