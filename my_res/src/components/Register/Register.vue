<template>
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <!-- Custom Theme files -->
      <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
      <!-- //Custom Theme files -->
      <!-- web font -->
      <link
        href="//fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700,700i"
        rel="stylesheet"
      />
      <!-- //web font -->
    </head>
    <body>
      <!-- main -->
      <div class="main-w3layouts wrapper">
        <router-link to="/home">
          <div class="brand_logo_container">
            <img
              src="../../assets/logo_final.png"
              class="brand_logo"
              alt="Logo"
            />
          </div>
        </router-link>

        <h1>Đăng ký</h1>
        <div class="main-agileinfo">
          <div class="agileits-top">
            <form action="#" method="post">
              <div class="row">
                <div class="col">
                  <input
                    class="text firstname"
                    type="text"
                    name="firstname"
                    placeholder="Họ"
                    required=""
                  />
                </div>
                <div class="col">
                  <input
                    class="text lastname"
                    type="text"
                    name="lastname"
                    placeholder="Tên"
                    required=""
                  />
                </div>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">Nam</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">Nữ</label>
              </div>

              <input
                class="text email"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                class="tel phone-number"
                type="tel"
                name="phone-number"
                placeholder="Số điện thoại di động"
                required=""
              />
              <input
                class="text username"
                type="text"
                name="username"
                placeholder="Tên tài khoản"
                required=""
              />
              <input
                class="text password"
                type="password"
                name="password"
                placeholder="Mật khẩu"
                required=""
              />
              <input
                class="text confirmpassword"
                type="password"
                name="password"
                placeholder="Nhập lại mật khẩu"
                required=""
              />
              <div class="wthree-text">
                <label class="anim">
                  <input type="checkbox" class="checkbox" required="" />
                  <span>Tôi đồng ý với điều khoản sử dụng của nhà hàng</span>
                </label>
                <div class="clear"></div>
              </div>
              <input type="submit" value="Đăng ký" />
            </form>

            <p class="had-account">
              Đã có tài khoản?
              <router-link to="/login"> Đăng nhập ngay!</router-link>
            </p>
            <p class="back-to-home">
              <router-link to="/home"> Về trang chủ</router-link>
            </p>
          </div>
        </div>
      </div>
      <!-- //main -->
    </body>
  </html>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style scoped>
/*-- reset --*/
div,
span,
applet,
object,
iframe,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
dl,
dt,
dd,
ol,
nav ul,
nav li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/*-- start editing from here --*/

a {
  text-decoration: none;
}

.txt-rt {
  text-align: right;
}

/* text align right */
.txt-lt {
  text-align: left;
}

/* text align left */
.txt-center {
  text-align: center;
}

/* text align center */
.float-rt {
  float: right;
}

/* float right */
.float-lt {
  float: left;
}

/* float left */
.clear {
  clear: both;
}

/* clear float */
.pos-relative {
  position: relative;
}

/* Position Relative */
.pos-absolute {
  position: absolute;
}

/* Position Absolute */
.vertical-base {
  vertical-align: baseline;
}

/* vertical align baseline */
.vertical-top {
  vertical-align: top;
}

/* vertical align top */
nav.vertical ul li {
  display: block;
}

/* vertical menu */
nav.horizontal ul li {
  display: inline-block;
}

/* horizontal menu */
img {
  max-width: 100%;
}

/*-- end reset --*/
span {
  color: #000;
  margin-left: 0.5em;
}

body {
  background-image: url("../../assets/background2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  font-family: "Roboto", sans-serif;
}

.brand_logo_container {
  height: 170px;
  width: 170px;
  top: -75px;
  border-radius: 50%;
  background: #ffffff;
  padding: 10px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.brand_logo {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 2px solid white;
}

h1 {
  font-size: 3em;
  text-align: center;
  color: #fff;
  font-weight: 100;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-family: "Roboto", sans-serif;
}

/*-- main --*/
.main-w3layouts {
  padding: 3em 0 1em;
}

.main-agileinfo {
  width: 35%;
  margin: 3em auto;
  background: #faf0e6;
  background-size: cover;
}

.agileits-top {
  padding: 3em;
}

.form-check {
  margin-left: 1.5em;
  margin-top: 0.5em;
}

.form-check-label {
  margin-right: 1.5em;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"] {
  font-size: 0.9em;
  /* color: #fff; */
  font-weight: 100;
  width: 94.5%;
  display: block;
  border: none;
  padding: 0.8em;
  /* border: solid 1px rgba(255, 255, 255, 0.37); */
  -webkit-transition: all 0.1s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background: -webkit-linear-gradient(top, #fff 96%, #a52a2a);
  background: linear-gradient(to bottom, #fff 96%, #a52a2a);
  background-position: -800px 0;
  background-size: 100%;
  background-repeat: no-repeat;
  color: #000;
  font-family: "Roboto", sans-serif;
}

.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}

.form-check-input[type="radio"] {
  border-radius: 50%;
}

.form-check-input:checked {
  color: #fff;
  border-color: #a52a2a;
  background-color: #a52a2a;
}

.form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}

input.text.firstname,
input.text.lastname,
input.text.password,
input.tel.phone-number {
  background-color: #fff;
}

input.text.username,
input.text.email,
input.text.confirmpassword {
  margin: 2em 0;
  background-color: #fff;
}

.text:focus,
.text:valid,
.tel:focus,
.tel:valid {
  box-shadow: none;
  outline: none;
  background-position: 0 0;
}

::-webkit-input-placeholder {
  color: #a9a9a9;
  font-weight: 100;
}

input[type="submit"] {
  font-size: 0.9em;
  color: #fff;
  background: #a52a2a;
  outline: none;
  border: 1px solid #a52a2a;
  cursor: pointer;
  padding: 0.9em;
  -webkit-appearance: none;
  width: 100%;
  margin: 2em 0;
  letter-spacing: 2px;
}

input[type="submit"]:hover {
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  transition: 0.5s all;
  background: #8b0000;
}

.had-account {
  font-size: 1em;
  color: #000;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 300;
  margin-bottom: 0.5em;
}

.back-to-home {
  font-size: 1em;
  color: #000;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 300;
}

.had-account a,
.back-to-home a {
  color: #a52a2a;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  transition: 0.5s all;
  font-weight: 400;
}

.had-account a:hover,
.back-to-home a:hover {
  color: #8b0000;
}

/*-- //main --*/
/*-- checkbox --*/
.wthree-text label {
  font-size: 0.9em;
  color: #fff;
  font-weight: 200;
  cursor: pointer;
  position: relative;
}

input.checkbox {
  background: #fff;
  cursor: pointer;
  width: 1.2em;
  height: 1.2em;
}

input.checkbox:before {
  content: "";
  position: absolute;
  width: 1.2em;
  height: 1.2em;
  background: inherit;
  cursor: pointer;
}

input.checkbox:after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 1;
  width: 1.2em;
  height: 1.2em;
  border: 1px solid #000;
  -webkit-transition: 0.4s ease-in-out;
  -moz-transition: 0.4s ease-in-out;
  -o-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}

input.checkbox:checked:after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  height: 0.5rem;
  border-color: #000;
  border-top-color: transparent;
  border-right-color: transparent;
}

.anim input.checkbox:checked:after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  height: 0.5rem;
  border-color: transparent;
  border-right-color: transparent;
  animation: 0.4s rippling 0.4s ease;
  animation-fill-mode: forwards;
}

@keyframes rippling {
  50% {
    border-left-color: #000;
  }

  100% {
    border-bottom-color: #000;
    border-left-color: #000;
  }
}
/*-- //checkbox --*/

/*-- responsive-design --*/
@media (max-width: 1440px) {
  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="tel"] {
    width: 94%;
  }
}

@media (max-width: 1366px) {
  h1 {
    font-size: 2.6em;
  }

  .agileits-top {
    padding: 2.5em;
  }

  .main-agileinfo {
    margin: 2em auto;
  }

  .main-agileinfo {
    width: 36%;
  }
}

@media (max-width: 1280px) {
  .main-agileinfo {
    width: 40%;
  }
}

@media (max-width: 1080px) {
  .main-agileinfo {
    width: 46%;
  }
}

@media (max-width: 1024px) {
  .main-agileinfo {
    width: 49%;
  }
}

@media (max-width: 991px) {
  h1 {
    font-size: 2.4em;
  }

  .main-w3layouts {
    padding: 2em 0 1em;
  }
}

@media (max-width: 900px) {
  .main-agileinfo {
    width: 58%;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="tel"] {
    width: 93%;
  }
}

@media (max-width: 800px) {
  h1 {
    font-size: 2.2em;
  }
}

@media (max-width: 736px) {
  .main-agileinfo {
    width: 62%;
  }
}

@media (max-width: 667px) {
  .main-agileinfo {
    width: 67%;
  }
}

@media (max-width: 600px) {
  .agileits-top {
    padding: 2.2em;
  }

  input.email,
  input.text.w3lpass {
    margin: 1.5em 0;
  }

  input[type="submit"] {
    margin: 2em 0;
  }

  h1 {
    font-size: 2em;
    letter-spacing: 3px;
  }
}

@media (max-width: 568px) {
  .main-agileinfo {
    width: 75%;
  }

  .colorlibcopy-agile p {
    padding: 0 2em;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.8em;
    letter-spacing: 3px;
  }

  .agileits-top {
    padding: 1.8em;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="tel"] {
    width: 91%;
  }

  .agileits-top p {
    font-size: 0.9em;
  }
}

@media (max-width: 414px) {
  h1 {
    font-size: 1.8em;
    letter-spacing: 2px;
  }

  .main-agileinfo {
    width: 85%;
    margin: 1.5em auto;
  }

  .text:focus,
  .text:valid {
    background-position: 0 0px;
  }

  .wthree-text ul li,
  .wthree-text ul li:nth-child(2) {
    display: block;
    float: none;
  }

  .wthree-text ul li:nth-child(2) {
    margin-top: 1.5em;
  }

  input[type="submit"] {
    margin: 2em 0 1.5em;
    letter-spacing: 3px;
  }

  input[type="submit"] {
    margin: 2em 0 1.5em;
  }

  .colorlibcopy-agile {
    margin: 1em 0 1em;
  }
}

@media (max-width: 384px) {
  .main-agileinfo {
    width: 88%;
  }

  .colorlibcopy-agile p {
    padding: 0 1em;
  }
}

@media (max-width: 375px) {
  .agileits-top p {
    letter-spacing: 0px;
  }
}

@media (max-width: 320px) {
  .main-w3layouts {
    padding: 1.5em 0 0;
  }

  .agileits-top {
    padding: 1.2em;
  }

  .colorlibcopy-agile {
    margin: 0 0 1em;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="tel"] {
    width: 89.5%;
    font-size: 0.85em;
  }

  h1 {
    font-size: 1.7em;
    letter-spacing: 0px;
  }

  .main-agileinfo {
    width: 92%;
    margin: 1em auto;
  }

  .text:focus,
  .text:valid {
    background-position: 0 0px;
  }

  input[type="submit"] {
    margin: 1.5em 0;
    padding: 0.8em;
    font-size: 0.85em;
  }

  .colorlibcopy-agile p {
    font-size: 0.85em;
  }

  .wthree-text label {
    font-size: 0.85em;
  }

  .main-w3layouts {
    padding: 1em 0 0;
  }
}
</style>
