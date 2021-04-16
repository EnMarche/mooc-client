FROM node:14.16.1

RUN mkdir /code
WORKDIR /code

EXPOSE 3000

COPY package.json ./
COPY package-lock.json ./
RUN npm install --production

COPY . ./

# if we're hosting the ember assets on a static server,
# the node process will download and unzip them,
# so the image requires the unzip command
RUN apt-get update && apt-get install -y unzip

CMD node fastboot
