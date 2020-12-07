document.addEventListener("DOMContentLoaded", () => {
  let inputPassword = document.getElementById("password"),
    confirmPassword = document.getElementById("confirm-password"),
    confirmationIndicatorClass = document.getElementById(
      "confirmation-indicator"
    ).classList,
    thisValue,
    resetPasswordButton = document.getElementById("reset-password-button");
  const values = [
    ["text-green-600", "text-red-600"],
    ["fas", "far"]
  ];
  const setThisValue = (ifTrue, ifFalse) => {
    let value =
      inputPassword.value === confirmPassword.value ? ifTrue : ifFalse;
    return value;
  };
  confirmPassword.addEventListener("keyup", () => {
    if (inputPassword.value !== "") {
      confirmationIndicatorClass.remove("hidden");
      for (let index = 0; index < 2; index++) {
        thisValue = setThisValue(values[index][0], values[index][1]);
        confirmationIndicatorClass.add(thisValue);
        thisValue = setThisValue(values[index][1], values[index][0]);
        confirmationIndicatorClass.remove(thisValue);
        resetPasswordButton.disabled = setThisValue(false, true);
      }
    } else {
      confirmationIndicatorClass.add("hidden");
    }
  });
});
