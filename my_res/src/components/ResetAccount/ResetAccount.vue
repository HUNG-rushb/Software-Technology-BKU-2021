<template>
  <!--
Author: Colorlib
Author URL: https://colorlib.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
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

        <div class="main-agileinfo">
          <div class="agileits-top">
            <form action="#" method="post">
              <p class="instruction">
                Chúng tôi sẽ gửi một email xác nhận đến email bạn nhập bên dưới
              </p>
              <input
                class="text email"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <div class="wthree-text">
                <div class="clear"></div>
              </div>
              <input type="submit" value="Xác nhận" />
            </form>
            <p class="back-to-home"><a href="/home"> Về trang chủ</a></p>
          </div>
        </div>
      </div>
      <!-- //main -->
    </body>
  </html>
</template>

<script>
export default {
  name: "ResetAccount",
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

input[type="email"] {
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

input.text.email {
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

.instruction {
  font-size: 1em;
  color: #000;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 300;
}

.back-to-home {
  font-size: 1em;
  color: #000;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 300;
}

.back-to-home a {
  color: #a52a2a;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  transition: 0.5s all;
  font-weight: 400;
}

.back-to-home a:hover {
  color: #8b0000;
}

/*-- //main --*/
/*-- responsive-design --*/
@media (max-width: 1440px) {
  input[type="email"] {
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

  input[type="email"] {
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

  input[type="email"] {
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

  input[type="email"] {
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
