$(document).ready(function () {
  //menu//
  //mlnb01//
  $(".menu").on("click", function () {
    $(".mlnb").css({
      width: "100%",
      height: "100%",
    });
  });
  $("i").on("click", function () {
    $(".mlnb").css({
      width: "0",
    });
  });
  $(".mlnb li").click(function () {
    $(".mlnb").css({
      width: "0",
    });
  });

  /*each문 사용법
			$(this).parents('.mlnb').each(function(){
					$(this).css({
						width:'50%',
						height:'100%'
					})
				  })*/

  /*$(this).parents('.mlnb').each(function(){
					$(this).css({
						width:'0'
						//height:'0'
					})
				  })*/

  //menu//

  let audio = [
    {
      albumpath: "",
      audiopath: "music/braveGirls.mp3",
      selfiepath: "",
    },{
		albumpath: "",
		audiopath: "music/celebrity.mp3",
		selfiepath: "",
	  },{
		albumpath: "",
		audiopath: "music/coffee.mp3",
		selfiepath: "",
	  },{
		albumpath: "",
		audiopath: "music/braveGirls.mp3",
		selfiepath: "",
	  },{
		albumpath: "",
		audiopath: "music/celebrity.mp3",
		selfiepath: "",
	  },{
		albumpath: "",
		audiopath: "music/coffee.mp3",
		selfiepath: "",
	  }
  ];

  //fullpage//
  $("#fullpage").fullpage({
    sectionSelector: ".section",
    scrolloverflow: true,
    anchors: [
      "1stPage",
      "2ndPage",
      "3rdPage",
      "4thPage",
      "5thPage",
      "6thPage",
      "7thPage",
      "8thPage",
    ],
    navigation: true,
    navigationTooltips: [
      "Intro",
      "About",
      "Portfolio01",
      "Portfolio02",
      "Portfolio03",
      "Portfolio04",
      "Portfolio05",
      "Contact",
    ],
    slidesNavigation: true,
    menu: "#menu",
    afterLoad: function (origin, destination, direction) {
      if (origin) {
        audioPlay(destination.index, audio); // destination.index >> 현재 페이지 번호
      }
    }
  });
  //fullpage//

  //인원에 맞는 노래 플레이//
  //페이지에 맞는 번호와 audio index를 매칭해서 노래 플레이
  function audioPlay(index, audio) {
	  console.log(audio)
    switch (index) {
      case 0: {
		$("#realaudio").attr("src", "");
		  break;
      }
      case 1: {
        console.log("this is " + index);
		console.log(audio[index-1])
        $("#realaudio").attr("src", audio[index-1].audiopath);
        $("#realaudio").play;
        break;
      }
      case 2: {
        console.log("this is " + index);
		console.log(audio[index-1])

        $("#realaudio").attr("src", audio[index-1].audiopath);
        $("#realaudio").play;
        break;
      }
      case 3: {
        console.log("this is " + index);
        $("#realaudio").attr("src", audio[index-1].audiopath);
        $("#realaudio").play;
        break;
      }
      case 4: {
        console.log("this is " + index);
		$("#realaudio").attr("src", audio[index-1].audiopath);
        $("#realaudio").play;
        break;
      }
      case 5: {
        console.log("this is " + index);
		$("#realaudio").attr("src", audio[index-1].audiopath);
        $("#realaudio").play;
        break;
      }
      case 6: {
        console.log("this is " + index);
		$("#realaudio").attr("src", audio[index-1].audiopath);
        $("#realaudio").play;
        break;
      }
    }
  }

  //fullpage//
  $("#fullpage").fullpage({
    sectionSelector: ".section",
    scrolloverflow: true,
    anchors: [
      "1stPage",
      "2ndPage",
      "3rdPage",
      "4thPage",
      "5thPage",
      "6thPage",
      "7thPage",
      "8thPage",
    ],
    navigation: true,
    navigationTooltips: [
      "Intro",
      "About",
      "Portfolio01",
      "Portfolio02",
      "Portfolio03",
      "Portfolio04",
      "Portfolio05",
      "Contact",
    ],
    slidesNavigation: true,
    menu: "#menu",
    afterLoad: function (origin, destination, direction) {
      if (origin) {
        audioPlay(destination.index, audio); // destination.index >> 현재 페이지 번호
											 // audio 배열을 같이 넣어줌
      }
    },
  });
  //fullpage//

  //인원에 맞는 노래 플레이//
  function audioPlay(index, audio) {
    console.log(audio);
    switch (index) {
      case 0: {
        $("#realaudio").attr("src", "");
        break;
      }
      case 1: {
        console.log("this is " + index);
        console.log(audio[index - 1]);
        $("#realaudio").attr("src", audio[index - 1].audiopath);
        $("#realaudio").play;
        break;
      }
      case 2: {
        console.log("this is " + index);
        console.log(audio[index - 1]);

        $("#realaudio").attr("src", audio[index - 1].audiopath);
        $("#realaudio").play;
        break;
      }
      case 3: {
        console.log("this is " + index);
        $("#realaudio").attr("src", audio[index - 1].audiopath);
        $("#realaudio").play;
        break;
      }
      case 4: {
        console.log("this is " + index);
        $("#realaudio").attr("src", audio[index - 1].audiopath);
        $("#realaudio").play;
        break;
      }
      case 5: {
        console.log("this is " + index);
        $("#realaudio").attr("src", audio[index - 1].audiopath);
        $("#realaudio").play;
        break;
      }
      case 6: {
        console.log("this is " + index);
        $("#realaudio").attr("src", audio[index - 1].audiopath);
        $("#realaudio").play;
        break;
      }
    }
  }
  //클립보드복사//
  function copyToClipboard(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
  }
  $(".cInfo01 span").click(function () {
    copyToClipboard("thdek13@hanmail.net");
    alert("클립보드로 복사되었습니다.");
  });
  $(".cInfo02 span").click(function () {
    copyToClipboard("jeong1233");
    alert("클립보드로 복사되었습니다.");
  });
  $(".cInfo03 span").click(function () {
    copyToClipboard("http://jeong1233.dothome.co.kr/portfolio");
    alert("클립보드로 복사되었습니다.");
  });
  //클립보드복사//

  //경고창//
  //이메일주소 카피,되도록이면 크롬과 엣지 써달라고 alert//
  //경고창//
}); //전체 닫기
