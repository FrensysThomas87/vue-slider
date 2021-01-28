


var app = new Vue({
 el: '#root',
 data:{
   // Array di immagini
   imgs:[
     'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
     'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
     'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
     'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
   ],

 // Index per le foto
   photosIdx:0,


 },

 methods:{
   // Metodo che va avanti quando clicco su next, ma torna alla prima foto dopo l'ultima
   nextPhoto:function(){
     if(this.photosIdx === this.imgs.length - 1){
       this.photosIdx = 0;
       i = 0;

     }else{
       this.photosIdx += 1;
       i += 1;
       console.log('i vale ' + i);
       console.log(this.photosIdx);
     }
   },

   // Metodo che va indietro quando clicco su prev, ma va all'ultima se sono sulla prima
   prevPhoto:function(){

     if(this.photosIdx === 0){
       this.photosIdx = this.imgs.length - 1;
       i = this.imgs.length - 1;
     }else{
       this.photosIdx -= 1;
       i -= 1;
       console.log('i vale ' + i);
       console.log(this.photosIdx);
     }
   },

   findActiveDot:function(i){
     if(i === this.photosIdx){
      return 'fas fa-circle active';
     }else{
      return 'fas fa-circle';
     }
   },

   findSlide:function(newIndex){
      this.photosIdx = newIndex;
   }
}
});
Vue.config.devtools = true;
