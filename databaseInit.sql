CREATE TABLE public."Points"
(
    id bigint NOT NULL,
    x double precision NOT NULL,
    y double precision NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE public."Points"
    OWNER to postgres;