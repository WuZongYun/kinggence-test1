function openDialog(sysId){
            var url = "/system/getSystemBySysId?sysId="+sysId;
            $.ajax({
                type: "GET",
                url: url,
                success: function(data){
                    $("#lightSon").html("");
                    var lightSon=document.getElementById("lightSon");
                    var str ="<div><h4><strong>" + data.sysName + "</strong><h4></div>"+ "<div style='width: 100%;height:80%'><img src='"+data.sysPhoto +"' style='width: 100%;height: 350px' alt='泓大智能' /></div>";
                    lightSon.innerHTML = str;
                }
            });
            document.getElementById('light').style.display='block';
            document.getElementById('fade').style.display='block'
        }
        function closeDialog(){
            document.getElementById('light').style.display='none';
            document.getElementById('fade').style.display='none'
        }