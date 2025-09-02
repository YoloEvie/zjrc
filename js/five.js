$(document).ready(function() {
    // 为每个图片容器添加鼠标进入和离开事件
    $('.content > div').hover(
        function() {
            // 鼠标进入时的效果
            var $this = $(this);
            var $black = $this.find('.black');
            var $h2 = $black.find('h2');
            var $p = $black.find('p');
            
            // 计算动画的距离（h2标签的高度）
            var h2Height = $h2.outerHeight();
            
            // 隐藏h2并显示p
            $h2.css('line-height', '100px'); // 减小行高，使h2上移
            $p.fadeIn(300); // 淡入显示p标签
        },
        function() {
            // 鼠标离开时的效果
            var $this = $(this);
            var $black = $this.find('.black');
            var $h2 = $black.find('h2');
            var $p = $black.find('p');
            
            // 恢复h2的原始位置和隐藏p
            $h2.css('line-height', '454px'); // 恢复原始行高
        }
    );
});
