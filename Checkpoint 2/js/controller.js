const controller = {};
controller.register = (data) => {
    console.log("Đã vào controller");
  if (data.firstName === "") {
    document.getElementById("first-name-error"),
      (innerText = `Please input First Name`);
  } else {
    document.getElementById("first-name-error"), (innerText = ``);
  }
  if (data.lastName === "") {
    document.getElementById("last-name-error"),
      (innerText = `Please input Last Name`);
  } else {
    document.getElementById("last-name-error"), (innerText = ``);
  }
  if (data.email === "") {
    document.getElementById("email-error"), (innerText = `Please input Email`);
  } else {
    document.getElementById("email-error"), (innerText = ``);
  }
  if (data.firstname === "") {
    document.getElementById("password-error"),
      (innerText = `Please input password`);
  } else {
    document.getElementById("password-error"), (innerText = ``);
  }
  if (data.confirmPassword === "") {
    document.getElementById("confirm-password-error"),
      (innerText = `Please input Password Confirm`);
  } else {
    document.getElementById("confirm-password-error"), (innerText = ``);
  }
  data.password !== data.confirmPassword
    ? (document.getElementById(
        "confirm-password-error"
      ).innerText = `Confirm password is error`)
    : (document.getElementById("confirm-password-error").innerText = ``);

  if (
    data.firstName !== "" &&
    data.lastName !== "" &&
    data.email !== "" &&
    data.password !== "" &&
    data.confirmPassword !== ""
  ) {
    model.register(data);
  }
}

controller.login = (dataLogin) => {
  if (dataLogin.email === "") {
    document.getElementById("email-error").innerText = "+Please input email";
  } else {
    document.getElementById("email-error").innerText = "";
  }
  if (dataLogin.password === "") {
    document.getElementById("password-error").innerText =
      "+Please input password";
  } else {
    document.getElementById("password-error").innerText = "";
  }
  if (dataLogin.email !== "" && dataLogin.password !== "") {
    model.login(dataLogin);
  }
};
