
# Url Shortner


- URL-Shortner enables you to shorten long-url from important locations on Instagram, Facebook, YouTube, Twitter, Linked In, and the Internet. 
- Just paste the long URL and click the shorten URL button. On the next screen, copy the shortened URL and submit it to the website. 
- The shortened URL can be used for distribution, registration, notification, website, discussion, text and various fields.

## Tech Stack

**Client:** [Flutter](https://github.com/Dev-Adnani/Url-Shortner-App)

**Server:** Node, Express , TypeScript

**Database:** MongoDB



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URL`



## Run Locally

Clone the project

```bash
  git clone https://github.com/Dev-Adnani/Url-Shortner-Backend

```

Go to the project directory

```bash
  cd Url-Shortner-Backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Demo

https://urlshortner.devadnani.com


## API Reference

#### Generate Short Url

```http
  POST /random
```

| Parameter     | Type     | Description                |
| :--------     | :------- | :------------------------- |
| `destination` | `string` | **Required**. Long Url     |

#### Generates a short url with custom name 

```http
  POST /custom
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------  |
| `destination` | `string` | **Required**. Long Url         |
| `customText` | `string` | **Required**. Short Code        |

```http
  GET /:shortId
```
Will Redirect Your To Url If It Exists



## Support / Feedback

If you have any feedback or need any Support, please reach out to us at devadnani26@gmail.com

