//Enable view full image left on click
function leftImageBig() {
  $('.image-left').replaceWith('<div class="image-big"><img src="images/onrela_wiki.png" width="990" height="750" alt="onrela"></div>');
  $('.image-big').append('<div class="button-close" onclick="leftImageSmall()"><img src="images/close.png" width="32" height="32" alt="close">');
  $('.image-right').hide();
  $('.text-under-image').hide();
  $('.button').hide();
}
function leftImageSmall() {
  $('.image-big').replaceWith('<div class="image-left" onclick="leftImageBig()"><img src="images/onrela_wiki.png" width="460" height="348" alt="onrela"><div class="text-under-image">Внутрений сайт инструкций компании интернет-провайдера. Разработан с целью сокращения времени на поиск необходимой информации, а также для накопления и управления знаниями. Реализован на CMS DocuWiki.</div></div>');
  $('.button-close').remove();
  $('.image-right').show();
  $('.text-under-image').show();
  $('.button').show();
}
//Enable view full image right on click
function rightImageBig() {
  $('.image-right').replaceWith('<div class="image-big" onclick="rightImageSmall()"><img src="images/onrela_info.jpg" width="990" height="750" alt="onrela"></div>');
  $('.image-big').append('<div class="button-close" onclick="rightImageSmall()"><img src="images/close.png" width="32" height="32" alt="close">');
  $('.image-left').hide();
  $('.text-under-image').hide();
  $('.button').hide();
}
function rightImageSmall() {
  $('.image-big').replaceWith('<div class="image-right" onclick="rightImageBig()"><img src="images/onrela_info.jpg" width="460" height="348" alt="onrela"><div class="text-under-image">Внутрений сайт новостей компании интернет-провайдера. Разработан с целью информирования сотрудников.<br>Реализован на CMS WordPress.</div></div>');
  $('.button-close').remove();
  $('.image-left').show();
  $('.text-under-image').show();
  $('.button').show();
}
