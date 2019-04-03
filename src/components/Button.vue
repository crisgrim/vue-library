<template>
  <button>{{content}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    content: String
  }
}
</script>

<style>
button {
  display: block;
  background-color: #ffffff;
	border: 2px solid #D24D57;
  color: #D24D57;
  font-size: 18px;
  text-transform: uppercase;
  padding: 15px 30px;
  position: relative;
  -webkit-transition: all 1s ease;
	-moz-transition: all 1s ease;
	-o-transition: all 1s ease;
	transition: all 1s ease;
}
button:hover {
  background-color: #D24D57;
  color: #ffffff;
}
</style>