<div id="map" style="width:100%;height:350px;"></div>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d02dcfc67797f4e8bbee3cbb2ab50881"></script>
<script>var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
center: new kakao.maps.LatLng(35.9460546, 126.6821658), // 지도의 중심좌표
level: 3 // 지도의 확대 레벨
};
										
// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);
var markerPosition = new kakao.maps.LatLng(35.9460546, 126.6821658);
var marker = new kakao.maps.Marker({
position: markerPosition
});
marker.setMap(map);
</script>
