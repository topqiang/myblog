<template>
    <div>
        <div>
            <span class="tag" :class="{on:curtag==''}" @click="curtag=''">全部</span>
            <span class="tag" v-for="tag in classifys" :key="tag" :class="{on:curtag==tag}" @click="curtag=tag">{{tag}}</span>
        </div>

        <div class="count">共检索到{{getKnowledges.length}}篇相关文章</div>

        <div class="knowledges" v-if="getKnowledges.length>0">
            <div class="knowledge" v-for="(knowledge,index) in getKnowledges" :key="index">
                <span class="knowledge_date">{{knowledge.date}}</span>
                <h4><a :href="knowledge.link" target="_blank">{{knowledge.title}}</a></h4>
                <div class="know_tags">
                    <span class="item" :class="{on:curtag==tag}" v-for="tag in knowledge.tag" :key="tag">{{tag}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import knowledge from '../knowledge.conf.js'
export default {
    name:"Knowledge",
    data(){
        return {
            curtag:'',
            knowledges:knowledge.knowledges,
            classifys:knowledge.classifys
        }
    },
    computed:{
        getKnowledges(){
            let tempArr = this.knowledges.sort((cur,cur2)=>{
                // console.log(cur.date>cur2.date,"打印");
                return new Date(cur2.date).getTime() - new Date(cur.date).getTime();
            });
            if(this.curtag){
                tempArr = tempArr.filter((cur)=>{
                    return cur.tag.includes(this.curtag);
                })
            }
            return tempArr;
        }
    }
}
</script>
<style lang="scss">
.count{
    color: #aaa;
    margin: 30px auto;
    text-align:center;
}
.knowledges{
    border-left: 2px solid #000;
    margin: 0px 10px 30px 120px;
    padding: 20px 0px;
    .knowledge{
        padding-left: 20px;
        position: relative;
        margin-bottom: 20px;
        &:before{
            content:'';
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #000;
            position: absolute;
            left: -6px;
            top: 5px;
        }
    }
    .knowledge_date{
        line-height: 20px;
        position: absolute;
        left: -120px;
    }
}
.know_tags{
    color: #a9a9a9;
    .item{
        margin-right: 10px;
        &.on{
            color: #3eaf7c;
        }
    }
}
.tag{
    padding: 0px 20px;
    line-height: 24px;
    border-radius: 12px;
    margin: 10px 10px 10px 0px;
    border: 1px solid #ccc;
    color: #ccc;
    cursor: pointer;
    display: inline-block;
    &.on{
        border-color: #3eaf7c;
        color: #3eaf7c;
    }
}
</style>

