<template>
  <div>
    <Header />
    <div class="commission-wrap px-36">
      <div class="commission-inner flex items-center">
        <div class="commission-content text-center">
          <h2 class="text-6xl mb-2">
            <a href="">Haden</a>
          </h2>
            <p class="text-lg">Visual Identity</p>
        </div>
        <p class="commission-img">
          <a href="">
            <img src="https://uploads-ssl.webflow.com/571514452b490af542a3138e/5efdabc3be7ea21543d22310_Pierrick%20Calvez%20Haden%2001.jpg" alt="">
          </a>
        </p>
      </div>
      <div class="commission-inner flex items-center">
        <div class="commission-content text-center">
          <h2 class="text-6xl mb-2">
            <a href="">Island X</a>
          </h2>
            <p class="text-lg">Visual Identity</p>
        </div>
        <p class="commission-img">
          <a href="">
            <img src="https://uploads-ssl.webflow.com/571514452b490af542a3138e/5ef80d00902e8cecad773716_Pierrick%20Calvez%20Island%20X%2001.jpg" alt="">
          </a>
        </p>
      </div>
      <div class="commission-inner flex items-center">
        <div class="commission-content text-center">
          <h2 class="text-6xl mb-2">
            <a href="">Nike Chongqing</a>
          </h2>
            <p class="text-lg">Merch & Mural</p>
        </div>
        <p class="commission-img">
          <a href="">
            <img src="https://uploads-ssl.webflow.com/571514452b490af542a3138e/5f086b32ca75754880ea6990_Pierrick%20Calvez%20Nike%20Chongqing%20Cover%2003.jpg" alt="">
          </a>
        </p>
      </div>
      <div class="commission-inner flex items-center">
        <div class="commission-content text-center">
          <h2 class="text-6xl mb-2">
            <a href="">Project Barossa</a>
          </h2>
            <p class="text-lg">Visual Identity</p>
        </div>
        <p class="commission-img">
          <a href="">
            <img src="https://uploads-ssl.webflow.com/571514452b490af542a3138e/5f2b8a0eea957cc26d0ed3b1_Pierrick%20Calvez%20Project%20Wine%2005.jpg" alt="">
          </a>
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {
    Header,
    Footer,
  }
};
</script>

<style>
header li:nth-child(3) a{
  border-bottom: solid 1px #333;
}
.commission-inner:nth-of-type(odd) .commission-content{
  order: 2;
  margin-left: -10%;
}
.commission-inner:nth-of-type(even) .commission-content{
  margin-right: -12%;
  position: relative;
  z-index: 100;
}
.commission-inner:nth-child(even){
  justify-content: flex-end;
}
.commission-inner:not(:nth-child(1)){
  margin-top: -50px;
}
.commission-content h2{
  font-family: 'Noto Serif JP', sans-serif;
}
.commission-img{
  width: 50vw;
}
</style>