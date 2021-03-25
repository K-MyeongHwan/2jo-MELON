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
  var index = 0;
    var anchors = [
      "1stPage",
      "2ndPage",
      "3rdPage",
      "4thPage",
      "5thPage",
      "6thPage",
      "7thPage",
      "8thPage",
    ];
    
    //이전 버튼
    $('#prevbtn').on({
      click : function(){
        if(index-1===-1) {
          index=0;
        }
        $('#prevbtn').attr("href","#"+ anchors[--index]);
  
      }
    })

    //노래재생,정지버튼
    $('#pausebtn').on({
      click : function(){
        alert("잘가");
      }
    })
    
    //다음버튼
    $('#nextbtn').on({
      click : function(){
        if(index+1===8) {
          index=-1;
        }
        $('#nextbtn').attr("href","#"+ anchors[++index]);

      }
    })

  //fullpage//
  $("#fullpage").fullpage({
    sectionSelector: ".section",
    scrolloverflow: true,
    anchors: anchors,
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
  };
  //클립보드복사//

  //경고창//
  //이메일주소 카피,되도록이면 크롬과 엣지 써달라고 alert//
  //경고창//
}); //전체 닫기
