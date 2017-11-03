FROM node:8

COPY app/ /opt/auth0-adldap/

RUN cd /opt/auth0-adldap && \
    npm install

WORKDIR /opt/auth0-adldap

CMD ["node", "server.js"]

