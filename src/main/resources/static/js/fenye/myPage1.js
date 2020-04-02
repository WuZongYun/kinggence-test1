/*根据页数生成页码按钮*/
function addPagePurpose() {
    $("#spELPurpose").html("");
    var totalPage =$("#totalPageEPurpose").val();
    var page =$("#currentPageEPurpose").val();
    var str = "<li> <a href='javascript:void(0)' onclick='firstPagePurpose()'><i class='fa fa-angle-double-left' style='font-size: 18px; font-weight: bold'> </i> </a> </li> <li class='prev'> <a href='javascript:void(0)' onclick='perPurposePage()'> <i class='fa fa-chevron-left'> </i> </a> </li>";
    if(totalPage==1){
        str+="<li name='li'value='1'> <a href='javascript:void(0)' id='onePurpose' onclick='perPurpose()'  name='pageBtnPurpose' value='1'>1</a></li>" +
            "<li class='next'><a href='javascript:void(0)' onclick='nextPurposePage()'><i class='fa fa-chevron-right'></i></a></li><li><a href='javascript:void(0)' onclick='lastPagePurpose()'><i class='fa fa-angle-double-right'style='font-size: 18px; font-weight: bold'></i></a></li>";
    }else if(totalPage==2){
        str+="<li name='li'value='1'> <a href='javascript:void(0)' id='onePurpose' onclick='perPurpose()'  name='pageBtnPurpose' value='1'>1</a></li>" +
            "<li name='li' value='2'> <a href='javascript:void(0)' id='twoPurpose' onclick='nowPurpose()'  name='pageBtnPurpose' value='2'>2</a></li>" +
            "<li class='next'><a href='javascript:void(0)' onclick='nextPurposePage()'><i class='fa fa-chevron-right'></i></a></li><li><a href='javascript:void(0)' onclick='lastPagePurpose()'><i class='fa fa-angle-double-right'style='font-size: 18px; font-weight: bold'></i></a></li>";
    }else if(totalPage>=3){
        if(page==1||page==2){
            str+="<li name='li'value='1'> <a href='javascript:void(0)' id='onePurpose' onclick='perPurpose()'  name='pageBtnPurpose' value='1'>1</a></li>" +
                "<li name='li'value='2'> <a href='javascript:void(0)' id='twoPurpose' onclick='nowPurpose()'  name='pageBtnPurpose' value='2'>2</a></li>" +
                "<li name='li' value='3'> <a href='javascript:void(0)' id='threePurpose' onclick='nextPurpose()' name='pageBtnPurpose'  value='3'>3</a>" +
                "<li class='next'><a href='javascript:void(0)' onclick='nextPurposePage()'><i class='fa fa-chevron-right'></i></a></li><li><a href='javascript:void(0)' onclick='lastPagePurpose()'><i class='fa fa-angle-double-right'style='font-size: 18px; font-weight: bold'></i></a></li>";
        }else if(page==totalPage){
            var perPage=parseInt(page)-2;
            var nowPage=parseInt(page)-1;
            var nextPage=parseInt(page);
            str+="<li name='li' value='"+perPage+"'> <a href='javascript:void(0)' id='onePurpose' onclick='perPurpose()'  name='pageBtnPurpose' value='"+perPage+"'>"+perPage+"</a></li>" +
                "<li name='li'value='"+nowPage+"'> <a href='javascript:void(0)' id='twoPurpose'  onclick='nowPurpose()'  name='pageBtnPurpose' value='"+nowPage+"'>"+nowPage+"</a></li>" +
                "<li name='li'value='"+nextPage+"'> <a href='javascript:void(0)' id='threePurpose' onclick='nextPurpose()' name='pageBtnPurpose'  value='"+nextPage+"'>"+nextPage+"</a>" +
                "<li class='next'><a href='javascript:void(0)' onclick='nextPurposePage()'><i class='fa fa-chevron-right'></i></a></li><li><a href='javascript:void(0)' onclick='lastPagePurpose()'><i class='fa fa-angle-double-right'style='font-size: 18px; font-weight: bold'></i></a></li>";
        }else{
            var perPage=parseInt(page)-1;
            var nextPage=parseInt(page)+1;
            str+="<li name='li' value='"+perPage+"'> <a href='javascript:void(0)' id='onePurpose'  onclick='perPurpose()'  name='pageBtnPurpose' value='"+perPage+"'>"+perPage+"</a></li>" +
                "<li name='li' value='"+page+"'> <a href='javascript:void(0)' id='twoPurpose'  onclick='nowPurpose()'  name='pageBtnPurpose' value='"+page+"'>"+page+"</a></li>" +
                "<li name='li' value='"+nextPage+"'> <a href='javascript:void(0)' id='threePurpose' onclick='nextPurpose()' name='pageBtnPurpose'  value='"+nextPage+"'>"+nextPage+"</a></li>" +
                "<li class='next'><a href='javascript:void(0)' onclick='nextPurposePage()'><i class='fa fa-chevron-right'></i></a></li><li><a href='javascript:void(0)' onclick='lastPagePurpose()'><i class='fa fa-angle-double-right'style='font-size: 18px; font-weight: bold'></i></a></li>";
        }
    }
    document.getElementById("spELPurpose").innerHTML=str;
    checkPageBtn();
}
/*选中样式*/
function checkPageBtn() {
    var list=document.getElementsByName("li");
    var page =$("#currentPageEPurpose").val();
    for(var i=0;i<list.length;i++){
        if(list[i].value == page){
            list[i].setAttribute('class','active');
        }
    }
}