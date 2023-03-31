<script>
export default {
  data() {
    return {
      text: "This is random content of a Vue page to share with Modules Federation.",
      hostTitle: "",
    };
  },
  methods: {
    changeMainTitle() {
      const customEvent = new CustomEvent('changeTitle', { detail: {title: this.hostTitle }});
      window.dispatchEvent(customEvent)
      this.hostTitle = ""
    }
  }
};
</script>


<template>
  <div style="margin: 20px; border-radius: 10px; padding: 43px; background: rgb(62, 179, 127, 0.1); display: flex; flex-direction: column;">
		<span style="color: rgb(62, 179, 127); font-size: 20px; font-weight: 700; padding-bottom: 18px;">Vue page</span>  
    <div>{{ text }}</div>
    <input v-model="hostTitle" type="text" placeholder="Write a main title"/>
    <button @click="changeMainTitle" style="font-size: 16px; width: 150px; border: none; background: rgb(62, 179, 127); color: white; padding: 10px; margin-top: 10px;border-radius: 4px; cursor: pointer;">
			Change title!
		</button>
  </div>
</template>


