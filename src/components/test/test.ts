import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name:'TestTs'
})
export default class TestTs extends Vue {
  msg: string = 'click to show the current path:';
  myPath = this.$route.path;
  // myPath = '';
  

  onClick (): void {
    window.alert(`${this.msg}${this.$route.path}`)
  }
}