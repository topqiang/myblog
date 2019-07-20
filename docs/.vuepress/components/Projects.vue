<template>
    <div>
        <article class="myProject" v-for="(proObj,index) in projects" :key="index">
            
            <header class="projectArea">
                <b>{{proObj.name}}</b>
                <span>{{proObj.companyName}}</span>
                <span>{{proObj.startTime}}——{{proObj.endTime}}</span>
            </header>
            <div class="proTag">
                <span v-for="(tag,index) in proObj.technologyTag" :key="index">
                    {{tag}}
                </span>
            </div>
            <p>
                <b>项目介绍</b>：{{proObj.projectDesc}}
                <span class="clickMore" v-if="proObj.caseImage && proObj.caseImage.length>0">查看详情图</span>
            </p>
            <p><b>我的收获</b>：{{proObj.myHarvest}}</p>
        </article>
    </div>
</template>
<script>
import projects from '../project.conf.js'
export default {
    name:"Projects",
    data(){
        return {
            projects:projects.list
        }
    }
}
</script>
<style lang="scss">
.projectArea{
    display: flex;
    justify-content: space-between;
}

.proTag span{
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0px 10px;
    /* border-radius: 13px; */
    color: #fff;
    margin-right: 5px;
    margin-top: 15px;
}
.proTag span:nth-child(5n){
    background: rgb(179, 167, 1);
}
.proTag span:nth-child(5n+1){
    background: rgb(1, 162, 173);
}
.proTag span:nth-child(5n+2){
    background: rgb(255, 63, 63);
}
.proTag span:nth-child(5n+3){
    background: rgb(223, 2, 167);
}
.proTag span:nth-child(5n+4){
    background: rgb(1, 182, 16);
}
.myProject{
    position: relative;
    padding: 10px;
    margin-bottom: 10px;
    /* border: 1px solid; */
    box-shadow: 0px 0px 10px #a7a7a7b9;
    will-change: box-shadow;
    transition: all .5s ease;
    &:hover{
        transform: translate(-5px,-5px);
        box-shadow: 10px 10px 10px #a7a7a7b9;
    }
}
.clickMore{
    color: #3eaf7c;
    text-decoration: none;
    cursor: pointer;
}
</style>

