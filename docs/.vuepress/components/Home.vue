<template>
    <div>
        <p align="center">
            <a href="https://gitee.com/topqiang" target="_blank">
                <img class="myheader" width="150" src="myheader.png" alt="logo">
            </a>
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },


}
</script>

<style>
    .myheader{
        border-radius: 50%;
        border: 4px solid #ffdddd;
        animation: .5s ease-in-out;
        transform: skew(0,0);
    }
    .myheader:hover{
        animation-name: myheader;
    }
    @keyframes myheader{
        10%{
            transform: skew(10deg,15deg);
        }
        30%{
            transform: skew(10deg,5deg);
        }
        50%{
            transform: skew(10deg,-5deg);
        }
        70%{
            transform: skew(10deg,-15deg);
        }
        90%{
            transform: skew(0deg,-15deg);
        }
        100%{
            transform: skew(0,0);
        }
    }
</style>

