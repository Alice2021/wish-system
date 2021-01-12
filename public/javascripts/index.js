var container = $('#container');
var colors = ['#207de0','#42baec','#e3e197','#6cde47','#ecc733'];
var createItem = function (name, content){
    var color = colors[parseInt(Math.random() * 5)];
    $ ('<div class="item"><p>' + name + ':</p><p>' + content + '</p><a href="#">关闭</a></div>').css({'background':color}).appendTo(container).drag();
};
$.fn.drag = function () {
    var $this = $(this);
    var parent = $this.parent();
    var px = parent.width();
    var py = parent.height();
    var thisWidth = $this.width();
    var thisHeight = $this.height();
    var ex, ey, positionX, positionY;
    var isDown = false;
    $this.css({
        "position" : "absolute"
    }).css({
        "left" : Math.random() * (px - thisWidth),
        "top" : Math.random() * (py - thisHeight)
    }).mousedown(function (e){
        $this.parent().children().css({
            "zIndex" : 0

        })
        $this.css({
            "zIndex" : 1
        })
        isDown = true;
        ex = e.pageX;
        ey = e.pageY;
        positionX = ex - $this.position().left;
        positionY = ey - $this.position().top;
        return false
    });
    console.log(isDown)//判断参数是否传递
    $(document).mousemove(function (e){//调用全局文档的鼠标移动监视
        if(isDown){
            var mx = e.pageX;
            var my = e.pageY;
            var y = my - positionY;
            var x = mx - positionX;
            $this.css({
                "top" : y,
                "left" : x
            })
        }else {
            return
        }
        if (x<0) {
            $this.css({
                "left" : 0
            })
        }
        if (x > (px - thisWidth)) {
            $this.css ({
                "left": px - thisWidth
            });
        }
        if (y < 0) {
            $this.css ({
                "top": "0"
            });
        }
        if (y > (py - thisHeight)) {
            $this.css ({
                "top": py - thisHeight
            });
        }
    }).mouseup(function (){
        isDown = false;

    });






}
var list = container.attr ('data-list');
$.each(JSON.parse(list),function (i, v) {
    createItem(v.name, v.content);
});
// if (x < 0) {
//     $this.css ({
//         "left": "0"
//     });
// }
// if (x > (px - thisWidth)) {
//     $this.css ({
//         "left": px - thisWidth
//     });
// }
// if (y < 0) {
//     $this.css ({
//         "top": "0"
//     });
// }
// if (y > (py - thisHeight)) {
//     $this.css ({
//         "top": py - thisHeight
//     });
// }