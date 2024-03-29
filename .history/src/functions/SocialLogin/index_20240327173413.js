window.fbAsyncInit = function () {
  FB.init({
    appId: "442117295009686",
    cookie: true,
    xfbml: true,
    version: "v19.0",
  });

  FB.AppEvents.logPageView();
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  if (response.status === "connected") {
    console.log("Logged in and authenticated");
    setElements(true);
    testAPI();
  } else {
    console.log("Not authenticated");
    setElements(false);
  }
}

export { checkLoginState, statusChangeCallback };
