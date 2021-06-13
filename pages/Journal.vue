<template>
	<div>
    <Header />
    <div class="journal-wrap text-center">
      <div class="journal-inner flex-wrap flex ml-36">
        <div class="journal-content">
          <h2 class="">
            <a href="">Journal of Asia</a>
          </h2>
          <p class="text-3xl pb-12">2010 — 2020</p>
        </div>
        <div class="journal-content">
          <h2>
            <a href="">A Five-Minute Guide to Better Typography</a>
          </h2>
          <p class="journal-subttl">Talk</p>
        </div>
        <div class="journal-content">
          <h2>
            <a href="">Practical Advice for the Confused Designer</a>
          </h2>
          <p class="journal-subttl">Talk</p>
        </div>
        <div class="journal-content">
          <h2>
            <a href="">How Restraint Will Fuel Your Creativity</a>
          </h2>
          <p class="journal-subttl">Talk</p>
        </div>
        <div class="journal-content">
          <h2>
            <a href="">Vision from the Loop</a>
          </h2>
          <p class="journal-subttl">Went & Saw</p>
        </div>
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
header li:nth-child(5) a{
  border-bottom: solid 1px #333;
}
.journal-content{
  max-width: 410px;
  margin-bottom: 100px;
}
.journal-content h2{
  font-family: 'Noto Serif JP', sans-serif;
  font-size: 60px;
  line-height: 65px;
  letter-spacing: -0.08em;
  margin-bottom: 40px;
}
.journal-subttl{
  font-size: 18px;
  font-weight: 300;
  padding-bottom: 50px;
}
.journal-content p{
  position: relative;
}
.journal-content p::before{
  content: "";
  position: absolute; 
  height: 1px;
  width: 50px;
  background: #333;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

</style>