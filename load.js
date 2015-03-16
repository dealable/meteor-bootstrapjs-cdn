var head = document.getElementsByTagName('head')[0];
var style = document.createElement('link');
var theme = document.createElement('link');
var script = document.createElement('script');

style.type = "text/css";
style.rel = "stylesheet";
style.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css";

theme.type = "text/css";
theme.rel = "stylesheet";
theme.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css";

script.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js";

head.appendChild(style);
head.appendChild(theme);
head.appendChild(script);
