<template>
  <div class="text-center from">
    <h2 class="mb-7 w-1/2 m-auto text-6xl">Sign-up to the Newsletter and Get the Latest Updates</h2>
    <p class="m-auto form-sub mb-10">One-click subscription / Unsubscribe anytime / Directly to your inbox</p>
    <input class="form-input w-96 h-14 text-center text-3xl font-light" type="text" placeholder="Enter your email" >
    <input type="submit" value="Subscribe" class="send-input text-white h-14 w-44 text-3xl font-light">
  </div>
</template>


<style>
.form-sub{
  width: 340px;
}
.form-input{
    background: #fff3f3;
    outline: none;
    color: #f33;
}
.form-input::placeholder{
  color: #fc5266;
  opacity: 0.4;
}
.send-input{
  background: #f33;
  cursor: pointer;
}

</style>