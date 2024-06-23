function openChat() {
    // Example initialization code for Watsonx Studio Chatbot
    // Ensure you replace this with the actual code provided by Watsonx
    var script = document.createElement('script');
    script.src = 'URL_TO_WATSONX_CHATBOT_SCRIPT';
    script.onload = function () {
        // Initialization code for the chatbot
        WatsonAssistantChat.render({
            integrationID: "YOUR_INTEGRATION_ID",
            region: "YOUR_REGION", // e.g., "us-south"
            serviceInstanceID: "YOUR_SERVICE_INSTANCE_ID",
            onLoad: function (instance) { instance.render(); }
        });
    };
    document.head.appendChild(script);
}

// Set visibility of the second line to visible after 3 seconds
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector('.container p.delayed').style.visibility = 'visible';
    }, 3000);
});
