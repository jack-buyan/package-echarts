<template>
  <div class="selectvalue">
<!--    <input type="text"></input>-->
    <el-select size="mini" v-model="value" selected="selected"  @change="selectValue()" placeholder="月">
      <el-option
        v-for="(item,index) in options"
        :key="index"
        :value="item.label">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'chartSelect',
  props:{
    options:{
      type:Array,
      default:()=>[]
    }
  },
  data(){
    return{
      value:''
    }
  },
  methods:{
    selectValue(){
      this.$emit('changeFn',this.value)
    }
  }
}
</script>

<style scoped lang="less">
::v-deep .el-input__inner {
  border-color: white !important;
  background: rgba(0, 24, 59, 1);
  border: 1px solid rgba(27, 126, 242, 1) !important;
}
.selectvalue{
  position: absolute;
  width: 70px;
  z-index:9999;
  top: 19%;
  right: 4%;
}

</style>
