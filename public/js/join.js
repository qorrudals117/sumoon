Kakao.init('59d434d466fbb264b8432c4791b5f4e6');
Kakao.isInitialized();


function kakaoLogin(){
  Kakao.Auth.login({
    success: function(response){
      Kakao.API.request({
        url:'/v2/user/me',
        success: function(response){
          console.log(response)
          document.getElementById('uesr').innerText = 
            response.kakao_account.profile.nickname+'님';
            document.getElementById('login').style.display = 'none'
            alert(response.kakao_account.profile.nickname +'님 로그인 되었습니다')
            document.getElementById('logout').style.display = 'block';
        }
      })
    }
  })
}

function KakaoLogout(){
    if (Kakao.Auth.getAccessToken()) {
        Kakao.API.request({
            url:'/v2/user/unlink',
            success: function(response){
              console.log(response)
              document.getElementById('uesr').style.display = 'none'
                document.getElementById('login').style.display = 'block'
                document.getElementById('logout').style.display = 'none'
                alert('로그아웃 되었습니다')
            }
        })
        Kakao.Auth.setAccessToken(undefined)
      }
}