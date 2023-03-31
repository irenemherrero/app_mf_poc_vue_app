<script>
export default {
  data() {
	  return {
    	counter: 0
  	}
	}
}
</script>

<template>
	<div style="margin-top: 20px; border-radius: 10px; padding: 43px; background: rgb(62, 179, 127, 0.1); display: flex; flex-direction: column;">
		<span style="color: rgb(62, 179, 127); font-size: 20px; font-weight: 700; padding-bottom: 18px;">Vue component</span>  
		<span style="padding-bottom: 18px;">This is a Vue random component shared with Modules Federation.</span>
		<p>The button above has been clicked <span style="font-size: 22px; color: rgb(62, 179, 127); font-weight: 700;">{{ counter }}</span> times.</p>
		<button @click="counter++" style="font-size: 16px; width: 100px; border: none; background: rgb(62, 179, 127); color: white; padding: 10px; border-radius: 4px; cursor: pointer;">
			Click me!
		</button>
	</div>
</template>