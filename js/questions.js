
let $questions = [{
        "question" : "In the three-level schema architecture, this level only describes the part of a database that are particular group of users will need to access",
        "a": "External",
        "b": "Internal",
        "c": "Conceptual",
        "d": "Application",
        "answer": "a"
}, 
{
        "question" : "In the three-level schema architecture, this level describes the physical storage structure of the database",
        "a": "External",
        "b": "Internal",
        "c": "Conceptual",
        "d": "Application",
        "answer": "b"
},  
{
        "question" : "In the three-level schema architecture, this level hides the details of the physical implementation and concentrates on describing the entities, data-types, relationships and operations",
        "a": "External",
        "b": "Internal",
        "c": "Conceptual",
        "d": "Application",
        "answer": "c"
},  
{
        "question" : "This type of model is a popular high-level conceptual data-model designed to represent real-world data-objects and the links between them.",
        "a": "Agent-Based Model",
        "b": "Network Model",
        "c": "Entity-Relationship Model",
        "d": "Object Data Model",
        "answer": "c"
},  
{
        "question" : "Which type of DBMS interface accepts data requests (e.g. queries) in a written human languages, such as english, and attempts to understand and execute them?",
        "a": "Natural Language Interface",
        "b": "Speech Input/Output Interface",
        "c": "Form-Based Interface",
        "d": "Graphical User Interface",
        "answer": "a"
},  
{
        "question" : "In a three-tier architecture web-application, business rules are usually stored in which tier/layer? ",
        "a": "Database Server",
        "b": "Client",
        "c": "Application Programming Interface",
        "d": "Application Server",
        "answer": "d"
},  
{
        "question" : 'Is the following SQL statement syntactically correct for execution in PostgreSQL 9.4? (HINT: Feel free to test it)\nCREATE contacts_table(\n\tc_id SERIAL PRIMARY KEY,\n\tfname varchar(15),\n\tlname varchar(15)\n);',
        "a": "True ",
        "b": "False",
        "c": "Both",
        "d": "None",
        "answer": "b"
},  
{
        "question" : 'A table named "app_users" has been created in a postgreSQL using the following SQL statement:\nCREATE TABLE app_users(\n\tuser_id INTEGER PRIMARY KEY,\n\temail VARCHAR (50),\n\tacct_status INTEGER\n);\n\nWhich of the following insert statements will successfully create a row of data in the table? (there is currently no data in the table)',
        "a": "INSERT INTO app_users(email, acct_status) VALUES(mail@mailinator.com,12);",
        "b": "INSERT INTO app_users VALUES(acc156b, mail@mailinator.com,6);",
        "c": "SELECT TO app_users VALUES(5, mail@mailinator.com,6);",
        "d": "INSERT INTO app_users VALUES(1, 'mail@mailinator.com',6);",
        "answer": "d"
},  
{
        "question" : "What type of constraint is specified between two relations and is used to maintain the consistency among the records?",
        "a": "Referential Integrity Constraint",
        "b": "Primary Key Constraint",
        "c": "Entity Integrity Constraint",
        "d": "None",
        "answer": "a"
},  
{
        "question" : "What type of database constraint prevents primary key values from containing NULL values?",
        "a": "Referential Integrity Constraint",
        "b": "Primary Key Constraint",
        "c": "Entity Integrity Constraint",
        "d": "None",
        "answer": "c"
},  
{
        "question" : "What are the constraints that are inherent in the data model.",
        "a": "Implicit constraints",
        "b": "Business Rules",
        "c": "Schema-based constraints",
        "d": "None",
        "answer": "a"
},  
{
        "question" : "What are the constraints that cannot be directly expressed in the schema and must be enforced by the application.",
        "a": "Implicit constraints",
        "b": "Business Rules",
        "c": "Schema-based constraints",
        "d": "None",
        "answer": "b"
},  
{
        "question" : "What are the constraints that are specified using a DDL.",
        "a": "Implicit constraints",
        "b": "Business Rules",
        "c": "Schema-based constraints",
        "d": "None",
        "answer": "c"
},  
{
        "question" : "What type of key do we use to specify Referential Integrity Constraints within a relational schema?",
        "a": "Super Key",
        "b": "Primary  Key",
        "c": "Foreign Key",
        "d": "Candidate Key",
        "answer": "c"
},  
{
        "question" : "In a relational schema, relation A references relation B. The schema definition has specified that any changes to the referenced attributes in B should CASCADE to relation A. What does this mean? ",
        "a": "Any changes to referenced tuples in relation B will be reflected in relation A through a series of updates.",
        "b": "Any changes to referenced attributes within tuples in relation B will result in referencing attributes within tuples in A being set to NULL.",
        "c": "Any changes to referenced attributes within tuples in relation B will result in referencing attributes within tuples in A being left unchanged.",
        "d": "Any changes to referenced tuples in relation B will be rejected and the data will remain unchanged.",
        "answer": "a"
},  
{
        "question" : "What does underlining an attribute within an entity-relationship diagram indicate?",
        "a": "The attribute is multi-valued.",
        "b": "The attributes is a derived attribute.",
        "c": "The attribute is a composite attribute.",
        "d": "The attribute is a key attribute for the relation.",
        "answer": "d"
},  
{
        "question" : "What does the double-diamond symbol in an entity relationship diagram represent?",
        "a": "An identifying relationship that links a weak entity to another entity.",
        "b": "A relationship that contains multi-valued attributes.",
        "c": "A normal relationship that links at most two entities.",
        "d": "An M-to-N relationship between more than two entities.",
        "answer": "a"
},  
{
        "question" : "A weak entity always has total participation in its identifying relationship?",
        "a": "True",
        "b": "False",
        "c": "Both",
        "d": "None",
        "answer": "a"
},  
{
        "question" : "FOREIGN KEY (my_attribute) REFERENCES other_relation(other_relations_Attribute)",
        "a": "Creates a foreign key constraint between two relations",
        "b": "Retrieves records from a specified relation",
        "c": "Creates a new record within a specified relation",
        "d": "None of the above",
        "answer": "a"
},  
{
        "question" : "SELECT <attribute_list> FROM <table_list> WHERE <condition>",
        "a": "Creates a foreign key constraint between two relations",
        "b": "Retrieves records from a specified relation",
        "c": "Creates a new record within a specified relation",
        "d": "None of the above",
        "answer": "b"
},  
{
        "question" : "INSERT INTO my_table(attribute_1, attribute_2 ... attribute_n) VALUES (val_1,val_2 ... val_n);",
        "a": "Creates a foreign key constraint between two relations",
        "b": "Retrieves records from a specified relation",
        "c": "Creates a new record within a specified relation",
        "d": "None of the above",
        "answer": "c"
},  
{
        "question" : "How are attributes inherited by subclasses (from superclasses) in an EER model?",
        "a": "Subclass objects inherit all the attributes from only one of their superclasses in addition to the attribute set unique to the subclass type.",
        "b": "Subclass objects inherit only the key attributes of their superclasses in addition to the attribute set unique to the subclass type.",
        "c": "Subclass objects inherit all the attributes of their superclasses in addition to the attribute set unique to the subclass type.",
        "d": "Subclass objects don't inherit attributes from any of their superclasses.",
        "answer": "c"
},  
{
        "question" : "What is the result of the following three-valued logic expression: NOT(UNKNOWN AND TRUE)",
        "a": "TRUE",
        "b": "FALSE",
        "c": "UNKNOWN",
        "d": "None of the above",
        "answer": "c"
},  
{
        "question" : "SELECT ssn FROM EMPLOYEE WHERE salary > ALL (SELECT salary FROM employee\ WHERE dno = 3)",
        "a": "The query will return the salaries of all employees in department 3.",
        "b": "The query will return the employee ssn for the employee with the largest salary in department 3.",
        "c": "The query will return all employee ssn's for employees with a salary less than all employees in department 3.",
        "d": "The query will return employee ssn's for employees with a salary greater than all employees in department 3.",
        "answer": "d"
},  
{
        "question" : 'What will the following SQL query return?\nSELECT fname\nFROM employee\nWHERE fname LIKE "S%";',
        "a": "The query will return the first name of all employee records with a first name that contains the character 'S'.",
        "b": "The query will return the first name of all employee records with a first name ending with 'S'",
        "c": "The query will return the first name of all employee records with a first name starting with 'S'",
        "d": "The query will return the first name of all employee records.",
        "answer": "c"
},  
{
        "question" : "SELECT SUM(salary), MAX(salary), MIN(salary) FROM employee;",
        "a": "This query will return the sum of all salaries along with the lowest and highest salary across all employees.",
        "b": "This query will return the sum of all fields for employee with the highest salary.",
        "c": "This query will return the sum of the lowest and highest salary across all employees.",
        "d": "This query will return the sum of all fields for the employee with the lowest salary.",
        "answer": "a"
},  
{
        "question" : "What is a View in a database?",
        "a": "A view is a query that returns all records from a single database table.",
        "b": "A View is a virtual table derived from the base relations present within a database",
        "c": "A view is a base relation in a database.",
        "d": "A view is a query that allows the records returned to be updated by the user.",
        "answer": "b"
},  
{
        "question" : "What does the Selection operation do in relational algebra?",
        "a": "The select operation allows both a relation and its attributes returned to be renamed for further use in a relational algebra expression",
        "b": "The select operation is used to restrict the columns/attributes returned.",
        "c": "The select operation is used to return a subset of tuples from a relation that satisfy a selection condition.",
        "d": "The select operation produces a new element by combining every tuple from one relation with every tuple from a second relation.",
        "answer": "c"
},  
{
        "question" : "What relational algebra operation can be used to combine related tuples from two relations into a single long tuple according to a specified condition?",
        "a": "The Minus operation.",
        "b": "The Division operation.",
        "c": "The Union operation.",
        "d": "The Join operation.",
        "answer": "d"
},  
{
        "question" : "Which property should a relational schema  possess to guarantee that spurious tuples do not occur?",
        "a": "1st Normal form",
        "b": "The functional dependency property.",
        "c": "The lossless join property.",
        "d": "The dependency preservation property.",
        "answer": "c"
},  
{
        "question" : "Which normal form is based upon the concept of removing transitive dependencies (in the primary key) from the relational schema.",
        "a": "Second Normal From",
        "b": "First Normal Form",
        "c": "Boyce-codd Normal Form",
        "d": "Third Normal Form",
        "answer": "d"
},  
{
        "question" : "You are working with a relational schema that contains a table with a multi-attribute primary key. You have identified that one of the non-key attributes is dependent on only a single attribute from the primary key. What is the highest normal form that this schema satisfies?",
        "a": "Second Normal From",
        "b": "First Normal Form",
        "c": "Boyce-codd Normal Form",
        "d": "Third Normal Form",
        "answer": "b"
},  
{
        "question" : "What is the closure of a set of functional dependencies?",
        "a": "The closure is the set of functional dependencies that include the primary keys.",
        "b": "The closure is the complete set of functional dependencies that can be inferred from a given set of functional dependencies",
        "c": "The closure is the minimal set of functional dependencies that are equivalent to a given set of functional dependencies.",
        "d": "The closure is the most important set of functional dependencies for a relational schema.",
        "answer": "b"
},  
{
        "question" : "What is the minimal cover of a set of functional dependencies?",
        "a": "The minimal cover is the smallest set of attributes in a relation that possess the uniqueness property.",
        "b": "The minimal cover is the largest set of functional dependencies that is equivalent to a given set of functional dependencies.",
        "c": "The minimal cover is the minimal set of functional dependencies that is equivalent to a given set of functional dependencies.",
        "d": "The minimal cover is the relation within a relational schema that is responsible for maintaining the smallest number of functional dependencies.",
        "answer": "c"
},  
{
        "question" : "You are working with a file organisation scheme that is based on a hash function. When a collision occurs during the insertion of a record, the system check subsequent positions in the file until an empty slot is found for the new record. This is an example of what type of collision resolution? ",
        "a": "Open Address",
        "b": "Multiple Hashing",
        "c": "Chaining",
        "d": "Next Address",
        "answer": "a"
},  
{
        "question" : "What is the default data structure used by PostgreSQL for creating indexes on tables?",
        "a": "Dynamic Hashing",
        "b": "B-Tree ",
        "c": "Chained Hashing",
        "d": "Extendible Hashing",
        "answer": "b"
},  
{
        "question" : "An attacker takes advantage of flaws in the database to upgrade the access level of their account. What type of attack is this?",
        "a": "Bypass Authentication",
        "b": "SQL Injection",
        "c": "Privilege Escalation",
        "d": "Denial of Service",
        "answer": "c"
},  
{
        "question" : "The linear search algorithm is the most efficient way to implement a SELECT operation on an un-ordered file of records with no indexing structures in place.",
        "a": "True",
        "b": "False",
        "c": "Both",
        "d": "None",
        "answer": "a"
},  
{
        "question" : "What algorithm can be used to implement a SELECT operation?",
        "a": "Sort-Merge",
        "b": "Nested Loop",
        "c": "Binary Search",
        "d": "Shortest Path",
        "answer": "c"
},  
{
        "question" : "What algorithm can be used to implement a PROJECTION operation?",
        "a": "Sort-Merge",
        "b": "Nested Loop",
        "c": "Binary Search",
        "d": "Shortest Path",
        "answer": "a"
},  
{
        "question" : "What algorithm can be used to implement a JOIN operation?",
        "a": "Sort-Merge",
        "b": "Nested Loop",
        "c": "Binary Search",
        "d": "Shortest Path",
        "answer": "b"
},  
{
        "question" : "You are working with a system that prevents deadlock by having younger transactions aborted when an item is required by older transaction. What type of scheme is this?",
        "a": "Wait-Die",
        "b": "Wound-Wait",
        "c": "Timestamp",
        "d": "Cautious Waiting",
        "answer": "b"
},  
{
        "question" : "What system of access control works by granting and revoking privileges to individual users?",
        "a": "Discretionary Access",
        "b": "Content-Based Access Control",
        "c": "Mandatory Access Control",
        "d": "Vertical Access Control",
        "answer": "a"
},
];
