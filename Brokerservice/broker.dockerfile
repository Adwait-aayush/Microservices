FROM golang:1.18-alpine as builder

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN CGO_ENABLED=0 go build -o brokerapp ./api

FROM alpine:latest 

RUN mkdir /app

COPY --from=builder /app/brokerapp /app

CMD [ "/app/brokerapp" ]