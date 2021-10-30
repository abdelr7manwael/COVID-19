let  checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});




$(window).scroll(function () {
  let y = $(window).scrollTop();
  if (y > 450) {
    $('.go').css('opacity', "1");
  } else {
    $('.go').css('opacity', "0");
  }
})



$("#one").click(function () {
  $(".item1").css("display", "block")
  $(".item2").css("display", "none")
  $(".item3").css("display", "none")
  $(".item4").css("display", "none")
  $(".item5").css("display", "none")
  $(".item6").css("display", "none")
});
$("#two").click(function () {
  $(".item2").css("display", "block")
  $(".item1").css("display", "none")
  $(".item3").css("display", "none")
  $(".item4").css("display", "none")
  $(".item5").css("display", "none")
  $(".item6").css("display", "none")
});

$("#three").click(function () {
  $(".item1").css("display", "none")
  $(".item2").css("display", "none")
  $(".item3").css("display", "block")
  $(".item4").css("display", "none")
  $(".item5").css("display", "none")
  $(".item6").css("display", "none")
});
$("#four").click(function () {
  $(".item1").css("display", "none")
  $(".item2").css("display", "none")
  $(".item3").css("display", "none")
  $(".item4").css("display", "block")
  $(".item5").css("display", "none")
  $(".item6").css("display", "none")
});
$("#five").click(function () {
  $(".item1").css("display", "none")
  $(".item2").css("display", "none")
  $(".item3").css("display", "none")
  $(".item4").css("display", "none")
  $(".item5").css("display", "block")
  $(".item6").css("display", "none")
});
$("#six").click(function () {
  $(".item1").css("display", "none")
  $(".item2").css("display", "none")
  $(".item3").css("display", "none")
  $(".item4").css("display", "none")
  $(".item5").css("display", "none")
  $(".item6").css("display", "block")
});

$(document).ready(function () {
  $(".click1").on("click", function (display) {
    $("#block1").slideToggle();
  });
});

$(document).ready(function () {
  $(".click2").on("click", function () {
    $("#block2").slideToggle();
  });
});
$(document).ready(function () {
  $(".click3").on("click", function () {
    $("#block3").slideToggle();
  });
});
$(document).ready(function () {
  $(".click4").on("click", function () {
    $("#block4").slideToggle();
  });
});
$(document).ready(function () {
  $(".click5").on("click", function () {
    $("#block5").slideToggle();
  });
});
$(document).ready(function () {
  $(".click6").on("click", function () {
    $("#block6").slideToggle();
  });
});
$(document).ready(function () {
  $(".click7").on("click", function () {
    $("#block7").slideToggle();
  });
});
$(document).ready(function () {
  $(".click8").on("click", function () {
    $("#block8").slideToggle();
  });
});
$(document).ready(function () {
  $(".click9").on("click", function () {
    $("#block9").slideToggle();
  });
});
$(document).ready(function () {
  $(".click10").on("click", function () {
    $("#block10").slideToggle();
  });
});
$(document).ready(function () {
  $(".click11").on("click", function () {
    $("#block11").slideToggle();
  });
});
$(document).ready(function () {
  $(".click12").on("click", function () {
    $("#block12").slideToggle();
  });
});
$(document).ready(function () {
  $(".click13").on("click", function () {
    $("#block13").slideToggle();
  });
});
$(document).ready(function () {
  $(".click14").on("click", function () {
    $("#block14").slideToggle();
  });
});
$(document).ready(function () {
  $(".click15").on("click", function () {
    $("#block15").slideToggle();
  });
});
$(document).ready(function () {
  $(".click15").on("click", function () {
    $("#block15").slideToggle();
  });
});
$(document).ready(function () {
  $(".click15").on("click", function () {
    $("#block15").slideToggle();
  });
});
$(document).ready(function () {
  $(".click16").on("click", function () {
    $("#block16").slideToggle();
  });
});
$(document).ready(function () {
  $(".click17").on("click", function () {
    $("#block17").slideToggle();
  });
});
$(document).ready(function () {
  $(".click18").on("click", function () {
    $("#block18").slideToggle();
  });
});
$(document).ready(function () {
  $(".click19").on("click", function () {
    $("#block19").slideToggle();
  });
});

$(document).ready(function () {
  $(".click20").on("click", function () {
    $("#block20").slideToggle();
  });
});
$(document).ready(function () {
  $(".click21").on("click", function () {
    $("#block21").slideToggle();
  });
});
$(document).ready(function () {
  $(".click22").on("click", function () {
    $("#block22").slideToggle();
  });
});
$(document).ready(function () {
  $(".click23").on("click", function () {
    $("#block23").slideToggle();
  });
});
$(document).ready(function () {
  $(".click24").on("click", function () {
    $("#block24").slideToggle();
  });
});
$(document).ready(function () {
  $(".click25").on("click", function () {
    $("#block25").slideToggle();
  });
});
$(document).ready(function () {
  $(".click26").on("click", function () {
    $("#block26").slideToggle();
  });
});
$(document).ready(function () {
  $(".click27").on("click", function () {
    $("#block27").slideToggle();
  });
});
$(document).ready(function () {
  $(".click28").on("click", function () {
    $("#block28").slideToggle();
  });
});
$(document).ready(function () {
  $(".click29").on("click", function () {
    $("#block29").slideToggle();
  });
});
$(document).ready(function () {
  $(".click30").on("click", function () {
    $("#block30").slideToggle();
  });
});
$(document).ready(function () {
  $(".click31").on("click", function () {
    $("#block31").slideToggle();
  });
});



$(document).ready(function () {
  $('ul li').click(function () {
    $('li.active').removeClass("active");
    $(this).addClass("active");
  });
});