CREATE TABLE Projects(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL
);

CREATE TABLE Tasks(
    id VARCHAR(255) PRIMARY KEY,
    description TEXT NOT NULL,
    deadline DATE NOT NULL,
    status VARCHAR(255) NOT NULL,
    id_projects VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_projects) REFERENCES Projects(id) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
