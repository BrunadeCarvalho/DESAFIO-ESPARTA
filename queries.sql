CREATE TABLE Projects(
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL
);

CREATE TABLE Tasks(
    id VARCHAR(255) PRIMARY KEY,
    description TEXT NOT NULL,
    deadline DATE NOT NULL,
    status VARCHAR(255) NOT NULL,
    id_projects VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_projects) REFERENCES Projects_Esparta(id)
);


