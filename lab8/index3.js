var num = 0;

$('body').on('click', '.add', (e) => {
  doAdd(e);
})

$('body').on('click', '.del', (e) => {
  doDel(e);
})

function doAdd(e) {
  let t = e.currentTarget;
  let item = `<div class="content"><div class="no">${++num}</div><div class="info"></div><div class="del">Delete</div></div>`
  $(t).prev().append(item);
}

function doDel(e) {
  let t = e.currentTarget;
  $(t).parent().remove();
  num --;
  upload();
}

function upload() {
  let contentList = $('.data').children();
  let i = num;
  contentList.map((index,item)=>{
  	$(item).find('.no').text(num - (--i));
  })
}