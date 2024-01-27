Source code for video tutorial: [Tutorial: Stripe Webhook Localhost Dev Environment Setup with NextJS V14 (APP ROUTER) + TypeScript](https://youtu.be/gpPiafE2F38)

## Getting Started

### Set up Ultrahook account

1. Register Ultrahook account and get your API key (https://www.ultrahook.com/).
2. Follow their setup guide and ensure that you can run the command:
```bash
ultrahook stripe 3000
```

FOR WINDOWS USERS: You need to use Ubuntu on Windows or WSL2 to run Ultrahook. You can install this very easily by just searching `Ubuntu` in the Microsoft Store and installing it. Once installed, you can simply run the "Ubuntu" and it should open up a terminal.

Once you have installed Ubuntu on Windows, you can install `Ruby` (to use the `gem` command) by running the following:
```bash
sudo apt-get update && sudo apt-get install ruby-dev
```

Then, you can install `ultrahook` by running the following:
```bash
sudo gem install ultrahook
```
And you should be good to go!

### Set up Stripe webhook

1. Log into your Stripe Dasbhoard [here](https://stripe.com/) and enable Test mode.
2. Go to the `Developers` section --> `API Keys` and add your secret Stripe API key to the `.env` file.
3. Go to the `Developers` section --> `Webhooks` and add a new endpoint using the URL that Ultrahook printed in the terminal earlier when you ran `ultrahook stripe 3000` (e.g. `https://XXXXXX-stripe.ultrahook.com`) and select the `checkout.session.completed` event for testing (and any other events you want to handle).
4. Once you have created your webhook, you will see a `Signing secret`. Click reveal to see the webhook secret, and add this to the `.env` file.

### Install NPM dependencies

```bash
npm install
```

### Run Ultrahook to forward Stripe webhooks to localhost
#### For Windows Users
First, run the following command in Command Prompt and copy your local IPv4 address:
```bash
ipconfig
```
Your IPv4 address should look something like this: `192.168.X.X`.

Then, start the Ultrahook listener with the following command:
```bash
ultrahook stripe http://192.168.X.X:3000/api/v1/stripe
```

#### For Mac/Linux Users
Run the following command to start the Ultrahook listener:
```bash
ultrahook stripe http://localhost:3000/api/v1/stripe
```

### Run development server 
```bash
npm run dev
```

## Deploy on Vercel
The easiest way to deploy this project is to use the [Vercel Platform](https://vercel.com/docs/deployments/overview) from the creators of Next.js.

## What's next?
Share the video and subscribe to the channel if you want to see more videos like this. I will be posting more videos on Next.js, React, TypeScript, and other web technologies, so stay tuned!

## Check out my other videos on [YouTube](https://www.youtube.com/channel/UCm4jwz-lWqNJ_5eG-37cuwQ)