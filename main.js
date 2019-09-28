'use strict';

{
    // Slideshow
    
    const images=[
        'img/top_model_1.jpg',
        'img/top_model_2.jpg',
        'img/top_model_3.jpg',
        'img/top_model_4.jpg'
    ]


    let currentNum = 0;


    function setMainImage(image){
        document.querySelector('.main img').src = image;
    }


    setMainImage(images[currentNum]);
   

    function removeCurrentClass(){
        document.querySelectorAll('.thumbnails li')[currentNum].classList.remove('current');
    }
    
    function addCurrentClass(){
        document.querySelectorAll('.thumbnails li')[currentNum].classList.add('current');
    }

  

    let timeoutId;

    function playSlideshow(){
        timeoutId = setTimeout(() => {
            next.click();
            playSlideshow();
        }, 2000)
    }


    const thumbnails = document.querySelector('.thumbnails');
    images.forEach((image, index) => {
        const li = document.createElement('li');

        if(index === currentNum){
            li.classList.add('current');
        }

        li.addEventListener('click',()=>{
            setMainImage(image);
            removeCurrentClass();
            currentNum = index;
            addCurrentClass();
        })

        const img = document.createElement('img');
        img.src =image;
        li.appendChild(img);
        thumbnails.appendChild(li);
    })

    const next = document.getElementById('next');
    next.addEventListener('click',() =>{
        removeCurrentClass();
        currentNum++;
        if(currentNum === images.length){
            currentNum = 0;
        }
        addCurrentClass();
        setMainImage(images[currentNum]);
    })

    const prev = document.getElementById('prev');
    prev.addEventListener('click',() =>{
        removeCurrentClass();
        currentNum--;
        if(currentNum < 0){
            currentNum = images.length -1;
        }
        addCurrentClass();
        setMainImage(images[currentNum]);
    })


    const play = document.getElementById('play');
    const pause = document.getElementById('pause');

    play.addEventListener('click',()=>{
        play.classList.add('hidden');
        pause.classList.remove('hidden');
        playSlideshow();
    })
    pause.addEventListener('click',()=>{
        play.classList.remove('hidden');
        pause.classList.add('hidden');
        clearTimeout(timeoutId);
    })


    //home_items

    const images_home_item=[
        'img/media_1.jpg',
        'img/media_2.jpg',
        'img/media_3.jpg',
        'img/media_4.jpg',
    ]


    let currentNum_item = 0;


    function removeCurrentHomeClass(){
        document.querySelectorAll('.item_photo li')[currentNum_item].classList.remove('current_item');

        document.querySelectorAll('.item_photo li img')[currentNum_item].classList.remove('current_item_img');

        // ターゲット以外のitemの処理
        for(var i=0;i<images_home_item.length;i++){
            if(i!==currentNum_item){
            document.querySelectorAll('.item_photo li')[i].classList.remove('not_current_item');
            }
        }
    }

    function removeCurrentHomeClassAll(){
        document.querySelectorAll('.item_photo li')[currentNum_item].classList.remove('current_item');

        document.querySelectorAll('.item_photo li img')[currentNum_item].classList.remove('current_item_img');

        for(var i=0;i<images_home_item.length;i++){
 
            document.querySelectorAll('.item_photo li')[i].classList.remove('not_current_item');
            
        }
    }
    
    function addCurrentHomeClass(){
        document.querySelectorAll('.item_photo li')[currentNum_item].classList.add('current_item');

        document.querySelectorAll('.item_photo li img')[currentNum_item].classList.add('current_item_img');


        // ターゲット以外のitemの処理
        for(var i=0;i<images_home_item.length;i++){
            if(i!==currentNum_item){
            document.querySelectorAll('.item_photo li')[i].classList.add('not_current_item');
            }
        }

    }


    const item_photo = document.querySelector('.item_photo');


    images_home_item.forEach((image, index) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const p = document.createElement('p');
        const mark = document.createElement('mark');
        img.src =image;

        if(index === currentNum_item){
            li.classList.add('current_item');
        }

        //マウスホバー時にカレントクラスを前の要素から取って、次の要素に付ける
        img.addEventListener('mouseover',()=>{
            removeCurrentHomeClass();
            currentNum_item = index;
            addCurrentHomeClass();
        })

        //マウスが画像外になった時に全ての要素からcurrent_itemを外す
        img.addEventListener('mouseout',()=>{
            removeCurrentHomeClassAll();
        })

        
        //各写真に名前を代入
        mark.innerHTML = 'PHOTO';
        //各小要素を追加
        p.appendChild(mark);
        li.appendChild(img);
        li.appendChild(p);
        item_photo.appendChild(li);
    })


     //jounal

     const images_jounal=[
        'img/jounal_1.jpg',
        'img/jounal_2.jpg',
        'img/jounal_3.jpg',
    ]


    let currentNum_item_jounal = 0;


    function removeCurrentJounalClass(){
        document.querySelectorAll('.jounal_photo li')[currentNum_item_jounal].classList.remove('current_item');

        // ターゲット以外のitemの処理
        for(var i=0;i<images_jounal.length;i++){
            if(i!==currentNum_item_jounal){
            document.querySelectorAll('.jounal_photo li')[i].classList.remove('not_current_item');
            }
        }
    }

    function removeCurrentJounalClassAll(){
        document.querySelectorAll('.jounal_photo li')[currentNum_item_jounal].classList.remove('current_item');
        for(var i=0;i<images_jounal.length;i++){
 
            document.querySelectorAll('.jounal_photo li')[i].classList.remove('not_current_item');           
            
        }
    }
    
    function addCurrentJounalClass(){
        document.querySelectorAll('.jounal_photo li')[currentNum_item_jounal].classList.add('current_item');

        // ターゲット以外のitemの処理
        for(var i=0;i<images_jounal.length;i++){
            if(i!==currentNum_item_jounal){
            document.querySelectorAll('.jounal_photo li')[i].classList.add('not_current_item');
            }
        }

    }


    const jounal_photo = document.querySelector('.jounal_photo');


    images_jounal.forEach((image, index) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const p = document.createElement('p');
        const mark = document.createElement('mark');
        img.src =image;

        if(index === currentNum_item_jounal){
            li.classList.add('current_item');
        }

        //マウスホバー時にカレントクラスを前の要素から取って、次の要素に付ける
        img.addEventListener('mouseover',()=>{
            removeCurrentJounalClass();
            currentNum_item_jounal = index;
            addCurrentJounalClass();
        })

        //マウスが画像外になった時に全ての要素からcurrent_itemを外す
        img.addEventListener('mouseout',()=>{
            removeCurrentJounalClassAll();
        })

        
        //各写真に名前を代入
        mark.innerHTML = 'PHOTO';
        //各小要素を追加
        p.appendChild(mark);
        li.appendChild(img);
        li.appendChild(p);
        jounal_photo.appendChild(li);
    })




    //JQueryで記述　スクロール時の動作
    function init() {
        // スクロールして何ピクセルでアニメーションさせるか
        var px_change   = 100;
     
        // スクロールのイベントハンドラを登録
        window.addEventListener('scroll', function(e){
            // 変化するポイントまでスクロールしたらクラスを追加
            if ( $(window).scrollTop() > px_change ) {
                $("header").addClass("is_scroll");
                $("header > ul > li").addClass("is_scroll");
     
            // 変化するポイント以前であればクラスを削除
            } else if ( $("header").hasClass("is_scroll") ) {
                $("header").removeClass("is_scroll");
                $("header > ul > li").removeClass("is_scroll")
            }
        });
    }
    window.onload = init();
}
