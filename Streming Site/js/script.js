function scrollHandler() {
    let windowBottom = $(window).scrollTop() + $(window).height();  // 현재 브라우저 창의 맨 아래부분이 얼마인지 계산한다.
    
    /*
    let playlists = $('.playlist'); // 각 플레이 리스트 div객체를 변수에 담는다
    for (let i = 0; i < playlists.length; i++) {    // playlists 변수에 담긴 객체 배열 수 만큼 반복. 매번 총 7번씩 도는 게 좀 비효율적이긴 한데......
      let playlist = $(playlists[i]);   // 배열의 요소 하나 하나를 jquery 객체로 해서 담는다. jquery 객체로 담아야 아래에서 jquery 함수를 쓸 수 있다.
      let playlistHalf = playlist.position().top + playlist.outerHeight() / 2;  // 각 플레이 리스트의 맨 위 위치에다가 플레이 리스트의 높이를 더한 후 2로 나누면 중간을 알 수 있다. 위치와 높이를 jquery함수로 가져왔다.
      
      if (playlistHalf < windowBottom) {    // 플레이리스트의 중간이 윈도우의 맨 아래보다 크면, 즉 걸치면.
        playlist.animate({'opacity': '1'}, 1000);   // 1초간 투명도가 1로 변하는 애니메이션 실행
      }
    }
    */

    $('.playlist').each(function(){
        console.log('lslsl');
        let thisHalf = $(this).position().top + $(this).outerHeight() / 2;  // 각 플레이 리스트의 맨 위 위치에다가 플레이 리스트의 높이를 더한 후 2로 나누면 중간을 알 수 있다. 위치와 높이를 jquery함수로 가져왔다.
      
        if (thisHalf < windowBottom) {    // 플레이리스트의 중간이 윈도우의 맨 아래보다 크면, 즉 걸치면.
            $(this).animate({'opacity': '1'}, 1000);   // 1초간 투명도가 1로 변하는 애니메이션 실행
        }
    })
  }
  
  // 스크롤 될 때마다 scrollHandler() 함수 호출
  $(window).on('scroll', scrollHandler);
  // 처음에도 한 번 scrollHandler() 함수 호출되도록
  $(document).ready(scrollHandler());