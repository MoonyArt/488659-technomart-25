var feedbackLink = document.querySelector(".feedback-btn");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var feedbackName = feedbackPopup.querySelector("[name=username]");
var feedbackUserMail = feedbackPopup.querySelector("[name=user-mail]");
var feedbackMail = feedbackPopup.querySelector("[name=mail]");


var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("feedbackName");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    if (storage) {
      feedbackName.value = storage;
      feedbackUserMail.focus();
    } else {
      feedbackName.focus();
    }
  });

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
  });

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackUserMail.value || !feedbackMail.value) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-error");
      feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
      feedbackPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("feedbackName", feedbackName.value);
      }
    }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (feedbackPopup.classList.contains("modal-show")) {
        feedbackPopup.classList.remove("modal-show");
        feedbackPopup.classList.remove("modal-error");
      }
    }
  });

var mapLink = document.querySelector(".map-link img");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      }
    }
  });

var buyLink = document.querySelector(".button-buy");
var buyPopup = document.querySelector(".modal-buy");
var buyClose = buyPopup.querySelector(".modal-close");

buyLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show");
  });

  buyClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (buyPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        buyPopup.classList.remove("modal-show");
      }
    }
  });
