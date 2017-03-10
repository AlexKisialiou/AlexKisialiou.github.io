

$(function(){
 var sender = 'Kiselyou Alexey';
 var subject = "Important information about your account - ";
 var content = 'We’re happy to announce that on January 31, 2017, LogMeIn, Inc. and Citrix Systems, '  +
     'Inc.’s GetGo subsidiary, (a wholly owned subsidiary consisting of the GoTo family of' +
     'products), completed our merger. ';
 var date = '01.10.2016';

 var countMail = 50;
 makeDrugAndDrop();
 createMail(countMail);

 function makeDrugAndDrop() {
  $('.folder').resizable( {
   handles: 'e',
   minWidth: '150',
   maxWidth: '500',
   resize: function () {
    var remaingSpace = $(this).parent().width() - $(this).outerWidth();
    var divTwo = $(this).next();
    var divTwoWidth = remaingSpace - (divTwo.outerWidth() - divTwo.width());
    divTwo.css('width', divTwoWidth + 'px');
   }
  });
 }
 function createMail(count) {
  for (var i = 0; i < count; i++) {
   $(".mail").append('<a href=""><div class="lineMail" ' + i + '">' +
       '<div class="selection"><input type="checkbox"/></div>' +
       '<div class="sender">'  + sender + '</div>' +
       '<div class="content"><span class="subject">' + subject + '</span><span class="content">' + content + '</span>' + content + '</div>' +
       '<div class="date">' + date + '</div>' +
       '</div></a>')
  }
 }
});