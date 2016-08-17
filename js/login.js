define(["jquery", "swal"], function($, swal) {
  $(".register-btn").on("click", function() {
    $(".content").addClass("register-show");

  });

  $("#email").on("blur", function() {
    var emailV = $("#email").val(),
      reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!reg.test(emailV)) {
      swal("请输入正确格式的邮箱!");
    }

  })

  $(".login-btn").on("click", function() {
    var passWordV = $("#passWord").val();
    if (passWordV == "123456") {
      location.href = "page1.html";
    } else {
      swal("密码不正确!");
      return;
    }
  })

  $(".close").on("click", function() {
    $(".content").removeClass("register-show");
  });
  $("#r-email").on("blur", function() {
    var emailV = $("#r-email").val(),
      reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!reg.test(emailV)) {
      swal("请输入正确格式的邮箱!");
      $(this).focus();
    }

  })
  $("#r-username").on("input propertychange", function() {
    var usernameV = $(this).val(),
      reg = /^[a-z A-Z][0-9 a-z A-Z _]{2,9}/;
    if (!reg.test(usernameV)) {
      swal("用户名必须是以字母开头的,英文数字混合3-12位字符!");
      $(this).focus();
    }
  })
  $("#r-passWord").on("blur", function() {
    var passWordV = $(this).val(),
      reg = /^[a-z A-Z][0-9 a-z A-Z _]{2,9}/;
    if (!reg.test(passWordV)) {
      swal("用户名必须是以字母开头的,英文数字混合3-12位字符!");
      $(this).focus();
    }

  })
  $("#rc-passWord").on("blur", function() {
    var rv = $(this).val(),
      pv = $("#r-passWord").val();
    if (rv != pv) {
      swal("两次密码输入必须一致");
      $(this).focus();
      return;
    }

  })
  $(".register-go").on("click", function() {
    window.location.href = "page1.html";
  })

  $("#follow").on("click", function() {
    location.href = "page2.html";

  })

  $("#follow2").on("click", function() {
    location.href = "page3.html";
  })


  $(".g-section").on("click", function() {
    location.href = "news-first.html";
  })
})