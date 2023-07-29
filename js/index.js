{
  const images = $('.stockSubImage');
  let nums = [];

  $(function () {
    // topImageスライド
    // const swiper = new Swiper('.swiper', {
    //   loop: true,
    //   autoplay: { delay: 6000, disableOnInteraction: false },
    // });

    $('#topImage').hide().fadeIn(4000);

    // サブ画像1
    setInterval(() => {
      setSubImage(0);
    }, 7000);
    // サブ画像2
    setInterval(() => {
      setSubImage(1);
    }, 17000);
    // サブ画像3
    setInterval(() => {
      setSubImage(2);
    }, 10000);
    // サブ画像4
    setInterval(() => {
      setSubImage(3);
    }, 21000);
    // サブ画像5
    setInterval(() => {
      setSubImage(4);
    }, 8000);
  });

  /**
   * 画像のスライドショー
   * @param {number} elmNo 画像ID番号
   */

  function setSubImage(elmNo) {
    let setNum = null;
    while (true) {
      setNum = Math.floor(Math.random() * images.length);
      if (nums.includes(setNum)) {
        continue;
      }
      break;
    }
    nums[elmNo] = setNum;
    $('#subImage' + elmNo).attr('src', $(images[setNum]).attr('src'));
    console.log(nums);
  }
}
