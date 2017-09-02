'use strict';

function render(data){
  console.log(data.events);
  let htmlStr = '';
  data.events.map((item,idx) =>
    htmlStr += `<li>${item.title} - 
                  <a href=${item.link}>link</a>
                </li>`
  );
  $('#main-list').html(htmlStr);
}