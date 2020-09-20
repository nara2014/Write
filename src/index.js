// コンテンツアイテム 定数
let items = [{date:'2018年9月1日', title:'書くためのテーマ', sentence:'Writeは文章を書く人のためのミニマルなWordPressテーマです。装飾を極限まで省いたデザインは、あなたの文章を主役にします。'},
             {date:'2018年3月5日', title:'画像付きの投稿'  , sentence:'吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。'},
             {date:'2018年3月5日', title:'引用付きの投稿'  , sentence:'吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれ…'}
];

// コンテンツ表示 
const main = document.querySelector('#main_items');
// コンテンツアイテム分ループ
for (let i = 0; i < items.length; i++) {
  console.log( items[i].date );
  main.insertAdjacentHTML('beforeend', '<div class="item">' +
    '<div class="date">' + items[i].date + '</div>' +
    '<div class="wrap">' +
      '<div class="title">' + items[i].title + '</div>' +
      '<div class="sentence">' + items[i].sentence + '</div>' +
    '</div>' +
  '</div>');
}

