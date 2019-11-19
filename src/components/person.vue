<template>
  <div class="listbox">
    <el-table :data="sortlist" style="width: 100%">
    <el-table-column  prop="category_name"  label="名称" > </el-table-column>
    <el-table-column  label="日期"  width="100"> 
      <template slot-scope="scope">
        <div>
          <img :src="scope.row.pict_url" alt="" width="50" height="50">
        </div>
      </template>
    </el-table-column>
    <el-table-column  prop="zk_final_price"  label="价格(元)"  > </el-table-column>
    <el-table-column  prop="nick"  label="店铺名称"> </el-table-column>
    <el-table-column  prop="coupon_start_time"  label="日期" > </el-table-column>
    <el-table-column  prop="coupon_info"  label="活动" > </el-table-column>
    <el-table-column  prop="provcity"  label="商家地址" > </el-table-column>
    <el-table-column  label="领劵" >
       <template slot-scope="scope">
         <div>
           <a  type="text" :href="scope.row.url">领劵</a>
         </div>
       </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
 data() {
    return {
      sortlist:[],
      name:'',
    }
},
mounted() {
    this.sort();
  },
  methods: {
    sort(){
      this.name=this.$route.query.info;
      console.log(this.name)
      this.$http.get('/api/w/website/findGoodsList',{params:{
        platId:'d0a500ecf8ab41aa9ffe8e18ac6419e1',
        info:this.name
      }}).then(res=>{
        console.log(res);
        this.sortlist=res.data.data.tbk_dg_material_optional_response.result_list.map_data;
      })
    },
    get(url){
      this.$router.push(url)
    }
  },
}

</script>

<style>
.listbox{
  width: 80%;
  margin: 20px auto;
}
</style>
