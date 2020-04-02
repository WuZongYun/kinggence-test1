/*根据页数生成页码按钮*/
function addPage() {
    $("#spEL").html("");
    var totalPage =$("#totalPageEl").val();
    var page =$("#currentPageEl").val();
    var str="<li><a href='javascript:void(0)' onclick='firstPage()'><i class='fa fa-angle-double-left' style='font-size: 18px; font-weight: bold'></i></a> </li> <li class='prev'> <a href='javascript:void(0)' onclick='perPage()'><i class='fa fa-chevron-left'></i></a></li>";
    if(totalPage==1){
        str+="<li name='lis' value='1'><a href='javascript:void(0)' id='one'  onclick='per()'  name='pageBtn' value='1'>1</a></li>" +
            "<li class='next'><a href='javascript:void(0)' onclick='nextpage()'><i class='fa fa-chevron-right'></i></a></li><li><a href='javascript:void(0)' onclick='lastPage()'><i class='fa fa-angle-double-right'style='font-size: 18px; font-weight: bold'></i></a></li>";
    }else if(totalPage==2){
        str+="<li name='lis'value='1'><a href='javascript:void(0)' id='one' onclick='per()'  name='pageBtn' value='1'>1</a></li>" +
            "<li name='lis' value='2'><a href='javascript:void(0)' id='two' onclick='now()'  name='pageBtn' value='2'>2</a></li>" +
            "<li class='next'><a href='javascript:void(0)' onclick='nextpage()'><i class='fa fa-chevron-right'></i></a></li><li><a href='javascript:void(0)' onclick='lastPage()'><i class='fa fa-angle-double-right'style='font-size: 18px; font-weight: bold'></i></a></li>";
    }else if(totalPage>=3){
        if(page==1||page==2){
            str+="<li name='lis' value='1'><a href='javascript:void(0)' id='one' onclick='per()'  name='pageBtn' value='1'>1</a></li>" +
                "<li name='lis' value='2'><a href='javascript:void(0)' id='two' onclick='now()'  name='pageBtn' value='2'>2</a></li>" +
                "<li name='lis' value='3'><a href='javascript:void(0)' id='three'  name='pageBtn' onclick='next()' value='3'>3</a>" +
                "<li class='next'><a href='javascript:void(0)' onclick='nextpage()'><i class='fa fa-chevron-right'></i></a></li><li><a href='javascript:void(0)' onclick='lastPage()'><i class='fa fa-angle-double-right'style='font-size: 18px; font-weight: bold'></i></a></li>";
        }else if(page==totalPage){
            var perPage=parseInt(page)-2;
            var nowPage=parseInt(page)-1;
            var nextPage=parseInt(page);
            str+="<li name='lis' value='"+perPage+"'><a href='javascript:void(0)' id='one' onclick='per()'  name='pageBtn' value='"+perPage+"'>"+perPage+"</a></li>" +
                "<li name='lis' value='"+nowPage+"'><a href='javascript:void(0)' id='two'  onclick='now()'  name='pageBtn' value='"+nowPage+"'>"+nowPage+"</a></li>" +
                "<li name='lis' value='"+nextPage+"'><a href='javascript:void(0)' id='three'  name='pageBtn' onclick='next()' value='"+nextPage+"'>"+nextPage+"</a>" +
                "<li class='next'><a href='javascript:void(0)' onclick='nextpage()'><i class='fa fa-chevron-right'></i></a></li><li><a href='javascript:void(0)' onclick='lastPage()'><i class='fa fa-angle-double-right'style='font-size: 18px; font-weight: bold'></i></a></li>";
        }else{
            var perPage=parseInt(page)-1;
            var nextPage=parseInt(page)+1;
            str+="<li name='lis' value='"+perPage+"'><a href='javascript:void(0)' id='one'  onclick='per()'  name='pageBtn' value='"+perPage+"'>"+perPage+"</a></li>" +
                "<li name='lis' value='"+page+"'><a href='javascript:void(0)' id='two'  onclick='now()'  name='pageBtn' value='"+page+"'>"+page+"</a></li>" +
                "<li name='lis' value='"+nextPage+"'><a href='javascript:void(0)' id='three'  name='pageBtn' onclick='next()' value='"+nextPage+"'>"+nextPage+"</a>" +
                "<li class='next'><a href='javascript:void(0)' onclick='nextpage()'><i class='fa fa-chevron-right'></i></a></li><li><a href='javascript:void(0)' onclick='lastPage()'><i class='fa fa-angle-double-right'style='font-size: 18px; font-weight: bold'></i></a></li>";
        }
    }
    document.getElementById("spEL").innerHTML=str;
    checkPageBtn11();
}
/*选中样式*/
function checkPageBtn11() {
    var list=document.getElementsByName("lis");
    var page =$("#currentPageEl").val();
    for(var i=0;i<list.length;i++){
        if(list[i].value == page){
            list[i].setAttribute('class','active');
        }
    }
}