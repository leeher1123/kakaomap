import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '../components/Sidebar';
import { actions } from '../redux/slice';
import ResultList from '../components/ResultList';

const { kakao } = window;

const HomeContainer = () => {
  const dispatch = useDispatch();
  const categoryPlace = useSelector((state) => state.home.place);
  useEffect(() => {
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const ps = new kakao.maps.services.Places(map);

    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      const marker = new kakao.maps.Marker({
        map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', () => {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(`<div style="padding:5px;font-size:12px;">${place.place_name}</div>`);
        infowindow.open(map, marker);
      });
    }

    function displayPagination(pagination) {
      const paginationEl = document.getElementById('pagination');
      const fragment = document.createDocumentFragment();
      let i;

      // 기존에 추가된 페이지번호를 삭제합니다
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (i = 1; i <= pagination.last; i++) {
        const el = document.createElement('a');
        el.href = '#';
        el.innerHTML = i;

        if (i === pagination.current) {
          el.className = 'on';
        } else {
          // eslint-disable-next-line no-shadow
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
            };
          }(i));
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    }

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
        displayPagination(pagination);
        dispatch(actions.getSearchResults(data));
      }
    }

    ps.keywordSearch(categoryPlace, placesSearchCB);

    // 지도에 마커를 표시하는 함수입니다
  }, [categoryPlace]);
  return (
    <Container>
      <Map id="myMap" />
      <Sidebar />
      <Bar />
    </Container>
  );
};

const Container = styled.div`
  
`;

const Map = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 390px;
  right: 0;
  width: 100%;
  height: 100%;
`;

const Bar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 390px;
  margin: auto;
  width: 22px;
  height: 54px;
  z-index: 1000;
  background-image: url('https://t1.daumcdn.net/localimg/localimages/07/2018/pc/shadow/img_navi2x.png');
  background-size: 28px 126px;
`;

export default HomeContainer;
