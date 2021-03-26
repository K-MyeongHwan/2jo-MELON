
function addJavascript(jsname) {// functions.js 불러오기

	var th = document.getElementsByTagName('head')[0];

	var s = document.createElement('script');

	s.setAttribute('type','text/javascript');

	s.setAttribute('src',jsname);

	th.appendChild(s);

}
addJavascript('functions.js');


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

  //menu//

  let audio = [
    {
      albumpath: "",
      audiopath: "music/braveGirls.mp3",
      selfiepath: "",
      mbti:"",
      processbar:""
    },
    {
      albumpath: "",
      audiopath: "music/celebrity.mp3",
      selfiepath: "",
    },
    {
      albumpath: "",
      audiopath: "music/coffee.mp3",
      selfiepath: "",
    },
    {
      albumpath: "",
      audiopath: "music/braveGirls.mp3",
      selfiepath: "",
    },
    {
      albumpath: "",
      audiopath: "music/celebrity.mp3",
      selfiepath: "",
    },
    {
      albumpath: "",
      audiopath: "music/coffee.mp3",
      selfiepath: "",
    },
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

    //노래 재생, 정지 버튼                                                                                  //from stay
  $("#pausebtn").on({
    click: function () {
      let check = $("#realaudio").attr("class"); //audio의 class가 playing인지 pause인지 구별하기위한 변수
      console.log(check);
      console.log("THIS IS PAUSEBTN");

      let track = findActive();
      console.log("track : "+track)

      console.log("track is not 0");
      if (check === "playing") {
        $("#realaudio").removeClass("playing").addClass("pause");
        $("#realaudio").attr("src", "");
      } else if (check === "pause") {
        $("#realaudio").removeClass("pause").addClass("playing");
        audioPlay(track, audio);
      }
    },
  });
    
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
    afterLoad: function (origin, destination, direction) {                                  //from stay
      if (origin) {
        progressbar_start(origin.index, destination.index);
        audioPlay(destination.index, audio); // destination.index >> 현재 페이지 번호
      }
    },
  });
  //fullpage//
  
  //progressbar reset하고 start하기
  function progressbar_start(){
    let page = findActive();//페이지 번호
    
 
    
  }
  //progressbar reset하고 start하기

  //인원에 맞는 노래 플레이//
  //페이지에 맞는 번호와 audio index를 매칭해서 노래 플레이
  function audioPlay(index, audio) {                                                                //from stay
    if (index !== 0) {
      console.log("this is " + index);
      console.log(audio[index - 1]);
      $("#realaudio").attr("src", audio[index - 1].audiopath);
      $("#realaudio").play;
      $("#realaudio").attr("class", "playing");
    } else {
      console.log("this is " + index);
      console.log(audio[index - 1]);
      $("#realaudio").attr("src", "");
    }

  };
  //클립보드복사//

  //경고창//
  //이메일주소 카피,되도록이면 크롬과 엣지 써달라고 alert//
  //경고창//
}); //전체 닫기

function findActive(){ /////////////////////////////현재 class에 active인 section 찾아 반환해준다.

  let page;
   $(" div[class*=active]").each(function () {
    // div중 class에 "active"가 포함된
    let id = $(this).attr("id");
    if (id !== undefined) {
      console.log("id : " +id);
      if (id.includes("section")) {
        page = id.substring(id.length - 1);
      }
    }
  });
  console.log("page : " + page);
  return page;

};