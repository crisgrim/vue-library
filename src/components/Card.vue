<template>
  <article class="card">
    <img :src="img">
    <caption>
      <h3>{{title}}</h3>
      <p>{{description}}</p>
      <button>{{button}}</button>
    </caption>
  </article>
</template>

<script>

export default {
  name: 'Card',
  props: {
    img: String,
    title: String,
    description: String,
    button: {
      type: String,
      default: 'Leer más'
    }
  },
}
</script>

<style>
  img {
    width: 100%;
  }
  caption {
    display: block;
    padding: 20px 40px;
    text-align: left;
  }
  .card {
    background-color: #fff;
    border-color: #fff;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    border-radius: 5px;
    color: rgba(0,0,0,0.87);
    margin-bottom: 20px;
    text-decoration: none;
  }
</style>
