$(document).ready(function(){$("#registration_form").submit(function(e){e.preventDefault();var t=$("#email").val(),a=$("#password").val(),r=$("#passwordcheck").val(),l=$("#checkagreement").prop("checked"),n=/[^\s@]+@[^\s@]+\.[^\s@]+/.test(t);t.length<5||!n?alert("Ошибка ввода Email."):a.length<6||""==a||""==r?alert("Ошибка ввода пароля"):a==r?l?alert("Регистрация успешна"):alert("Вы должны принять пользовательское соглашение"):alert("Пароли должны совпадать")})});