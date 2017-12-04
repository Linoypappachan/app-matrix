CREATE TABLE hosts(ipaddr text primary key, hostname text, os name);
CREATE TABLE containers(name text primary key, desc text);
CREATE TABLE databases(name text primary key, user text, password text, type text, schema text, ipaddr text, port int, hostname text, desc text);
CREATE TABLE components(name text primary key, layer text, healthurl text, container text, port int, mode text, hosting text);