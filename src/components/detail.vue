<template>
  <div>
    <!-- <h1>我是详情页面</h1>
    <h3>传过来的参数是：{{id}}</h3>-->

    <el-row>
      <el-col :span="6" v-for="(item,index) in allList" :key="index">
        <el-card>
          <img :src="item.icon" class="image" />
          <div style="padding: 10px;">
            <span>{{item.name}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.createDate }}</time>
              <h3>
                <font color="red">{{item.name}}</font>
              </h3>
              <!-- <el-button type="text" class="button" >操作按钮</el-button> -->
              <el-button type="success" @click="btn(item.name)">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      currentDate: '',
      allList: []
    };
  },
  created() {
    // console.log(this.$route);
    // this.id=this.$route.query.nav;
    this.$http.get("/api/w/website/findGoodsTypeList").then(res => {
      console.log(res);
      this.allList = res.data.data;
    });
  },
  methods: {
    btn(val) {
      console.log(val);
      this.$router.push("/person?info=" + val);
    }
  }
};
</script>
<style>
.box {
  width: 80%;
  overflow: auto;
  margin: 20px auto;
}
.image {
   width: 80%;
  height: 200px;
}
</style>


