// choosejs
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.category-btn');
  
  // 初始状态：con1显示，one按钮为active
  document.querySelector('.one').classList.add('active');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      
      // 移除所有按钮的active类
      document.querySelectorAll('.one, .two, .three, .four, .five, .six').forEach(el => {
        el.classList.remove('active');
        el.style.backgroundColor = '#FFFFFF';
        el.style.border = '1px solid #FFBB00';
      });
      
      // 为当前点击的按钮添加active类
      const innerDiv = this.querySelector('div');
      innerDiv.classList.add('active');
      
      // 隐藏所有内容
      document.querySelectorAll('.con').forEach(con => {
        con.style.display = 'none';
      });
      
      // 显示目标内容
      document.querySelector('.' + target).style.display = 'block';
    });
  });
});



// con1js (潮流地标)
$(document).ready(function() {
  $('.con1 .click-image').on('click', function() {
    var targetClass = $(this).data('target');
    
    // 隐藏所有内容区块（添加淡出动画）
    $('.con1 .dongjiao, .con1 .huanqiu, .con1 .tianfu, .con1 .taiguli, .con1 .chunxilu').fadeOut(300);
    
    // 显示目标内容区块（添加淡入动画）
    setTimeout(function() {
      $('.con1 .' + targetClass).fadeIn(500);
    }, 300);
    
    // 添加当前图片的激活状态
    $('.con1 .click-image').removeClass('active');
    $(this).addClass('active');
  });
});

// con2js (文化古迹)
$(document).ready(function() {
  $('.con2 .click-image').on('click', function() {
    var targetClass = $(this).data('target');
    
    // 隐藏所有内容区块（添加淡出动画）
    $('.con2 .mingshu, .con2 .dufu, .con2 .wuhou, .con2 .yongling, .con2 .jinsha').fadeOut(300);
    
    // 显示目标内容区块（添加淡入动画）
    setTimeout(function() {
      $('.con2 .' + targetClass).fadeIn(500);
    }, 300);
    
    // 添加当前图片的激活状态
    $('.con2 .click-image').removeClass('active');
    $(this).addClass('active');
  });
});

// con3js (市井烟火)
$(document).ready(function() {
  $('.con3 .click-image').on('click', function() {
    var targetClass = $(this).data('target');
    
    // 隐藏所有内容区块（添加淡出动画）
    $('.con3 .sansheng, .con3 .dongmen, .con3 .renmin, .con3 .wangping, .con3 .yulin').fadeOut(300);
    
    // 显示目标内容区块（添加淡入动画）
    setTimeout(function() {
      $('.con3 .' + targetClass).fadeIn(500);
    }, 300);
    
    // 添加当前图片的激活状态
    $('.con3 .click-image').removeClass('active');
    $(this).addClass('active');
  });
});

// con4js (自然山水)
$(document).ready(function() {
  $('.con4 .click-image').on('click', function() {
    var targetClass = $(this).data('target');
    
    // 隐藏所有内容区块（添加淡出动画）
    $('.con4 .tiantai, .con4 .xiling, .con4 .dujiang, .con4 .qingcheng, .con4 .yulin').fadeOut(300);
    
    // 显示目标内容区块（添加淡入动画）
    setTimeout(function() {
      $('.con4 .' + targetClass).fadeIn(500);
    }, 300);
    
    // 添加当前图片的激活状态
    $('.con4 .click-image').removeClass('active');
    $(this).addClass('active');
  });
});

// con5js (古镇民俗)
$(document).ready(function() {
  $('.con5 .click-image').on('click', function() {
    var targetClass = $(this).data('target');
    
    // 隐藏所有内容区块（添加淡出动画）
    $('.con5 .anren, .con5 .kuanzhai, .con5 .luodai, .con5 .ginli, .con5 .huanglong').fadeOut(300);
    
    // 显示目标内容区块（添加淡入动画）
    setTimeout(function() {
      $('.con5 .' + targetClass).fadeIn(500);
    }, 300);
    
    // 添加当前图片的激活状态
    $('.con5 .click-image').removeClass('active');
    $(this).addClass('active');
  });
});

// con6js (宗教圣地)
$(document).ready(function() {
  $('.con6 .click-image').on('click', function() {
    var targetClass = $(this).data('target');
    
    // 隐藏所有内容区块（添加淡出动画）
    $('.con6 .dacisi, .con6 .baoguang, .con6 .wenshu, .con6 .qingyang, .con6 .hemin').fadeOut(300);
    
    // 显示目标内容区块（添加淡入动画）
    setTimeout(function() {
      $('.con6 .' + targetClass).fadeIn(500);
    }, 300);
    
    // 添加当前图片的激活状态
    $('.con6 .click-image').removeClass('active');
    $(this).addClass('active');
  });
});
