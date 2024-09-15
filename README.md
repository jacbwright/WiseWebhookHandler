# Jacob Wright - Wise Platform SE Assessment

Part 2 (for "super bonus points")

## Setup

1. Clone this repository to your local IDE

2. In your local IDE, install and configure [ngrok](https://ngrok.com) 

3. In a new terminal, create a secure public tunnel with ngrok on port 3000:
```sh
ngrok http 3000
```

4. Copy the URL populated by ngrok and append "/webhook" to the end (ex. `<URL>.ngrok-free.app/webhook`):
![wise1](https://github.com/user-attachments/assets/93cc5092-4bbb-43bf-ba31-4911fa50ff7a)

5. Log into [Wise](https://sandbox.transferwise.tech/home) and navigate to Settings -> Developer Tools -> Webhooks -> Create New Webhook:

6. Input a `Name` of your choosing and paste the URL from step 4 in `URL`, then select "Create Webhook":
![Wise2](https://github.com/user-attachments/assets/2316bbb4-35eb-4a67-9bed-0133b2a5b85f)


7. In a new terminal, start your node.js server with:
```sh
node webhookHandler.js
```

**From there, you are ready to receive transfer state change events!**

## Examples

Events from a transfer that was successfully funded via balance:
![Capture11](https://github.com/user-attachments/assets/17fd339f-cc6b-4b9c-96be-b666089c3b60)


## Additional Notes

Per the [documentation](https://docs.wise.com/api-docs/features/webhooks-notifications/event-handling), clients are expected to implement signature verification to ensure any request was sent by Wise and has not been forged or tampered with. This logic was removed from my code due to intermittent issues I did not have time to resolve. For the sake of a simple happy-path demonstration, this process is not currently implemented but can easily be added in the future. 
