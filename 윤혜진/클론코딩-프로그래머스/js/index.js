// 무한 슬라이드
// 성장 여정



// // 첫번째와 마지막 슬라이드를 복제해 앞뒤로 붙여놓기 
// const makeClone = function (slideList) {
//   const clonedFirstSlide = slideList.firstElementChild.cloneNode(true);
//   const clonedLastSlide = slideList.lastElementChild.cloneNode(true);
//   slideList.append(clonedFirstSlide)
//   slideList.insertBefore(clonedLastSlide, slideList.firstElementChild)
// }


// // 슬라이드 초기화
// const slideInit = function (slideList) {
//   slideList.style.marginLeft = `-${100 * 1}%`
//   slideList.style.transition = `0s all`;
// }


// // 다음 슬라이드로 이동
// const moveSlide = function (slideList, currentIdx) {
//   // 슬라이드 이동
//   slideList.style.marginLeft = `-${100 * (currentIdx + 2)}%`;
//   slideList.style.transition = `1s all`;

//   // 마지막 슬라이드일 경우, 복사한 첫번째 슬라이드에서 진짜 첫번째 위치로 이동
//   if (currentIdx === totSlidePages - 1) {
//     // 마지막 슬라이드 이동 1초 후, 첫번째 위치로 이동
//     setTimeout(function () {
//       slideList.style.marginLeft = `-${100 * 1}%`;
//       slideList.style.transition = `0s all`;
//     }, 1000)
//     // 슬라이드 인덱스 초기화
//     currentIdx = -1;
//   }

//   // 다음 슬라이드 인덱스 지정
//   currentIdx += 1;
// }

class Slide {
  constructor(slideList, prevBtns, nextBtns, playInfinite = false) {
    this.currentIdx = 0;  // 현재 슬라이드 인덱스
    this.slideList = slideList;  // 슬라이드 목록
    this.totSlidePages = slideList.querySelectorAll('.slide__inner').length;  // 슬라이드 총 개수
    // this.totSlidePages = totSlidePages;
    this.playInfinite = playInfinite;  // 무한 슬라이드인지 
    this.infiniteSlide;  // 무한 슬라이드 실행 함수를 할당하게 될 변수
    this.prevBtns = prevBtns;  // '이전' 버튼
    this.nextBtns = nextBtns;  // '다음' 버튼

    // 무한 슬라이드 진행
    if (this.playInfinite) this.playInfiniteSlide()

    // 버튼 클릭 이벤트 실행
    this.prevBtnEvent()
    this.nextBtnEvent()
  }

  // 첫번째와 마지막 슬라이드를 복제해 앞뒤로 붙여놓기 
  makeClone() {
    const clonedFirstSlide = this.slideList.firstElementChild.cloneNode(true);
    const clonedLastSlide = this.slideList.lastElementChild.cloneNode(true);
    this.slideList.append(clonedFirstSlide)
    this.slideList.insertBefore(clonedLastSlide, this.slideList.firstElementChild)
  }

  // 슬라이드 초기화
  slideInit() {
    this.slideList.style.marginLeft = `-${100 * 1}%`
    this.slideList.style.transition = `0s all`;
  }

  // 다음 슬라이드로 이동
  moveSlide(control) {
    let movingDistance;   // 슬라이드 이동 방향 및 거리
    let limitIdx;         // 한계 위치에 있는 인덱스
    let limitDistance;    // 한계 인덱스에 있을 때, 슬라이드 이동 거리
    let initIdx;          // 인덱스 초기화 값
    let nextIdxDirection; // 다음 슬라이드 인덱스 방향
    if (this.playInfinite) {
      switch (control) {
        case 'prev':
          movingDistance = `-${100 * (this.currentIdx)}%`;
          limitIdx = 0;
          limitDistance = `-${100 * this.totSlidePages}%`;
          initIdx = this.totSlidePages;
          nextIdxDirection = -1;
          break;
        case 'next':
          movingDistance = `-${100 * (this.currentIdx + 2)}%`;
          limitIdx = this.totSlidePages - 1;
          limitDistance = `-${100 * 1}%`;
          initIdx = -1;
          nextIdxDirection = 1;
          break;
      }

      // 슬라이드 이동
      this.slideList.style.marginLeft = movingDistance;
      this.slideList.style.transition = `1s all`;

      // 마지막(첫번째) 슬라이드일 경우, 복사한 첫번째(마지막) 슬라이드에서 진짜 첫번째(마지막) 위치로 이동
      if (this.currentIdx === limitIdx) {
        // 마지막(첫번째) 슬라이드 이동 1초 후, 첫번째(마지막) 위치로 이동
        const self = this;
        setTimeout(function () {
          self.slideList.style.marginLeft = limitDistance;
          self.slideList.style.transition = `0s all`;
        }, 1000)
        // 슬라이드 인덱스 초기화
        this.currentIdx = initIdx;
      }

      // 다음 슬라이드 인덱스 지정
      this.currentIdx += nextIdxDirection * 1;
    } else {
      switch (control) {
        case 'prev':
          movingDistance = `-${100 * (this.currentIdx)}%`;
          nextIdxDirection = -1;
          break;
        case 'next':
          movingDistance = `-${100 * (this.currentIdx + 1)}%`;
          nextIdxDirection = 1;
          break;
      }

      // 슬라이드 이동
      this.slideList.style.marginLeft = movingDistance;
      this.slideList.style.transition = `1s all`;

      // 다음 슬라이드 인덱스 지정
      this.currentIdx += nextIdxDirection * 1;
    }
  }

  // 무한 슬라이드 진행
  playInfiniteSlide() {
    this.makeClone();
    this.slideInit();
    const self = this;
    this.infiniteSlide = setInterval((control) => self.moveSlide(control), 3000, 'next');  // 무한 슬라이드
  }

  // '이전' 버튼 클릭 이벤트
  prevBtnEvent() {
    const self = this;
    this.prevBtns.forEach(function (prevBtn) {
      prevBtn.addEventListener('click', function () {
        if (self.playInfinite) {
          clearInterval(self.infiniteSlide);  // 무한 슬라이드 중단
          self.moveSlide('prev');
          self.infiniteSlide = setInterval((control) => self.moveSlide(control), 3000, 'next');  // 무한 슬라이드 재개
        } else {
          self.moveSlide('prev');
        }
      })
    })
  }

  // '다음' 버튼 클릭 이벤트
  nextBtnEvent() {
    const self = this;
    this.nextBtns.forEach(function (nextBtn) {   // '다음' 버튼 클릭 시
      nextBtn.addEventListener('click', function () {
        if (self.playInfinite) {
          clearInterval(self.infiniteSlide);   // 무한 슬라이드 중단
          self.moveSlide('next');
          self.infiniteSlide = setInterval((control) => self.moveSlide(control), 3000, 'next');   // 무한 슬라이드 재개
        } else {
          self.moveSlide('next');
        }
      })
    })
  }
}




// 슬라이드 박스를 호버했을 때, 이전/이후 슬라이드가 있을 경우에만 버튼이 나타나게
const displayControlBtns = function (slideList, slideInstance) {
  slideList.addEventListener('mouseover', function () {
    if (slideInstance.currentIdx - 1 >= 0) {
      slideInstance.prevBtns[0].style.display = 'block';
    }
    if (slideInstance.currentIdx + 1 < slideInstance.totSlidePages) {
      slideInstance.nextBtns[0].style.display = 'block';
    }
  })
  slideList.addEventListener('mouseout', function () {
    slideInstance.prevBtns[0].style.display = 'none';
    slideInstance.nextBtns[0].style.display = 'none';
  })

  slideInstance.prevBtns[0].addEventListener('mouseover', function () {
    if (slideInstance.currentIdx - 1 >= 0) {
      slideInstance.prevBtns[0].style.display = 'block';
    }
    if (slideInstance.currentIdx + 1 < slideInstance.totSlidePages) {
      slideInstance.nextBtns[0].style.display = 'block';
    }
  })
  slideInstance.nextBtns[0].addEventListener('mouseover', function () {
    if (slideInstance.currentIdx - 1 >= 0) {
      slideInstance.prevBtns[0].style.display = 'block';
    }
    if (slideInstance.currentIdx + 1 < slideInstance.totSlidePages) {
      slideInstance.nextBtns[0].style.display = 'block';
    }
  })

}




// 문서 로딩 직후
document.addEventListener('DOMContentLoaded', function () {
  // 1) 'growth-journey' section 무한 슬라이드
  const growthJourneySection = document.querySelector('.growth-journey')
  const growthJourneySlideList = growthJourneySection.querySelector('.slide__list')
  const growthJourneyPrevBtns = growthJourneySection.querySelectorAll('.slide__prev-btn')
  const growthJourneyNextBtns = growthJourneySection.querySelectorAll('.slide__next-btn')

  const growthJourneySlide = new Slide(growthJourneySlideList, growthJourneyPrevBtns, growthJourneyNextBtns, playInfinite = true);
  // growthJourneySlide.makeClone();
  // growthJourneySlide.slideInit();
  // let infiniteSlide = setInterval((control) => growthJourneySlide.moveSlide(control), 3000, 'next');  // 무한 슬라이드


  // growthJourneyPrevBtns.forEach(function (growthJourneyPrevBtn) {   // '이전' 버튼 클릭 시
  //   growthJourneyPrevBtn.addEventListener('click', function () {
  //     clearInterval(infiniteSlide);  // 무한 슬라이드 중단
  //     growthJourneySlide.moveSlide('prev');
  //     infiniteSlide = setInterval((control) => growthJourneySlide.moveSlide(control), 3000, 'next');  // 무한 슬라이드 재개
  //   })
  // })
  // growthJourneyNextBtns.forEach(function (growthJourneyNextBtn) {   // '다음' 버튼 클릭 시
  //   growthJourneyNextBtn.addEventListener('click', function () {
  //     clearInterval(infiniteSlide);   // 무한 슬라이드 중단
  //     growthJourneySlide.moveSlide('next');
  //     infiniteSlide = setInterval((control) => growthJourneySlide.moveSlide(control), 3000, 'next');   // 무한 슬라이드 재개
  //   })
  // })

  // 위 무한 슬라이드 실행하는 메서드 추가
  // 위 버튼 클릭 시 슬라이드 이동하는 것도 메서드화 하기

  // 2) 'clean-code' section
  // 2-1) 'course-statement' subsection 슬라이드
  // const courseStatementSubsection = document.querySelector('.course-statement')
  // const courseStatementSlideContainer = courseStatementSubsection.querySelector('.slide')

  // 슬라이드 박스를 호버했을 때, 이전/이후 슬라이드가 있을 경우에만 버튼이 나타나게
  // courseStatementSlideContainer.addEventListener('mouseover', function (event) {
  //   const courseStatementSlideList = event.currentTarget.querySelector('.slide__list')
  //   const courseStatementPrevBtns = event.currentTarget.querySelectorAll('.slide__prev-btn')
  //   const courseStatementNextBtns = event.currentTarget.querySelectorAll('.slide__next-btn')

  //   const courseStatementSlide = new Slide(courseStatementSlideList);

  //   if (courseStatementSlide.currentIdx - 1 >= 0) {
  //     courseStatementPrevBtn.style.display = 'block';
  //   }
  //   if (courseStatementSlide.currentIdx + 1 < courseStatementSlide.totSlidePages) {
  //     courseStatementNextBtn.style.display = 'block';
  //   }
  // })


  const courseStatementSubsection = document.querySelector('.course-statement')
  const courseStatementSlideList = courseStatementSubsection.querySelector('.slide__list')
  const courseStatementPrevBtns = courseStatementSubsection.querySelectorAll('.slide__prev-btn')
  const courseStatementNextBtns = courseStatementSubsection.querySelectorAll('.slide__next-btn')

  const courseStatementSlide = new Slide(courseStatementSlideList, courseStatementPrevBtns, courseStatementNextBtns);
  displayControlBtns(courseStatementSlideList, courseStatementSlide);


  // 2-2) 'recommend-lecture' subsection 슬라이드
  const recommendLectureSubsection = document.querySelector('.recommend-lecture')
  const recommendLectureSlideList = recommendLectureSubsection.querySelector('.slide__list')
  const recommendLecturePrevBtns = recommendLectureSubsection.querySelectorAll('.slide__prev-btn')
  const recommendLectureNextBtns = recommendLectureSubsection.querySelectorAll('.slide__next-btn')

  const recommendLectureSlide = new Slide(recommendLectureSlideList, recommendLecturePrevBtns, recommendLectureNextBtns);
  displayControlBtns(recommendLectureSlideList, recommendLectureSlide);


  // 3) 'good-developer' section
  // 3-3) 'others-applied-position' subsection 슬라이드
  const othersAppliedPositionSubsection = document.querySelector('.others-applied-position')
  const othersAppliedPositionSlideList = othersAppliedPositionSubsection.querySelector('.slide__list')
  const othersAppliedPositionPrevBtns = othersAppliedPositionSubsection.querySelectorAll('.slide__prev-btn')
  const othersAppliedPositionNextBtns = othersAppliedPositionSubsection.querySelectorAll('.slide__next-btn')

  const othersAppliedPositionSlide = new Slide(othersAppliedPositionSlideList, othersAppliedPositionPrevBtns, othersAppliedPositionNextBtns);
  displayControlBtns(othersAppliedPositionSlideList, othersAppliedPositionSlide);
})